/** Interface of the storage */
export interface IStorage {
  append: (data: string) => Promise<IRequestStorageOneDataIdAndMeta>;
  read: (dataId: string) => Promise<IRequestStorageOneContentAndMeta>;
  getAllData: () => Promise<IRequestStorageGetAllDataReturn>;
  getAllDataId: () => Promise<IRequestStorageGetAllDataIdReturn>;
  getNewDataId: () => Promise<IRequestStorageGetNewDataIdReturn>;
}

/** return interface for append  */
export interface IRequestStorageOneDataIdAndMeta {
  /** meta information */
  meta: IRequestStorageMetaOneData;
  /** result of the execution */
  result: {
    /** data id of the data persisted */
    dataId: string;
  };
}

/** return interface for read  */
export interface IRequestStorageOneContentAndMeta {
  /** meta information */
  meta: IRequestStorageMetaOneData;
  /** result of the execution */
  result: {
    /** the data itself */
    content: string;
  };
}

/** return interface for array return */
export interface IRequestStorageGetAllDataIdReturn {
  /** meta information */
  meta: {
    /** meta of the dataIds (follow the position of the result.dataIds) */
    metaDataIds: IRequestStorageMetaOneData[];
  };
  result: {
    /** array of all data id stored */
    dataIds: string[];
  };
}

/** return interface for array return */
export interface IRequestStorageGetNewDataIdReturn {
  /** meta information */
  meta: {
    /** meta of the dataIds (follow the position of the result.dataIds) */
    metaDataIds: IRequestStorageMetaOneData[];
  };
  result: {
    /** array of all data id stored */
    dataIds: string[];
  };
}

/** return interface for array return */
export interface IRequestStorageGetAllDataReturn {
  /** meta information */
  meta: {
    /** meta of the data (follow the position of the result.contents) */
    metaData: IRequestStorageMetaOneData[];
  };
  result: {
    /** array of all data stored */
    data: string[];
  };
}

/** return interface for the meta of one piece of data in the storage */
export interface IRequestStorageMetaOneData {
  /** Storage type for now only ethereum + ipfs */
  storageType?: StorageSystemType;
  /** meta about ethereum smart contract */
  ethereum?: IRequestStorageEthereumMetadata;
  /** IPFS file metadata */
  ipfs?: {
    /** Size in bytes of the file on ipfs */
    size: number;
  };
}

/** return interface for getAllHashesAndSizes() */
export interface IRequestStorageGetAllHashesAndSizes {
  /** meta information */
  meta: IRequestStorageEthereumMetadata;
  /** data id of the persisted data */
  hash: string;
  /** data size of the persisted data */
  size: number;
}

/** Ethereum storage meta data */
export interface IRequestStorageEthereumMetadata {
  /** network name where the smart contract is deployed */
  networkName: string;
  /** Smart contract address where is stored the data id */
  smartContractAddress: string;
  /** hash of the transaction that stored the data id */
  transactionHash: string;
  /** block number of the transaction that stored the data id */
  blockNumber: number;
  /** block timestamp of the transaction that stored the data id */
  blockTimestamp: number;
  /** number of block confirmation of the transaction */
  blockConfirmation: number;
  /** total cost (request fee + gas fee) in wei of the transaction that stored the data id */
  cost?: string;
  /** request fee in wei of the transaction that stored the data id */
  fee?: string;
  /** gas fee in wei of the transaction that stored the data id */
  gasFee?: string;
}

/** Ethereum network id */
export enum EthereumNetwork {
  PRIVATE = 0,
  MAINNET = 1,
  RINKEBY = 4,
  KOVAN = 42,
}

/** Information to connect to a web3 provider */
export interface IWeb3Connection {
  web3Provider?: any;
  networkId?: EthereumNetwork;
  timeout?: number;
}

/** Information to connect to a ipfs gateway */
export interface IIpfsGatewayConnection {
  host: string;
  port: number;
  protocol: IpfsGatewayProtocol;
  timeout: number;
}

/** Protocol to connect to ipfs */
export enum IpfsGatewayProtocol {
  HTTP = 'http',
  HTTPS = 'https',
}

/** Storage type for now only ethereum + ipfs available */
export enum StorageSystemType {
  /** Ethereum and IPFS */
  ETHEREUM_IPFS = 'ethereumIpfs',

  /** Mock storage, in memory. Used for local development. Should not be used in production */
  IN_MEMORY_MOCK = 'inMemoryMock',
}