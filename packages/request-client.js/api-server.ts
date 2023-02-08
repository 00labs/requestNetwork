import * as dotenv from 'dotenv';
import * as express from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors');

import * as RequestNetwork from './dist';
import { ethers, BigNumber as BN, BigNumber } from 'ethers';
import {
  ERC20TransferrableReceivable__factory,
  IERC20Metadata__factory,
} from '@requestnetwork/smart-contracts/types';

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 4000;
const nodeURL = process.env.REQUEST_NODE_URL || 'http://localhost:3000';
const timeout = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : 120000;
const WEB3_PROVIDER_URL = process.env.WEB3_PROVIDER_URL;
const provider = new ethers.providers.JsonRpcProvider(
  WEB3_PROVIDER_URL,
) as ethers.providers.Provider;
const RECEIVABLE_ADDR = process.env.RECEIVABLE_ADDRESS;
if (!RECEIVABLE_ADDR) {
  throw new Error('Empty Invoice Receivable address');
}
const invoiceReceivable = ERC20TransferrableReceivable__factory.connect(RECEIVABLE_ADDR, provider);

const server = app.listen(port, () => {
  console.log(`app listening on port ${port}`);
  console.log(`request node url: ${nodeURL}`);
  console.log(`timeout: ${timeout}ms`);
});
server.setTimeout(timeout);

app.get('/request', async function (req, res) {
  const requestNetwork = new RequestNetwork.RequestNetwork({
    nodeConnectionConfig: { baseURL: nodeURL },
  });
  const requestId = req.query.id as string;

  if (!requestId) {
    res.status(400).send('No request id given');
    return;
  }

  let request: RequestNetwork.Request;
  try {
    request = await requestNetwork.fromRequestId(requestId);
  } catch (e) {
    console.log(`Cannot get request from request id: ${requestId}, ${e.message}`);
    res.status(400).send(`Cannot get request from request id: ${requestId}, ${e.message}`);
    return;
  }

  try {
    await request.refresh();
    res.json(request.getData());
  } catch (e) {
    console.log(e);
    res.status(500).send(`Something is wrong while getting request info, ${e.message}`);
  }
});

app.get('/invoice', async function (req, res) {
  const requestNetwork = new RequestNetwork.RequestNetwork({
    nodeConnectionConfig: { baseURL: nodeURL },
  });
  const tokenId = req.query.id as string;

  if (!tokenId) {
    res.status(400).send('No token id given');
    return;
  }

  let requestId = '';
  let tId: BigNumber;
  try {
    tId = BN.from(tokenId);
    const metadataBase64 = await invoiceReceivable.tokenURI(tId);
    requestId = Buffer.from(metadataBase64, 'base64').toString('ascii');
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send(`Something is wrong while getting request id from token id ${tokenId}, ${e.message}`);
    return;
  }

  if (!requestId) {
    res.status(400).send(`Cannot get request id from token id: ${tokenId}`);
    return;
  }

  let request: RequestNetwork.Request;
  try {
    request = await requestNetwork.fromRequestId(requestId);
  } catch (e) {
    console.log(`Cannot get request from request id: ${requestId}, ${e.message}`);
    res.status(400).send(`Cannot get request from request id: ${requestId}, ${e.message}`);
    return;
  }

  try {
    await request.refresh();
    const response = await parseInvoiceResponseFromRequestData(request.getData());
    const owner = await invoiceReceivable.ownerOf(tId);
    response.owner = owner;
    res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(`Something is wrong while getting request info, ${e.message}`);
  }
});

async function parseInvoiceResponseFromRequestData(
  data: RequestNetwork.Types.IRequestDataWithEvents,
) {
  const res: any = {};
  res.expectedAmount = data.expectedAmount;
  res.payee = data.payee?.value;
  res.payer = data.payer?.value;
  res.creationDate = data.timestamp;
  res.dueDate = 0;

  const erc20Metadata = IERC20Metadata__factory.connect(data.currencyInfo.value, provider);
  const symbol = await erc20Metadata.symbol();
  const decimals = await erc20Metadata.decimals();
  res.currencyInfo = { address: data.currencyInfo.value, symbol: symbol, decimals: decimals };

  const events = [];
  for (const event of data.events) {
    if (event.name === 'create') {
      res.initialAmount = event.parameters.expectedAmount;
      events.push({
        type: event.name,
        amount: res.initialAmount,
        timestamp: event.timestamp,
      });
    }
  }

  if (data.balance) {
    for (const event of data.balance.events) {
      if (event.name === 'payment') {
        res.initialAmount = event.parameters.expectedAmount;
        events.push({
          type: event.name,
          amount: event.amount,
          timestamp: event.timestamp,
          txHash: event.parameters.txHash,
        });
      }
    }
  }
  res.events = events;

  return res;
}

['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((signal) =>
  process.on(signal, () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      console.log('HTTP server closed');
      process.exit(0);
    });
  }),
);
