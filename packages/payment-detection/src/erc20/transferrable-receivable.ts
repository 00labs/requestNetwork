import { ExtensionTypes, PaymentTypes, RequestLogicTypes } from '@huma-shan/types';

import { TheGraphInfoRetriever } from '../thegraph';
import { erc20TransferrableReceivableArtifact } from '@huma-shan/smart-contracts';
import { makeGetDeploymentInformation } from '../utils';
import { PaymentNetworkOptions, ReferenceBasedDetectorOptions } from '../types';
import { ReferenceBasedDetector } from '../reference-based-detector';
import ProxyInfoRetriever from './proxy-info-retriever';

const ERC20_TRANSFERRABLE_RECEIVABLE_CONTRACT_ADDRESS_MAP = {
  ['0.1.0']: '0.1.0',
};

/**
 * Handle payment networks with ERC20 transferrable receivable contract extension
 */
export class ERC20TransferrableReceivablePaymentDetector extends ReferenceBasedDetector<
  ExtensionTypes.PnReferenceBased.IReferenceBased,
  PaymentTypes.IERC20PaymentEventParameters
> {
  private readonly getSubgraphClient: PaymentNetworkOptions['getSubgraphClient'];

  /**
   * @param extension The advanced logic payment network extensions
   */
  public constructor({
    advancedLogic,
    currencyManager,
    getSubgraphClient,
  }: ReferenceBasedDetectorOptions & Pick<PaymentNetworkOptions, 'getSubgraphClient'>) {
    super(
      ExtensionTypes.PAYMENT_NETWORK_ID.ERC20_TRANSFERRABLE_RECEIVABLE,
      advancedLogic.extensions.erc20TransferrableReceivable,
      currencyManager,
    );
    this.getSubgraphClient = getSubgraphClient;
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
    toAddress: string | undefined,
    paymentReference: string,
    requestCurrency: RequestLogicTypes.ICurrency,
    paymentChain: string,
    paymentNetwork: ExtensionTypes.IState<ExtensionTypes.PnReferenceBased.ICreationParameters>,
  ): Promise<PaymentTypes.AllNetworkEvents<PaymentTypes.IERC20PaymentEventParameters>> {
    // To satisfy typescript
    toAddress;
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

    const subgraphClient = this.getSubgraphClient(paymentChain);
    if (subgraphClient) {
      const graphInfoRetriever = new TheGraphInfoRetriever(subgraphClient, this.currencyManager);
      return graphInfoRetriever.getReceivableEvents({
        paymentReference,
        toAddress: '', // Filtering by payee address does not apply for transferrable receivables
        contractAddress: receivableContractAddress,
        paymentChain,
        eventName,
        acceptedTokens: [requestCurrency.value],
      });
    } else {
      const transferrableReceivableInfoRetriever = new ProxyInfoRetriever(
        paymentReference,
        receivableContractAddress,
        receivableCreationBlockNumber,
        requestCurrency.value,
        '',
        eventName,
        paymentChain,
      );
      const paymentEvents = await transferrableReceivableInfoRetriever.getTransferEvents(
        true /* isReceivable */,
      );
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
}
