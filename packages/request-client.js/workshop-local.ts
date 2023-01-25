// RequestNetwork is the interface we will use to interact with the Request network
import * as RequestNetwork from './dist';
// The signature provider allows us to sign the request
import { EthereumPrivateKeySignatureProvider } from '@requestnetwork/epk-signature';
// The payment methods are in a separate package
import {
  payRequest,
  approveErc20IfNeeded,
  mintErc20TransferrableReceivable,
} from '@requestnetwork/payment-processor';

// The smart-contract package contains exports some standard Contracts and all of Request contracts
import { TestERC20__factory } from '@requestnetwork/smart-contracts/types';

import { ERC20TransferrableReceivable__factory } from '@requestnetwork/smart-contracts/types';

import { ContractTransaction, ethers, Wallet } from 'ethers';

import MultiFormat from '@requestnetwork/multi-format';

//#region Local ERC20 Config
const provider = new ethers.providers.JsonRpcProvider() as ethers.providers.Provider;

// this is a local ERC20 token deployed on ganache
const localToken = '0x9FBDa871d559710256a2502A2517b794B482Db40';
const erc20 = TestERC20__factory.connect(localToken, provider);

const RECEIVABLE_ADDR = '0x2e335F247E91caa168c64b63104C4475b2af3942';
const invoiceReceivable = ERC20TransferrableReceivable__factory.connect(RECEIVABLE_ADDR, provider);

//#endregion

//#region Wallets setup
// For the sake of simplicity, we use a single mnemonic for all wallets.
const mnemonic = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat';

// Each actor has 2 wallets, one for identity (used to sign stuff) and one for payments
const payerIdentityWallet = Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/0");
// NB: this wallet needs to stay the /1 since it's the only one with fake TestER20
const payerPaymentWallet = Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/1").connect(provider);

const payeeIdentityWallet = Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/2");
const payeePaymentWallet = Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/3").connect(provider);
payeePaymentWallet;

//#endregion

//#region Identity setup
// Payee Identity & Private key
const payeeIdentity = {
  type: RequestNetwork.Types.Identity.TYPE.ETHEREUM_ADDRESS,
  value: payeeIdentityWallet.address,
};
const payeeSignatureInfo = {
  method: RequestNetwork.Types.Signature.METHOD.ECDSA,
  privateKey: payeeIdentityWallet.privateKey,
};

// Payer Identity & Private key
const payerIdentity = {
  type: RequestNetwork.Types.Identity.TYPE.ETHEREUM_ADDRESS,
  value: payerIdentityWallet.address,
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
      decimals: 18,
      network: 'private',
      symbol: 'ERC20',
      type: RequestNetwork.Types.RequestLogic.CURRENCY.ERC20,
    },
  ],
});
//#endregion

//#region Request setup
// ✏️ Payment network information
const paymentNetwork: RequestNetwork.Types.Payment.IPaymentNetworkCreateParameters = {
  id: RequestNetwork.Types.Payment.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE,
  parameters: {
    // paymentAddress: payeePaymentWallet.address,
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
//#endregion

function sleep(ms: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  console.log('payee address: ' + payeeIdentity.value);

  // ✏️ Create the request
  const request: RequestNetwork.Request = await requestNetwork.createRequest(requestCreateParams);
  console.log(`request ${request.requestId} created`);
  await request.waitForConfirmation();
  console.log(`request ${request.requestId} confirmed`);
  const requestData = request.getData();

  // ✏️ Mint the receivable
  const mintTx: ContractTransaction = await mintErc20TransferrableReceivable(
    requestData,
    payerPaymentWallet,
  );
  console.log(`Mint tx: ${mintTx.hash}`);
  await mintTx.wait(1);
  console.log(`After mint`);

  console.log(`Before payment`);
  console.log(`Payee: ${(await erc20.balanceOf(payeeIdentity.value)).toString()}`);
  console.log(`Payer: ${(await erc20.balanceOf(payerPaymentWallet.address)).toString()}`);
  // ✏️ Pay the request
  await approveErc20IfNeeded(requestData, payerPaymentWallet.address, payerPaymentWallet);

  const tx: ContractTransaction = await payRequest(requestData, payerPaymentWallet);
  console.log(`Payment tx: ${tx.hash}`);
  await tx.wait(1);
  console.log(`After payment`);

  console.log(`Payee: ${(await erc20.balanceOf(payeeIdentity.value)).toString()}`);
  console.log(`Payer: ${(await erc20.balanceOf(payerPaymentWallet.address)).toString()}`);

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

  await sleep(5000);

  console.log('Balance1: ', request.getData().balance?.balance);
  await request.refresh();
  console.log('Balance2: ', request.getData().balance?.balance);
})();
