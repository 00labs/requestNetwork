# @frinkly/integration-test

`@frinkly/integration-test` is a package part of the [Request Network protocol](https://github.com/RequestNetwork/requestNetwork).
It tests that the layers on the Request Network system work together:

- @frinkly/advanced-logic
- @frinkly/request-logic
- @frinkly/transaction-manager
- @frinkly/data-access
- @frinkly/ethereum-storage
- @frinkly/types

## Usage

To run all the tests:

```bash
npm run test
```

## Tests Suites

### Integration test of the layers

It tests the direct integration of the layers:

- @frinkly/advanced-logic
- @frinkly/data-access
- @frinkly/epk-signature
- @frinkly/ethereum-storage
- @frinkly/request-logic
- @frinkly/transaction-manager

```bash
npm run test:layers
```

### Integration test of the node and library

It tests the integration of the Request node and the client side library:

- @frinkly/request-client.js
- @frinkly/request-node

```bash
npm run test:node
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
[Read the contributing guide](/CONTRIBUTING.md)

## License

[MIT](/LICENSE)
