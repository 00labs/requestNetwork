import { PaymentTypes } from '@huma-shan/types';
import { utils } from 'ethers';
import { getTheGraphClient, TheGraphClient, TheGraphClientOptions } from '../thegraph';
import { GetReceivablePaymentsAndEscrowStateQueryVariables } from '../thegraph/generated/graphql';
import { getDefaultProvider } from '../provider';
import { ethers } from 'ethers';

/** Parameters for getting payment events from theGraph */
type GraphPaymentQueryParams = {
  contractAddress: string;
  reference: string;
  to: string;
  tokenAddress: string | null;
};

const erc20TransferrableReceivableContractAbiFragment = [
  'function paymentProxy() view returns (address)',
];

export class TheGraphInfoRetriever {
  private client: TheGraphClient;

  /**
   * @param paymentReference The reference to identify the payment
   * @param proxyContractAddress The address of the proxy contract
   * @param tokenContractAddress The address of the ERC20 contract
   * @param toAddress Address of the balance we want to check
   * @param eventName Indicate if it is an address for payment or refund
   * @param network The Ethereum network to use
   * @param options Extra options to GraphQL client
   */
  constructor(
    private paymentReference: string,
    private proxyContractAddress: string,
    private tokenContractAddress: string | null,
    private toAddress: string,
    private eventName: PaymentTypes.EVENTS_NAMES,
    private network: string,
    private options?: TheGraphClientOptions,
  ) {
    this.client = getTheGraphClient(this.network, this.options);
  }

  private getGraphVariables(): GraphPaymentQueryParams {
    return {
      contractAddress: this.proxyContractAddress,
      reference: utils.keccak256(`0x${this.paymentReference}`),
      to: this.toAddress,
      tokenAddress: this.tokenContractAddress,
    };
  }

  // Get query variables for transferrable receivable payments (toAddress is not applicable)
  private async getReceivableGraphVariables(): Promise<GetReceivablePaymentsAndEscrowStateQueryVariables> {
    // Creates a local or default provider
    const provider = getDefaultProvider(this.network);

    // Setup the ERC20 proxy contract interface
    const contract = new ethers.Contract(
      this.proxyContractAddress,
      erc20TransferrableReceivableContractAbiFragment,
      provider,
    );

    const paymentProxyAddress = await contract.paymentProxy();
    return {
      receivableContractAddress: this.proxyContractAddress,
      proxyContractAddress: paymentProxyAddress,
      reference: utils.keccak256(`0x${this.paymentReference}`),
      tokenAddress: this.tokenContractAddress,
    };
  }

  public async getTransferEvents(): Promise<
    PaymentTypes.AllNetworkEvents<PaymentTypes.IERC20FeePaymentEventParameters>
  > {
    const variables = this.getGraphVariables();
    const paymentsAndEscrows = await this.client.GetPaymentsAndEscrowState(variables);
    const paymentEvents = paymentsAndEscrows.payments.map((p) => ({
      amount: p.amount,
      name: this.eventName,
      parameters: {
        to: this.toAddress,
        txHash: p.txHash,
        block: p.block,
        feeAddress: p.feeAddress ? utils.getAddress(p.feeAddress) : undefined,
        feeAmount: p.feeAmount || undefined,
        from: p.from,
        gasUsed: p.gasUsed,
        gasPrice: p.gasPrice,
      },
      timestamp: p.timestamp,
    }));
    const escrowEvents = paymentsAndEscrows.escrowEvents.map((p) => ({
      name: PaymentTypes.EVENTS_NAMES.ESCROW,
      parameters: {
        to: this.toAddress,
        from: p.from,
        txHash: p.txHash,
        block: p.block,
        eventName: p.eventName,
        gasUsed: p.gasUsed,
        gasPrice: p.gasPrice,
      },
      timestamp: p.timestamp,
    }));

    return {
      paymentEvents: paymentEvents,
      escrowEvents: escrowEvents,
    };
  }

  public async getReceivableEvents(): Promise<
    PaymentTypes.AllNetworkEvents<PaymentTypes.IERC20FeePaymentEventParameters>
  > {
    const variables = await this.getReceivableGraphVariables();
    const paymentsAndEscrows = await this.client.GetReceivablePaymentsAndEscrowState(variables);
    const paymentEvents = paymentsAndEscrows.receivablePayments.map((p) => ({
      amount: p.amount,
      name: this.eventName,
      parameters: {
        to: this.toAddress,
        txHash: p.txHash,
        block: p.block,
        feeAddress: p.feeAddress ? utils.getAddress(p.feeAddress) : undefined,
        feeAmount: p.feeAmount || undefined,
        from: p.from,
        gasUsed: p.gasUsed,
        gasPrice: p.gasPrice,
      },
      timestamp: p.timestamp,
    }));
    const escrowEvents = paymentsAndEscrows.escrowEvents.map((p) => ({
      name: PaymentTypes.EVENTS_NAMES.ESCROW,
      parameters: {
        to: this.toAddress,
        from: p.from,
        txHash: p.txHash,
        block: p.block,
        eventName: p.eventName,
        gasUsed: p.gasUsed,
        gasPrice: p.gasPrice,
      },
      timestamp: p.timestamp,
    }));

    return {
      paymentEvents: paymentEvents,
      escrowEvents: escrowEvents,
    };
  }
}

export default TheGraphInfoRetriever;
