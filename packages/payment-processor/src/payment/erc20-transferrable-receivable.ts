import { ContractTransaction, Signer, BigNumberish, providers } from 'ethers';

import { Erc20PaymentNetwork } from '@requestnetwork/payment-detection';
import { ERC20TransferrableReceivable__factory } from '@requestnetwork/smart-contracts/types';
import { ClientTypes, PaymentTypes } from '@requestnetwork/types';

import { ITransactionOverrides } from './transaction-overrides';
import {
  getAmountToPay,
  getProxyAddress,
  getProvider,
  getSigner,
  validateRequest,
  getRequestPaymentValues,
  validateMintERC20TransferrableReceivable,
} from './utils';
import { IPreparedTransaction } from './prepared-transaction';

import MultiFormat from '@requestnetwork/multi-format';

/**
 * Processes a transaction to mint an ERC20TransferrableReceivable.
 * @param request
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 * @param overrides optionally, override default transaction values, like gas.
 */
export async function mintErc20TransferrableReceivable(
  request: ClientTypes.IRequestData,
  signerOrProvider: providers.Provider | Signer = getProvider(),
  overrides?: ITransactionOverrides,
): Promise<ContractTransaction> {
  const { data, to, value } = prepareMintErc20TransferrableReceivableTransaction(request);
  const signer = getSigner(signerOrProvider);
  return signer.sendTransaction({ data, to, value, ...overrides });
}

/**
 * Encodes the call to mint a request through an ERC20TransferrableReceivable contract, can be used with a Multisig contract.
 * @param request request to pay
 */
export function prepareMintErc20TransferrableReceivableTransaction(
  request: ClientTypes.IRequestData,
): IPreparedTransaction {
  validateMintERC20TransferrableReceivable(request);

  return {
    data: encodeMintErc20TransferrableReceivableRequest(request),
    to: getProxyAddress(
      request,
      Erc20PaymentNetwork.ERC20TransferrableReceivablePaymentDetector.getDeploymentInformation,
    ),
    value: 0,
  };
}

/**
 * Encodes call to mint a request through an ERC20TransferrableReceivable contract, can be used with a Multisig contract.
 * @param request request to pay
 */
export function encodeMintErc20TransferrableReceivableRequest(
  request: ClientTypes.IRequestData,
): string {
  validateMintERC20TransferrableReceivable(request);

  const tokenAddress = request.currencyInfo.value;
  const reqIdObj = MultiFormat.deserialize(request.requestId);
  const metadata = Buffer.from(reqIdObj.type).toString('base64'); // metadata is requestId.type
  console.log(reqIdObj.type);

  const receivableContract = ERC20TransferrableReceivable__factory.createInterface();
  return receivableContract.encodeFunctionData('mint', [
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    request.payee!.value,
    reqIdObj.value,
    tokenAddress,
    metadata,
  ]);
}

/**
 * Processes a transaction to pay an ERC20 receivable Request.
 * @param request
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 * @param amount optionally, the amount to pay. Defaults to remaining amount of the request.
 * @param overrides optionally, override default transaction values, like gas.
 */
export async function payErc20TransferrableReceivableRequest(
  request: ClientTypes.IRequestData,
  signerOrProvider: providers.Provider | Signer = getProvider(),
  amount?: BigNumberish,
  overrides?: ITransactionOverrides,
): Promise<ContractTransaction> {
  const { data, to, value } = prepareErc20TransferrableReceivablePaymentTransaction(
    request,
    amount,
  );
  const signer = getSigner(signerOrProvider);
  return signer.sendTransaction({ data, to, value, ...overrides });
}

/**
 * Encodes the call to pay a request through the ERC20 receivable contract, can be used with a Multisig contract.
 * @param request request to pay
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 * @param amount optionally, the amount to pay. Defaults to remaining amount of the request.
 */
export function prepareErc20TransferrableReceivablePaymentTransaction(
  request: ClientTypes.IRequestData,
  amount?: BigNumberish,
): IPreparedTransaction {
  validateRequest(request, PaymentTypes.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE);

  return {
    data: encodePayErc20TransferrableReceivableRequest(request, amount),
    to: getProxyAddress(
      request,
      Erc20PaymentNetwork.ERC20TransferrableReceivablePaymentDetector.getDeploymentInformation,
    ),
    value: 0,
  };
}

/**
 * Encodes the call to pay a request through the ERC20 receivable contract, can be used with a Multisig contract.
 * @param request request to pay
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 * @param amount optionally, the amount to pay. Defaults to remaining amount of the request.
 */
export function encodePayErc20TransferrableReceivableRequest(
  request: ClientTypes.IRequestData,
  amount?: BigNumberish,
): string {
  validateRequest(request, PaymentTypes.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE);

  const reqIdObj = MultiFormat.deserialize(request.requestId);
  const amountToPay = getAmountToPay(request, amount);
  const { paymentReference } = getRequestPaymentValues(request);

  const receivableContract = ERC20TransferrableReceivable__factory.createInterface();
  return receivableContract.encodeFunctionData('payOwner', [
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
export function _getErc20TransferrableReceivablePaymentUrl(
  request: ClientTypes.IRequestData,
  amount?: BigNumberish,
): string {
  validateRequest(request, PaymentTypes.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE);
  const contractAddress = getProxyAddress(
    request,
    Erc20PaymentNetwork.ERC20TransferrableReceivablePaymentDetector.getDeploymentInformation,
  );

  const reqIdObj = MultiFormat.deserialize(request.requestId);
  const amountToPay = getAmountToPay(request, amount);
  const { paymentReference } = getRequestPaymentValues(request);
  const parameters = `payOwner?uint256=${reqIdObj.value}&uint256=${amountToPay}&bytes=${paymentReference}`;
  return `ethereum:${contractAddress}/${parameters}`;
}
