## Run workshop local

1. yarn clean
2. yarn build
3. ipfs daemon
4. /packages/smart-contracts => yarn ganache
5. /packages/smart-contracts => yarn deploy
6. /packages/request-node => yarn start
7. /packages/request-client.js => yarn start-local

Be aware the env under request-node. There should be no env vars for local.

## Run workshop goerli

1. yarn clean
2. yarn build
3. ipfs daemon
4. /packages/request-node => yarn start
5. /packages/request-client.js => yarn start-goerli

Be aware need to set the env vars for request node

```
ETHEREUM_NETWORK_ID=5
WEB3_PROVIDER_URL=Your web3 provider url
MNEMONIC=Need to be the same one
```

If blocknumber is far behind, check the to blocknumber at request-node console and update to packages/smart-contracts/src/lib/artifacts/RequestHashStorage/index.ts creationBlockNumber for goerli. After update the creationBlockNumber, please go through the steps above.
