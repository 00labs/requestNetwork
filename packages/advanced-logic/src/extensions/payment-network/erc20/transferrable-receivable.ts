import { ExtensionTypes, RequestLogicTypes } from '@requestnetwork/types';
import ReferenceBasedPaymentNetwork from '../reference-based';

const CURRENT_VERSION = '0.1.0';

/**
 * Implementation of the payment network to pay in ERC20 based on a transferrable receivable contract.
 */
export default class Erc20TransferrableReceivablePaymentNetwork<
  TCreationParameters extends ExtensionTypes.PnReferenceBased.ICreationParameters = ExtensionTypes.PnReferenceBased.ICreationParameters,
> extends ReferenceBasedPaymentNetwork<TCreationParameters> {
  public constructor(
    public extensionId: ExtensionTypes.PAYMENT_NETWORK_ID = ExtensionTypes.PAYMENT_NETWORK_ID
      .ERC20_TRANSFERRABLE_RECEIVABLE,
    public currentVersion: string = CURRENT_VERSION,
  ) {
    super(extensionId, currentVersion, RequestLogicTypes.CURRENCY.ERC20);
  }
}
