import { LogTypes, DataAccessTypes } from '@requestnetwork/types';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getPersistTransactionTimeout } from '../config';

/**
 * Class to create nft though the data-access layer
 */
export default class TokenizeHandler {
  /**
   * Create nft constructor
   */
  constructor(private dataAccess: DataAccessTypes.IDataWrite, private logger: LogTypes.ILogger) {
    this.handler = this.handler.bind(this);
  }

  /**
   * Handles tokenize of data-access layer.
   *
   * @param clientRequest http client request object
   * @param serverResponse http server response object
   * @param dataAccess data access layer
   */
  public async handler(clientRequest: Request, serverResponse: Response): Promise<void> {
    // Used to compute request time
    const requestStartTime = Date.now();

    // Set the timeout from the value from config and convert seconds to milliseconds
    /* eslint-disable no-magic-numbers */
    clientRequest.setTimeout(getPersistTransactionTimeout() * 1000);

    // Verifies if data send from post are correct
    // clientRequest.body is expected to contain data for data-acces layer:
    // transactionData: data of the transaction
    // topics (optional): arbitrary strings that reference the transaction
    if (
      !clientRequest.body ||
      !clientRequest.body.recipient ||
      !clientRequest.body.assetToken ||
      !clientRequest.body.tokenId ||
      !clientRequest.body.metadata
    ) {
      serverResponse.status(StatusCodes.UNPROCESSABLE_ENTITY).send('Incorrect data');
      return;
    }

    const { recipient, assetToken, tokenId, metadata } = clientRequest.body;

    try {
      this.logger.debug(
        `Tokenize Transaction: ${JSON.stringify({
          recipient,
          assetToken,
          tokenId,
          metadata,
        })}`,
      );

      if (!this.dataAccess.tokenizeRequest) {
        serverResponse
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .send('tokenizeRequest function is missing');
        return;
      }
      await this.dataAccess.tokenizeRequest(recipient, assetToken, tokenId, metadata);

      this.logger.info(
        `Tokenization confirmed: ${recipient}, ${assetToken}, ${tokenId}, ${metadata}`,
      );

      // Log the request time
      const requestEndTime = Date.now();
      this.logger.debug(`tokenize latency: ${requestEndTime - requestStartTime}ms`, [
        'metric',
        'latency',
      ]);
      this.logger.debug(`tokenize successfully completed`, ['metric', 'successRate']);

      serverResponse.status(StatusCodes.OK).send('ok');
    } catch (e) {
      this.logger.error(`tokenize error: ${e}`);
      this.logger.debug(`tokenize fail`, ['metric', 'successRate']);

      serverResponse.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
    }
  }
}
