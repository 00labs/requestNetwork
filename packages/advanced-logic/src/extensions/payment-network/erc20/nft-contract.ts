import { ExtensionTypes, RequestLogicTypes } from '@requestnetwork/types';
import ReferenceBasedPaymentNetwork from '../reference-based';

const CURRENT_VERSION = '0.1.0';

/**
 * Implementation of the payment network to pay in ERC20 based on a nft contract.
 */
export default class Erc20NFTPaymentNetwork<
  TCreationParameters extends ExtensionTypes.PnReferenceBased.ICreationParameters = ExtensionTypes.PnReferenceBased.ICreationParameters,
> extends ReferenceBasedPaymentNetwork<TCreationParameters> {
  public constructor(
    public extensionId: ExtensionTypes.ID = ExtensionTypes.PAYMENT_NETWORK_ID
      .ERC20_TRANSFERRABLE_RECEIVABLE,
    public currentVersion: string = CURRENT_VERSION,
    public supportedNetworks: string[] = ['mainnet', 'rinkeby', 'goerli', 'private', 'matic'],
    public supportedCurrencyType: RequestLogicTypes.CURRENCY = RequestLogicTypes.CURRENCY.ERC20,
  ) {
    super(extensionId, currentVersion, supportedNetworks, supportedCurrencyType);
  }
}
