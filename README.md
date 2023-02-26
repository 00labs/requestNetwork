<img src="https://raw.githubusercontent.com/RequestNetwork/Request/master/Hubs/Request%20Logos/OnLight/png/Request_onlight_reg_green.png" width="400px" >

---

[![CircleCI](https://img.shields.io/circleci/project/github/RequestNetwork/requestNetwork/master.svg)](https://circleci.com/gh/RequestNetwork/requestNetwork)
[![Coverage Status](https://coveralls.io/repos/github/RequestNetwork/requestNetwork/badge.svg?branch=master)](https://coveralls.io/github/RequestNetwork/requestNetwork?branch=master)
[![Commit Activity](https://img.shields.io/github/commit-activity/m/RequestNetwork/requestNetwork.svg?color=green)](https://github.com/RequestNetwork/requestNetwork/pulse/monthly)

[Request][website-url] is a decentralized network built on top of Ethereum, which allows anyone, anywhere to request a payment. A full description of the protocol may be found in our [whitepaper][whitepaper-url].

This repository contains all the Request Network developer tools written in TypeScript.

Join the [Request Discord][request-discord-url] to get in touch with us.

[website-url]: https://request.network
[whitepaper-url]: https://request.network/assets/pdf/request_whitepaper.pdf
[request-discord-url]: https://request.network/discord/

### Published Packages

| Package                                                           | Version                                                                                                                               | Description                                                         |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`@frinkly/advanced-logic`](/packages/advanced-logic)             | [![npm](https://img.shields.io/npm/v/@frinkly/advanced-logic.svg)](https://www.npmjs.com/package/@frinkly/advanced-logic)             | Extensions to the protocol                                          |
| [`@frinkly/request-client.js`](/packages/request-client.js)       | [![npm](https://img.shields.io/npm/v/@frinkly/request-client.js.svg)](https://www.npmjs.com/package/@frinkly/request-client.js)       | Library to use Request nodes as servers                             |
| [`@frinkly/data-access`](/packages/data-access)                   | [![npm](https://img.shields.io/npm/v/@frinkly/data-access.svg)](https://www.npmjs.com/package/@frinkly/data-access)                   | Indexing an batching of transactions                                |
| [`@frinkly/data-format`](/packages/data-format)                   | [![npm](https://img.shields.io/npm/v/@frinkly/data-format.svg)](https://www.npmjs.com/package/@frinkly/data-format)                   | Standards for data stored on Request, like invoices format          |
| [`@frinkly/epk-signature`](/packages/epk-signature)               | [![npm](https://img.shields.io/npm/v/@frinkly/epk-signature.svg)](https://www.npmjs.com/package/@frinkly/epk-signature)               | Sign requests using Ethereum private keys                           |
| [`@frinkly/ethereum-storage`](/packages/ethereum-storage)         | [![npm](https://img.shields.io/npm/v/@frinkly/ethereum-storage.svg)](https://www.npmjs.com/package/@frinkly/ethereum-storage)         | Storage of Request data on Ethereum and IPFS, with custom indexing  |
| [`@frinkly/epk-decryption`](/packages/epk-decryption)             | [![npm](https://img.shields.io/npm/v/@frinkly/epk-decryption.svg)](https://www.npmjs.com/package/@frinkly/epk-decryption)             | Decrypt encrypted requests using Ethereum private keys              |
| [`@frinkly/payment-detection`](/packages/payment-detection)       | [![npm](https://img.shields.io/npm/v/@frinkly/payment-detection.svg)](https://www.npmjs.com/package/@frinkly/payment-detection)       | Client-side payment detection, to compute the balance.              |
| [`@frinkly/payment-processor`](/packages/payment-processor)       | [![npm](https://img.shields.io/npm/v/@frinkly/payment-processor.svg)](https://www.npmjs.com/package/@frinkly/payment-processor)       | Pay a request using a web3 wallet                                   |
| [`@frinkly/request-logic`](/packages/request-logic)               | [![npm](https://img.shields.io/npm/v/@frinkly/request-logic.svg)](https://www.npmjs.com/package/@frinkly/request-logic)               | The Request business logic: properties and actions of requests      |
| [`@frinkly/request-node`](/packages/request-node)                 | [![npm](https://img.shields.io/npm/v/@frinkly/request-node.svg)](https://www.npmjs.com/package/@frinkly/request-node)                 | Web server that allows easy access to Request system                |
| [`@frinkly/transaction-manager`](/packages/transaction-manager)   | [![npm](https://img.shields.io/npm/v/@frinkly/transaction-manager.svg)](https://www.npmjs.com/package/@frinkly/transaction-manager)   | Creates transactions to be sent to Data Access, managing encryption |
| [`@frinkly/types`](/packages/types)                               | [![npm](https://img.shields.io/npm/v/@frinkly/types.svg)](https://www.npmjs.com/package/@frinkly/types)                               | Typescript types shared across @frinkly packages                    |
| [`@frinkly/utils`](/packages/utils)                               | [![npm](https://img.shields.io/npm/v/@frinkly/utils.svg)](https://www.npmjs.com/package/@frinkly/utils)                               | Collection of tools shared between the @frinkly packages            |
| [`@frinkly/web3-signature`](/packages/web3-signature)             | [![npm](https://img.shields.io/npm/v/@frinkly/web3-signature.svg)](https://www.npmjs.com/package/@frinkly/web3-signature)             | Sign requests using web3 tools (like Metamask)                      |
| [`@frinkly/multi-format`](/packages/multi-format)                 | [![npm](https://img.shields.io/npm/v/@frinkly/multi-format.svg)](https://www.npmjs.com/package/@frinkly/multi-format)                 | Serialize and deserialize object in the Request Network protocol    |
| [`@frinkly/thegraph-data-access`](/packages/thegraph-data-access) | [![npm](https://img.shields.io/npm/v/@frinkly/thegraph-data-access.svg)](https://www.npmjs.com/package/@frinkly/thegraph-data-access) | Storage of Request data on Ethereum and IPFS, indexed by TheGraph   |
| [`@frinkly/smart-contracts`](/packages/smart-contracts)           | [![npm](https://img.shields.io/npm/v/@frinkly/smart-contracts.svg)](https://www.npmjs.com/package/@frinkly/smart-contracts)           | Sources and artifacts of the smart contracts                        |

### Private Packages

| Package                                                         | Description                                                 |
| --------------------------------------------------------------- | ----------------------------------------------------------- |
| [`@frinkly/integration-test`](/packages/integration-test)       | Integration test for the Request system                     |
| [`@frinkly/prototype-estimator`](/packages/prototype-estimator) | Give estimates of size and throughput of the Request system |
| [`@frinkly/toolbox`](/packages/toolbox)                         | Toolbox for Request Network                                 |
| [`@frinkly/usage-example`](/packages/usage-example)             | Usage examples of Request Network                           |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
[Read the contributing guide](https://github.com/RequestNetwork/requestNetwork/blob/master/CONTRIBUTING.md)

### Install

Install all the packages in the monorepo.

```bash
yarn install
```

### Build

Build all the packages in the monorepo.

```bash
yarn run build
```

### Lint

Lint all the packages in the monorepo.

```bash
yarn run lint
```

### Test

Disable API tests OR define all required explorer API keys.

```bash
export DISABLE_API_TESTS=1
# OR
export EXPLORER_API_KEY_MAINNET=
export EXPLORER_API_KEY_RINKEBY=
export EXPLORER_API_KEY_FUSE=
export EXPLORER_API_KEY_MATIC=
export EXPLORER_API_KEY_FANTOM=
```

Test all the packages in the monorepo.

```bash
yarn run test
```

## License

[MIT](https://github.com/RequestNetwork/requestNetwork/blob/master/LICENSE)

## V1 packages

This repository hosts the packages for the second version of Request. The v1 packages are deprecated and can be found on [requestNetwork-v1-archive](https://github.com/RequestNetwork/requestNetwork-v1-archive).
