// /* eslint-disable @typescript-eslint/ban-ts-comment */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// RequestNetwork is the interface we will use to interact with the Request network
import * as RequestNetwork from './dist';
// The signature provider allows us to sign the request
import { EthereumPrivateKeySignatureProvider } from '@huma-shan/epk-signature';
// The payment methods are in a separate package
import { approveErc20IfNeeded, payRequest } from '@huma-shan/payment-processor';

// The smart-contract package contains exports some standard Contracts and all of Request contracts
import { TestERC20__factory } from '@huma-shan/smart-contracts/types';

import { ERC20TransferrableReceivable__factory } from '@huma-shan/smart-contracts/types';

import { ContractTransaction, ethers, Wallet } from 'ethers';

import MultiFormat from '@huma-shan/multi-formatt';

import { config } from 'dotenv';
config();

const WEB3_PROVIDER_URL = process.env.WEB3_PROVIDER_URL;
const provider = new ethers.providers.JsonRpcProvider(
  WEB3_PROVIDER_URL,
) as ethers.providers.Provider;

// this is a local ERC20 token deployed on ganache
const localToken = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
const erc20 = TestERC20__factory.connect(localToken, provider);

const RECEIVABLE_ADDR = '0xf98b8a94edbc9628b7b2141465980f2c3acab23f';
const invoiceReceivable = ERC20TransferrableReceivable__factory.connect(RECEIVABLE_ADDR, provider);

const PAYEE_ADDRESS = '0x3BD44d4ee0E914E7ADE18a51A80f597E153aD343';
const PAYEE_PRIVATE_KEY = '0xa8e85c1c3bdcb3221493d1f43dfd9e7dd966c799fd46bd0d6a45a97f9df59adb';

const PAYER_ADDRESS = '0x4A01c67879C8188F481Ac932c938b73D9373E479';
const PAYER_PRIVATE_KEY = '0x7be5e6a94f10886842322e564b3c907c09b878c88a63a9945a89d87a4413c0d8';
const payerPaymentWallet = new Wallet(PAYER_PRIVATE_KEY, provider);

const MAX_FEE_PER_GAS = '80000000000';
const MAX_PRIORITY_FEE_PER_GAS = '40000000000';

//#region Identity setup
// Payee Identity & Private key
const payeeIdentity = {
  type: RequestNetwork.Types.Identity.TYPE.ETHEREUM_ADDRESS,
  value: PAYEE_ADDRESS,
};
const payeeSignatureInfo = {
  method: RequestNetwork.Types.Signature.METHOD.ECDSA,
  privateKey: PAYEE_PRIVATE_KEY,
};

// Payer Identity & Private key
const payerIdentity = {
  type: RequestNetwork.Types.Identity.TYPE.ETHEREUM_ADDRESS,
  value: PAYER_ADDRESS,
};
//#endregion

//#region RequestNetwork setup
// ✏️ Signature provider
const signatureProvider: RequestNetwork.Types.SignatureProvider.ISignatureProvider =
  new EthereumPrivateKeySignatureProvider(payeeSignatureInfo);

// Initialize RequestNetwok with signature provider and the node connection configuration
const requestNetwork = new RequestNetwork.RequestNetwork({
  signatureProvider,
  currencies: [
    {
      address: localToken,
      decimals: 6,
      network: 'matic',
      symbol: 'ERC20',
      type: RequestNetwork.Types.RequestLogic.CURRENCY.ERC20,
    },
  ],
  nodeConnectionConfig: {
    baseURL: 'https://polygon.rn.huma.finance',
  },
});
//#endregion

//#region Request setup
// ✏️ Payment network information
const paymentNetwork: RequestNetwork.Types.Payment.PaymentNetworkCreateParameters = {
  id: RequestNetwork.Types.Extension.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE,
  parameters: {
    paymentAddress: payeeIdentity.value,
  },
};

// ✏️ The main request info: 1 TestERC20 from Payee to Payer
const requestInfo: RequestNetwork.Types.IRequestInfo = {
  currency: 'ERC20',
  expectedAmount: '1',
  payee: payeeIdentity,
  payer: payerIdentity,
};
const requestCreateParams = {
  paymentNetwork,
  requestInfo,
  signer: payeeIdentity,
};

function sleep(ms: number | undefined) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  console.log('start...');
  console.log(await erc20.symbol());

  console.log('payee address: ' + payeeIdentity.value);

  // ✏️ Create the request
  console.log('create request: ' + JSON.stringify(requestCreateParams));
  const request: RequestNetwork.Request = await requestNetwork.createRequest(requestCreateParams);
  console.log(`request ${request.requestId} created`);
  await request.waitForConfirmation();
  console.log(`request ${request.requestId} confirmed`);

  // ✏️ Accept the request

  console.log(`Before payment`);
  console.log(`Payee: ${(await erc20.balanceOf(payeeIdentity.value)).toString()}`);
  console.log(`Payer: ${(await erc20.balanceOf(payerIdentity.value)).toString()}`);

  // const requestId = '01ee39438a977fecd2a4cb171bde2dc08220ad2cb9f31ddf7f0110d03595756038';
  // const request = await requestNetwork.fromRequestId(requestId);
  // console.log(`request: ${request.getData()}`);

  const tx1 = await approveErc20IfNeeded(
    request.getData(),
    payerPaymentWallet.address,
    payerPaymentWallet,
    { maxFeePerGas: MAX_FEE_PER_GAS, maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS },
  );
  console.log(`approved tx: ${JSON.stringify(tx1)}`);

  const requestData = request.getData();
  const tx: ContractTransaction = await payRequest(requestData, payerPaymentWallet, undefined, {
    maxFeePerGas: MAX_FEE_PER_GAS,
    maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,
  });
  console.log(`Payment tx: ${tx.hash}`);
  await tx.wait(1);
  console.log(`After payment`);

  console.log(`Payee: ${(await erc20.balanceOf(payeeIdentity.value)).toString()}`);
  console.log(`Payer: ${(await erc20.balanceOf(payerPaymentWallet.address)).toString()}`);
  console.log('Balance: ', request.getData().balance?.balance);

  console.log('payee address: ' + payeeIdentity.value);
  console.log('payee receivables: ' + (await invoiceReceivable.balanceOf(payeeIdentity.value)));

  let reqIdObj = MultiFormat.deserialize(request.requestId);
  const tokenId = reqIdObj.value;

  console.log(`${tokenId} owner: ${await invoiceReceivable.ownerOf(tokenId)}`);
  const metadataBase64 = await invoiceReceivable.tokenURI(tokenId);
  const metadata = Buffer.from(metadataBase64, 'base64').toString('ascii');
  console.log(`${tokenId} metadataBase64: ${metadataBase64}, metadata: ${metadata}`);
  reqIdObj = { value: tokenId, type: metadata };
  console.log(`combined requestId: ${MultiFormat.serialize(reqIdObj)}`);

  console.log('sleep 5s...');
  await sleep(5000);

  console.log('Balance1: ', request.getData().balance?.balance);
  await request.refresh();
  console.log('Balance2: ', request.getData().balance?.balance);
})();
