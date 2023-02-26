import { hasSufficientFunds, payRequest } from '@frinkly/payment-processor';
import { RequestNetwork } from '@frinkly/request-client.js';
import { Wallet } from 'ethers';

/* eslint-disable @typescript-eslint/no-floating-promises */

// for demo purpose
const wallet = Wallet.createRandom();
const requestNetwork = new RequestNetwork();

// eslint-disable-next-line
(async () => {
  const account = wallet.address;

  const request = await requestNetwork.fromRequestId('REQUEST_ID');
  const requestData = request.getData();
  if (!(await hasSufficientFunds(requestData, account))) {
    throw new Error('You do not have enough funds to pay this request');
  }
  const tx = await payRequest(requestData, wallet);
  await tx.wait(1);
})();
