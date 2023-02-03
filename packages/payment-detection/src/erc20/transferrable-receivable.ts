import {
  AdvancedLogicTypes,
  ExtensionTypes,
  PaymentTypes,
  RequestLogicTypes,
} from '@huma-shan/types';

import Utils from '@requestnetwork/utils';
import { erc20TransferrableReceivableArtifact } from '@huma-shan/smart-contracts';
import TheGraphInfoRetriever from './thegraph-info-retriever';
import { networkSupportsTheGraph } from '../thegraph';
import { makeGetDeploymentInformation } from '../utils';
import ERC20TransferrableReceivableInfoRetriever from './transferrable-receivable-info-retriever';
import { PaymentDetectorBase } from '../payment-detector-base';
import { BalanceError } from '../balance-error';
import { getPaymentReference } from '../utils';

const ERC20_TRANSFERRABLE_RECEIVABLE_CONTRACT_ADDRESS_MAP = {
  ['0.1.0']: '0.1.0',
};

/**
 * Handle payment networks with ERC20 transferrable receivable contract extension
 */
export class ERC20TransferrableReceivablePaymentDetector extends PaymentDetectorBase<
  ExtensionTypes.PnAnyToErc20.IAnyToERC20,
  PaymentTypes.IERC20PaymentEventParameters
> {
  /**
   * @param extension The advanced logic payment network extensions
   */
  public constructor({ advancedLogic }: { advancedLogic: AdvancedLogicTypes.IAdvancedLogic }) {
    super(
      PaymentTypes.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE,
      advancedLogic.extensions.erc20TransferrableReceivable,
    );
  }

  public async createExtensionsDataForCreation(
    paymentNetworkCreationParameters: any,
  ): Promise<any> {
    // If no salt is given, generate one
    paymentNetworkCreationParameters.salt =
      paymentNetworkCreationParameters.salt || (await Utils.crypto.generate8randomBytes());

    return this.extension.createCreationAction({
      paymentAddress: paymentNetworkCreationParameters.paymentAddress,
      refundAddress: paymentNetworkCreationParameters.refundAddress,
      ...paymentNetworkCreationParameters,
    });
  }

  public createExtensionsDataForAddRefundInformation(parameters: any): any {
    throw new Error(`Unsupported ${parameters}`);
  }

  public createExtensionsDataForAddPaymentInformation(parameters: any): any {
    throw new Error(`Unsupported ${parameters}`);
  }

  protected async getEvents(
    request: RequestLogicTypes.IRequest,
  ): Promise<PaymentTypes.AllNetworkEvents<PaymentTypes.IERC20PaymentEventParameters>> {
    const paymentExtension = this.getPaymentExtension(request);
    const paymentChain = this.getPaymentChain(request);

    const supportedNetworks = this.extension.supportedNetworks;
    if (!supportedNetworks.includes(paymentChain)) {
      throw new BalanceError(
        `Payment network ${paymentChain} not supported by ${
          this.paymentNetworkId
        } payment detection. Supported networks: ${supportedNetworks.join(', ')}`,
        PaymentTypes.BALANCE_ERROR_CODE.NETWORK_NOT_SUPPORTED,
      );
    }
    this.checkRequiredParameter(paymentExtension.values.salt, 'salt');

    const paymentAndEscrowEvents = await this.extractEvents(
      PaymentTypes.EVENTS_NAMES.PAYMENT,
      getPaymentReference(request) ?? '',
      request.currency,
      paymentChain,
      paymentExtension,
    );
    const paymentEvents = paymentAndEscrowEvents.paymentEvents;
    const escrowEvents = paymentAndEscrowEvents.escrowEvents;

    return {
      paymentEvents: paymentEvents,
      escrowEvents: escrowEvents,
    };
  }

  /**
   * Extracts the balance and events of an address
   *
   * @private
   * @param address Address to check
   * @param eventName Indicate if it is an address for payment or refund
   * @param network The id of network we want to check
   * @param tokenContractAddress the address of the token contract
   * @returns The balance and events
   */
  protected async extractEvents(
    eventName: PaymentTypes.EVENTS_NAMES,
    paymentReference: string,
    requestCurrency: RequestLogicTypes.ICurrency,
    paymentChain: string,
    paymentNetwork: ExtensionTypes.IState<ExtensionTypes.PnReferenceBased.ICreationParameters>,
  ): Promise<PaymentTypes.AllNetworkEvents<PaymentTypes.IERC20PaymentEventParameters>> {
    if (!paymentReference) {
      return {
        paymentEvents: [],
      };
    }

    const {
      address: receivableContractAddress,
      creationBlockNumber: receivableCreationBlockNumber,
    } = ERC20TransferrableReceivablePaymentDetector.getDeploymentInformation(
      paymentChain,
      paymentNetwork.version,
    );

    if (networkSupportsTheGraph(paymentChain)) {
      const graphInfoRetriever = new TheGraphInfoRetriever(
        paymentReference,
        receivableContractAddress,
        requestCurrency.value,
        '', // Filtering by payee address does not apply for tranferrable receivables
        eventName,
        paymentChain,
      );
      return graphInfoRetriever.getReceivableEvents();
    } else {
      const transferrableReceivableInfoRetriever = new ERC20TransferrableReceivableInfoRetriever(
        paymentReference,
        receivableContractAddress,
        receivableCreationBlockNumber,
        requestCurrency.value,
        receivableContractAddress,
        eventName,
        paymentChain,
      );
      const paymentEvents = await transferrableReceivableInfoRetriever.getTransferEvents();
      return {
        paymentEvents,
      };
    }
  }

  /*
   * Returns deployment information for the underlying smart contract for a given payment network version
   */
  public static getDeploymentInformation = makeGetDeploymentInformation(
    erc20TransferrableReceivableArtifact,
    ERC20_TRANSFERRABLE_RECEIVABLE_CONTRACT_ADDRESS_MAP,
  );

  /**
   * Get the network of the payment
   * @returns The network of payment
   */
  protected getPaymentChain(request: RequestLogicTypes.IRequest): string {
    const network = request.currency.network;
    if (!network) {
      throw Error(`request.currency.network must be defined for ${this.paymentNetworkId}`);
    }
    return network;
  }
}
