# @requestnetwork/integration-test

`@requestnetwork/integration-test` is a package part of the [Request Network protocol](https://github.com/RequestNetwork/requestNetwork).
It tests that the layers on the Request Network system work together:

- @huma-shan/advanced-logic
- @huma-shan/request-logic
- @huma-shan/transaction-manager
- @huma-shan/data-access
- @huma-shan/ethereum-storage
- @huma-shan/types

## Usage

To run all the tests:

```bash
npm run test
```

## Tests Suites

### Integration test of the layers

It tests the direct integration of the layers:

- @huma-shan/advanced-logic
- @huma-shan/data-access
- @requestnetwork/epk-signature
- @huma-shan/ethereum-storage
- @huma-shan/request-logic
- @huma-shan/transaction-manager

```bash
npm run test:layers
```

### Integration test of the node and library

It tests the integration of the Request node and the client side library:

- @huma-shan/request-client.js
- @requestnetwork/request-node

```bash
npm run test:node
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
[Read the contributing guide](/CONTRIBUTING.md)

## License

[MIT](/LICENSE)
