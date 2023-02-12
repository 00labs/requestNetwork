import {
  ContractTransaction,
  Signer,
  BigNumberish,
  providers,
  BigNumber,
  constants,
  ethers,
} from 'ethers';

import { Erc20PaymentNetwork } from '@huma-shan/payment-detection';
import { ERC20TransferrableReceivable__factory } from '@huma-shan/smart-contractsde/types';
import { ClientTypes, ExtensionTypes } from '@huma-shan/types';

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

import MultiFormat from '@huma-shan/multi-formatt';

// The ERC20 receivable smart contract ABI fragment
const erc20TransferrableReceivableContractAbiFragment = [
  'function receivableTokenIdMapping(bytes32) public view returns (uint256)',
];

/**
 * Gets the receivableTokenId from a ERC20TransferrableReceivable contract given
 * a paymentReference and paymentAddress of the request
 * @param request
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 */
export async function getReceivableTokenIdForRequest(
  request: ClientTypes.IRequestData,
  signerOrProvider: providers.Provider | Signer,
): Promise<BigNumber> {
  // Setup the ERC20 proxy contract interface
  const contract = new ethers.Contract(
    getProxyAddress(
      request,
      Erc20PaymentNetwork.ERC20TransferrableReceivablePaymentDetector.getDeploymentInformation,
    ),
    erc20TransferrableReceivableContractAbiFragment,
    signerOrProvider,
  );

  const { paymentReference, paymentAddress } = getRequestPaymentValues(request);

  return await contract.receivableTokenIdMapping(
    ethers.utils.solidityKeccak256(['address', 'bytes'], [paymentAddress, `0x${paymentReference}`]),
  );
}

/**
 * Helper method to determine whether a request has a receivable minted yet
 *
 * @param request
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 */
export async function hasReceivableForRequest(
  request: ClientTypes.IRequestData,
  signerOrProvider: providers.Provider | Signer,
): Promise<boolean> {
  const receivableTokenId = await getReceivableTokenIdForRequest(request, signerOrProvider);
  return !receivableTokenId.isZero();
}

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
  const metadata = Buffer.from(request.requestId).toString('base64'); // metadata is requestId

  const { paymentReference } = getRequestPaymentValues(request);
  const amount = getAmountToPay(request);

  const receivableContract = ERC20TransferrableReceivable__factory.createInterface();
  return receivableContract.encodeFunctionData('mint', [
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    `0x${paymentReference}`,
    amount,
    tokenAddress,
    metadata,
  ]);
}

/**
 * Processes a transaction to pay an ERC20 receivable Request.
 * @param request
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 * @param amount optionally, the amount to pay. Defaults to remaining amount of the request.
 * @param feeAmount optionally, the fee amount to pay. Defaults to the fee amount of the request.
 * @param overrides optionally, override default transaction values, like gas.
 */
export async function payErc20TransferrableReceivableRequest(
  request: ClientTypes.IRequestData,
  signerOrProvider: providers.Provider | Signer = getProvider(),
  amount?: BigNumberish,
  feeAmount?: BigNumberish,
  overrides?: ITransactionOverrides,
): Promise<ContractTransaction> {
  const { data, to, value } = await prepareErc20TransferrableReceivablePaymentTransaction(
    request,
    signerOrProvider,
    amount,
    feeAmount,
  );
  const signer = getSigner(signerOrProvider);
  return signer.sendTransaction({ data, to, value, ...overrides });
}

/**
 * Encodes the call to pay a request through the ERC20 receivable contract, can be used with a Multisig contract.
 * @param request request to pay
 * @param signerOrProvider the Web3 provider, or signer. Defaults to window.ethereum.
 * @param amount optionally, the amount to pay. Defaults to remaining amount of the request.
 * @param feeAmountOverride optionally, the fee amount to pay. Defaults to the fee amount of the request.
 */
export async function prepareErc20TransferrableReceivablePaymentTransaction(
  request: ClientTypes.IRequestData,
  signerOrProvider: providers.Provider | Signer,
  amount?: BigNumberish,
  feeAmountOverride?: BigNumberish,
): Promise<IPreparedTransaction> {
  validateRequest(request, ExtensionTypes.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE);

  return {
    data: await encodePayErc20TransferrableReceivableRequest(
      request,
      signerOrProvider,
      amount,
      feeAmountOverride,
    ),
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
 * @param feeAmountOverride optionally, the fee amount to pay. Defaults to the fee amount of the request.
 */
export async function encodePayErc20TransferrableReceivableRequest(
  request: ClientTypes.IRequestData,
  signerOrProvider: providers.Provider | Signer,
  amount?: BigNumberish,
  feeAmountOverride?: BigNumberish,
): Promise<string> {
  validateRequest(request, ExtensionTypes.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE);

  const amountToPay = getAmountToPay(request, amount);
  const { paymentReference, feeAddress, feeAmount } = getRequestPaymentValues(request);
  const feeToPay = BigNumber.from(feeAmountOverride || feeAmount || 0);

  const receivableContract = ERC20TransferrableReceivable__factory.createInterface();

  const receivableTokenId = await getReceivableTokenIdForRequest(request, signerOrProvider);

  if (receivableTokenId.isZero()) {
    throw new Error(
      'The receivable for this request has not been minted yet. Please check with the payee.',
    );
  }

  return receivableContract.encodeFunctionData('payOwner', [
    receivableTokenId, // get tokenId from requestId
    amountToPay,
    `0x${paymentReference}`,
    feeToPay,
    feeAddress || constants.AddressZero,
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
  validateRequest(request, ExtensionTypes.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE);
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
