// /* eslint-disable @typescript-eslint/ban-ts-comment */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck

// RequestNetwork is the interface we will use to interact with the Request network
import * as RequestNetwork from '.';
// The signature provider allows us to sign the request
import { EthereumPrivateKeySignatureProvider } from '@requestnetwork/epk-signature';
// The payment methods are in a separate package
import { approveErc20IfNeeded, payRequest } from '@requestnetwork/payment-processor';

// The smart-contract package contains exports some standard Contracts and all of Request contracts
import { TestERC20__factory } from '@requestnetwork/smart-contracts/types';

import { InvoiceNFT__factory } from '@requestnetwork/smart-contracts/types';

import { ContractTransaction, ethers, Wallet } from 'ethers';

import MultiFormat from '@requestnetwork/multi-format';

const WEB3_PROVIDER_URL = 'https://eth-goerli.g.alchemy.com/v2/N3msdQ9jj9ifTG8rGj8m09Q_ZeU1VFI3';
const provider = new ethers.providers.JsonRpcProvider(
  WEB3_PROVIDER_URL,
) as ethers.providers.Provider;

// this is a local ERC20 token deployed on ganache
const localToken = '0xf17FF940864351631b1be3ac03702dEA085ba51c';
const erc20 = TestERC20__factory.connect(localToken, provider);

const INVOICE_NFT_ADDR = '0x9aEBB4B8abf7afC96dC00f707F766499C5EbeDF1';
const invoiceNFT = InvoiceNFT__factory.connect(INVOICE_NFT_ADDR, provider);

const PAYEE_ADDRESS = '0x3BD44d4ee0E914E7ADE18a51A80f597E153aD343';
const PAYEE_PRIVATE_KEY = '0xa8e85c1c3bdcb3221493d1f43dfd9e7dd966c799fd46bd0d6a45a97f9df59adb';

const PAYER_ADDRESS = '0x4A01c67879C8188F481Ac932c938b73D9373E479';
const PAYER_PRIVATE_KEY = '0x7be5e6a94f10886842322e564b3c907c09b878c88a63a9945a89d87a4413c0d8';
const payerPaymentWallet = new Wallet(PAYER_PRIVATE_KEY, provider);

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
      decimals: 18,
      network: 'goerli',
      symbol: 'ERC20',
      type: RequestNetwork.Types.RequestLogic.CURRENCY.ERC20,
    },
  ],
});
//#endregion

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  const request = await requestNetwork.fromRequestId(
    '01bd5067afdacbe83b051708db2a10000ea4940ebda257e21d42b0d851123575a0',
  );
  await request.refresh();
  const requestData = request.getData();
  console.log(requestData);
  console.log(requestData.balance?.events);
})();
