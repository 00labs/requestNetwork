import * as dotenv from 'dotenv';
import * as express from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors');

import * as RequestNetwork from './dist';

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 4000;
const nodeURL = process.env.REQUEST_NODE_URL || 'http://localhost:3000';
const timeout = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : 120000;

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

['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach((signal) =>
  process.on(signal, () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      console.log('HTTP server closed');
      process.exit(0);
    });
  }),
);
