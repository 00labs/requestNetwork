import { PaymentTypes } from '@huma-shan/types';
import { IPaymentRetriever } from '../types';
import { BigNumber, ethers } from 'ethers';
import { getDefaultProvider } from '../provider';
import { parseLogArgs } from '../utils';

// The ERC20 receivable smart contract ABI fragment containing Payment event
const erc20TransferrableReceivableContractAbiFragment = [
  'event Payment(address sender, address recipient, address paymentProxy, uint256 receivableId, address assetAddress, uint256 amount, uint256 paymentId, bytes indexed paymentReference, uint256 feeAmount, address feeAddress)',
];

/** Payment event */
type PaymentArgs = {
  sender: string;
  recipient: string;
  receivableId: BigNumber;
  assetAddress: string;
  amount: BigNumber;
  paymentId: BigNumber;
  paymentReference: string;
  feeAmount: BigNumber;
  feeAddress: string;
};

/**
 * Retrieves a list of payment events from a payment reference, a
 * destination address, a token address and a transferrable receivable contract
 */
export default class ERC20TransferrableReceivableInfoRetriever
  implements IPaymentRetriever<PaymentTypes.ERC20PaymentNetworkEvent>
{
  public contract: ethers.Contract;
  public provider: ethers.providers.Provider;

  /**
   * @param paymentReference The reference to identify the payment
   * @param transferrableReceivableContractAddress The address of the receivable contract
   * @param transferrableReceivableCreationBlockNumber The block that created the receivable contract
   * @param tokenContractAddress The address of the ERC20 contract
   * @param toAddress Address of the balance we want to check
   * @param eventName Indicate if it is an address for payment or refund
   * @param network The Ethereum network to use
   */
  constructor(
    private paymentReference: string,
    private transferrableReceivableContractAddress: string,
    private transferrableReceivableCreationBlockNumber: number,
    private tokenContractAddress: string,
    private toAddress: string,
    private eventName: PaymentTypes.EVENTS_NAMES,
    private network: string,
  ) {
    // Creates a local or default provider
    this.provider = getDefaultProvider(this.network);

    // Setup the ERC20 proxy contract interface
    this.contract = new ethers.Contract(
      this.transferrableReceivableContractAddress,
      erc20TransferrableReceivableContractAbiFragment,
      this.provider,
    );
  }

  /**
   * Retrieves transfer events for the current contract, address and network.
   */
  public async getTransferEvents(): Promise<PaymentTypes.ERC20PaymentNetworkEvent[]> {
    // Create a filter to find all the Payment logs for the toAddress
    const filter = this.contract.filters.Payment(
      null,
      null,
      null,
      null,
      null,
      null,
      '0x' + this.paymentReference,
    ) as ethers.providers.Filter;
    filter.fromBlock = this.transferrableReceivableCreationBlockNumber;
    filter.toBlock = 'latest';

    // Get the receivable contract event logs
    const receivableLogs = await this.provider.getLogs(filter);

    // Parses, filters and creates the events from the logs with the payment reference
    const eventPromises = receivableLogs
      // Parses the logs
      .map((log) => {
        const parsedLog = this.contract.interface.parseLog(log);
        return {
          parsedLog: parseLogArgs<PaymentArgs>(parsedLog),
          blockNumber: log.blockNumber,
          transactionHash: log.transactionHash,
        };
      })
      // Keeps only the log with the right token and the right destination address
      .filter(({ parsedLog }) => {
        return parsedLog.assetAddress.toLowerCase() === this.tokenContractAddress.toLowerCase();
      })
      // Creates the balance events
      .map(async ({ parsedLog, blockNumber, transactionHash }) => ({
        amount: parsedLog.amount.toString(),
        name: this.eventName,
        parameters: {
          block: blockNumber,
          to: this.toAddress,
          txHash: transactionHash,
        },
        timestamp: (await this.provider.getBlock(blockNumber || 0)).timestamp,
      }));

    return Promise.all(eventPromises);
  }
}
