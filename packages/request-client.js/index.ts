// RequestNetwork is the interface we will use to interact with the Request network
import * as RequestNetwork from '.';
// The signature provider allows us to sign the request
import { EthereumPrivateKeySignatureProvider } from '@requestnetwork/epk-signature';
// The payment methods are in a separate package
import { payRequest, approveErc20IfNeeded } from '@requestnetwork/payment-processor';
// The smart-contract package contains exports some standard Contracts and all of Request contracts
import { TestERC20__factory } from '@requestnetwork/smart-contracts/types';

import { InvoiceNFT__factory } from '@requestnetwork/smart-contracts/types';

import { ContractTransaction, ethers, Wallet } from 'ethers';

//#region Local ERC20 Config
const provider = new ethers.providers.JsonRpcProvider() as ethers.providers.Provider;

// this is a local ERC20 token deployed on ganache
const localToken = '0x9FBDa871d559710256a2502A2517b794B482Db40';
const erc20 = TestERC20__factory.connect(localToken, provider);

const INVOICE_NFT_ADDR = '0x2e335F247E91caa168c64b63104C4475b2af3942';
const invoiceNFT = InvoiceNFT__factory.connect(INVOICE_NFT_ADDR, provider);

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
  id: RequestNetwork.Types.Payment.PAYMENT_NETWORK_ID.ERC20_PROXY_CONTRACT,
  parameters: {
    paymentAddress: payeePaymentWallet.address,
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

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  console.log(await erc20.symbol());

  console.log('payee address: ' + payeeIdentity.value);

  // ✏️ Create the request
  const request: RequestNetwork.Request = await requestNetwork.createRequest(requestCreateParams);
  console.log(`request ${request.requestId} created`);
  await request.waitForConfirmation();
  console.log(`request ${request.requestId} confirmed`);

  // ✏️ Accept the request

  console.log(`Before payment`);
  console.log(`Payee: ${(await erc20.balanceOf(payeePaymentWallet.address)).toString()}`);
  console.log(`Payer: ${(await erc20.balanceOf(payerPaymentWallet.address)).toString()}`);

  // ✏️ Pay the request
  await approveErc20IfNeeded(request.getData(), payerPaymentWallet.address, payerPaymentWallet);

  const requestData = request.getData();
  const tx: ContractTransaction = await payRequest(requestData, payerPaymentWallet);
  console.log(`Payment tx: ${tx.hash}`);
  await tx.wait(1);
  console.log(`After payment`);

  console.log(`Payee: ${(await erc20.balanceOf(payeePaymentWallet.address)).toString()}`);
  console.log(`Payer: ${(await erc20.balanceOf(payerPaymentWallet.address)).toString()}`);
  console.log('Balance', request.getData().balance?.balance);

  console.log('payee address: ' + payeeIdentity.value);
  console.log('payee NFTs: ' + (await invoiceNFT.balanceOf(payeeIdentity.value)));
})();
