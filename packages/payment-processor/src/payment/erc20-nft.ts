import { ContractTransaction, Signer, BigNumberish, providers } from 'ethers';

import { Erc20PaymentNetwork } from '@requestnetwork/payment-detection';
import { InvoiceNFT__factory } from '@requestnetwork/smart-contracts/types';
import { ClientTypes, PaymentTypes } from '@requestnetwork/types';

import { ITransactionOverrides } from './transaction-overrides';
import {
  getAmountToPay,
  getProxyAddress,
  getProvider,
  getSigner,
  validateRequest,
  getRequestPaymentValues,
} from './utils';
import { IPreparedTransaction } from './prepared-transaction';

import MultiFormat from '@requestnetwork/multi-format';

/**
 * Processes a transaction to pay an ERC20 NFT Request.
 * @param request
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 * @param amount optionally, the amount to pay. Defaults to remaining amount of the request.
 * @param overrides optionally, override default transaction values, like gas.
 */
export async function payErc20NFTRequest(
  request: ClientTypes.IRequestData,
  signerOrProvider: providers.Provider | Signer = getProvider(),
  amount?: BigNumberish,
  overrides?: ITransactionOverrides,
): Promise<ContractTransaction> {
  const { data, to, value } = prepareErc20NFTPaymentTransaction(request, amount);
  const signer = getSigner(signerOrProvider);
  return signer.sendTransaction({ data, to, value, ...overrides });
}

/**
 * Encodes the call to pay a request through the ERC20 nft contract, can be used with a Multisig contract.
 * @param request request to pay
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 * @param amount optionally, the amount to pay. Defaults to remaining amount of the request.
 */
export function encodePayErc20NFTRequest(
  request: ClientTypes.IRequestData,
  amount?: BigNumberish,
): string {
  validateRequest(request, PaymentTypes.PAYMENT_NETWORK_ID.ERC20_NFT_CONTRACT);

  const reqIdObj = MultiFormat.deserialize(request.requestId);
  const amountToPay = getAmountToPay(request, amount);
  const { paymentReference } = getRequestPaymentValues(request);

  const nftContract = InvoiceNFT__factory.createInterface();
  return nftContract.encodeFunctionData('payOwner', [
    reqIdObj.value, // get tokenId from requestId
    amountToPay,
    `0x${paymentReference}`,
  ]);
}

/**
 * Return the EIP-681 format URL with the transaction to pay an ERC20
 * Warning: this EIP isn't widely used, be sure to test compatibility yourself.
 *
 * @param request
 * @param amount optionally, the amount to pay. Defaults to remaining amount of the request.
 */
export function _getErc20NFTPaymentUrl(
  request: ClientTypes.IRequestData,
  amount?: BigNumberish,
): string {
  validateRequest(request, PaymentTypes.PAYMENT_NETWORK_ID.ERC20_NFT_CONTRACT);
  const contractAddress = getProxyAddress(
    request,
    Erc20PaymentNetwork.ERC20NFTPaymentDetector.getDeploymentInformation,
  );

  const reqIdObj = MultiFormat.deserialize(request.requestId);
  const amountToPay = getAmountToPay(request, amount);
  const { paymentReference } = getRequestPaymentValues(request);
  const parameters = `payOwner?uint256=${reqIdObj.value}&uint256=${amountToPay}&bytes=${paymentReference}`;
  return `ethereum:${contractAddress}/${parameters}`;
}

/**
 * Encodes the call to pay a request through the ERC20 nft contract, can be used with a Multisig contract.
 * @param request request to pay
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 * @param amount optionally, the amount to pay. Defaults to remaining amount of the request.
 */
export function prepareErc20NFTPaymentTransaction(
  request: ClientTypes.IRequestData,
  amount?: BigNumberish,
): IPreparedTransaction {
  validateRequest(request, PaymentTypes.PAYMENT_NETWORK_ID.ERC20_NFT_CONTRACT);

  return {
    data: encodePayErc20NFTRequest(request, amount),
    to: getProxyAddress(
      request,
      Erc20PaymentNetwork.ERC20NFTPaymentDetector.getDeploymentInformation,
    ),
    value: 0,
  };
}
