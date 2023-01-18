import { PaymentTypes } from '@requestnetwork/types';
import { IPaymentRetriever } from '../types';
import { BigNumber, ethers } from 'ethers';
import { getDefaultProvider } from '../provider';
import { parseLogArgs } from '../utils';

// The ERC20 nft smart contract ABI fragment containing Payment event
const erc20nftContractAbiFragment = [
  'event Payment(address sender,address recipient,uint256 tokenId,address assetAddress,uint256 amount,uint256 paymentId,bytes indexed paymentReference)',
];

/** Payment event */
type PaymentArgs = {
  from: string;
  to: string;
  tokenId: BigNumber;
  assetAddress: string;
  amount: BigNumber;
  paymentId: BigNumber;
  paymentReference: string;
};

/**
 * Retrieves a list of payment events from a payment reference, a destination address, a token address and a nft contract
 */
export default class NFTERC20InfoRetriever
  implements IPaymentRetriever<PaymentTypes.ERC20PaymentNetworkEvent>
{
  public contractNft: ethers.Contract;
  public provider: ethers.providers.Provider;

  /**
   * @param paymentReference The reference to identify the payment
   * @param nftContractAddress The address of the nft contract
   * @param nftCreationBlockNumber The block that created the nft contract
   * @param tokenContractAddress The address of the ERC20 contract
   * @param toAddress Address of the balance we want to check
   * @param eventName Indicate if it is an address for payment or refund
   * @param network The Ethereum network to use
   */
  constructor(
    private paymentReference: string,
    private nftContractAddress: string,
    private nftCreationBlockNumber: number,
    private tokenContractAddress: string,
    private toAddress: string,
    private eventName: PaymentTypes.EVENTS_NAMES,
    private network: string,
  ) {
    // Creates a local or default provider
    this.provider = getDefaultProvider(this.network);

    // Setup the ERC20 proxy contract interface
    this.contractNft = new ethers.Contract(
      this.nftContractAddress,
      erc20nftContractAbiFragment,
      this.provider,
    );
  }

  /**
   * Retrieves transfer events for the current contract, address and network.
   */
  public async getTransferEvents(): Promise<PaymentTypes.ERC20PaymentNetworkEvent[]> {
    // Create a filter to find all the Transfer logs for the toAddress
    const filter = this.contractNft.filters.Payment(
      null,
      null,
      null,
      null,
      null,
      null,
      '0x' + this.paymentReference,
    ) as ethers.providers.Filter;
    filter.fromBlock = this.nftCreationBlockNumber;
    filter.toBlock = 'latest';

    // Get the nft contract event logs
    const nftLogs = await this.provider.getLogs(filter);

    // Merge both events
    const logs = [...nftLogs];

    // Parses, filters and creates the events from the logs with the payment reference
    const eventPromises = logs
      // Parses the logs
      .map((log) => {
        const parsedLog = this.contractNft.interface.parseLog(log);
        return {
          parsedLog: parseLogArgs<PaymentArgs>(parsedLog),
          blockNumber: log.blockNumber,
          transactionHash: log.transactionHash,
        };
      })
      // Keeps only the log with the right token and the right destination address
      .filter(
        ({ parsedLog }) =>
          parsedLog.assetAddress.toLowerCase() === this.tokenContractAddress.toLowerCase() &&
          parsedLog.to.toLowerCase() === this.toAddress.toLowerCase(),
      )
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
