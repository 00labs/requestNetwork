# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.31.0 (2023-02-12)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))
- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a227ed29254404329ad672b00a56639e35f4))
- data-access taking time to initialize when Node start ([#422](https://github.com/RequestNetwork/requestNetwork/issues/422)) ([61999b6](https://github.com/RequestNetwork/requestNetwork/commit/61999b607cb7e8a5436dfb3979713cf50d2b23a0))
- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59bab1551518c9430bdbc1b498a123e01e0c))
- Ignore invalid block during synchronisation instead of throwing ([#461](https://github.com/RequestNetwork/requestNetwork/issues/461)) ([528d74f](https://github.com/RequestNetwork/requestNetwork/commit/528d74f63f9119ba04c16b4b509e88a5bf609fde))
- log interval function failure as warning instead of error in data-access ([#508](https://github.com/RequestNetwork/requestNetwork/issues/508)) ([d132f54](https://github.com/RequestNetwork/requestNetwork/commit/d132f549179663add99ecec110e22ee389e1e216))
- publish dist folder instead of src ([#254](https://github.com/RequestNetwork/requestNetwork/issues/254)) ([d6b5bd4](https://github.com/RequestNetwork/requestNetwork/commit/d6b5bd4899550ece7e182ee937aaacaea5413842))
- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))
- typescript lint for test files ([#778](https://github.com/RequestNetwork/requestNetwork/issues/778)) ([048e876](https://github.com/RequestNetwork/requestNetwork/commit/048e876a905516be0de8a31d446e4572eb74eccb))
- **data-access:** Some blocks read twice during synchronization ([653fe64](https://github.com/RequestNetwork/requestNetwork/commit/653fe64ed0e95adb3817e1f81fc5a4edbf414d91))
- use last synched block timestamp as the sync timestamp instead of now ([#481](https://github.com/RequestNetwork/requestNetwork/issues/481)) ([81c8cd6](https://github.com/RequestNetwork/requestNetwork/commit/81c8cd6671ff7e80f182213205470c58647e7ef2))

### Features

- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f48482f2e97664d5090fa15592ccc96af955d))
- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8216556674fc9f5125053508c675fa9227))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add IPFS peer for faster IPFS retrieval, and check IPFS and Ethereum nodes connections ([#353](https://github.com/RequestNetwork/requestNetwork/issues/353)) ([47358c2](https://github.com/RequestNetwork/requestNetwork/commit/47358c2bad8b5c40e0d4c2c240b9e856592858e4))
- add request node logger ([#416](https://github.com/RequestNetwork/requestNetwork/issues/416)) ([8d56ade](https://github.com/RequestNetwork/requestNetwork/commit/8d56ade8bf141a62cf7c56b4b3e1e6be13324d3d))
- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- BREAKING CHANGE store the multiformat hash of the topics ([#452](https://github.com/RequestNetwork/requestNetwork/issues/452)) ([3173333](https://github.com/RequestNetwork/requestNetwork/commit/3173333577d48ad472162fc11a5b0bcbefc359e8))
- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- Data access interface ([#161](https://github.com/RequestNetwork/requestNetwork/issues/161)) ([ccb4481](https://github.com/RequestNetwork/requestNetwork/commit/ccb448161607867f64929ae89e9189b1427067cd))
- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))
- getTransactionByTopic with timestamp boundaries ([#294](https://github.com/RequestNetwork/requestNetwork/issues/294)) ([be4ec56](https://github.com/RequestNetwork/requestNetwork/commit/be4ec5618f63f8c42d87dfa450d26518f0ed5deb))
- graceful shutdown of request-node ([#463](https://github.com/RequestNetwork/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/RequestNetwork/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))
- ignore blocks with invalid topics format or invalid channel id format ([#471](https://github.com/RequestNetwork/requestNetwork/issues/471)) ([86ab6cf](https://github.com/RequestNetwork/requestNetwork/commit/86ab6cfc6ad9b749fabe50f961eaff6eb0f38e64))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/607290533b8a7c58bd01c803ba06c5f846eb6bf6))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0dc31a9c94c7acd8caee5126f1846589558))
- mock storage for dev mode ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([af0d580](https://github.com/RequestNetwork/requestNetwork/commit/af0d580d6eddabbdec38d9e38239de4f422e84e0))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))
- **data-access:** get channels from multiple topics ([#527](https://github.com/RequestNetwork/requestNetwork/issues/527)) ([bdebab7](https://github.com/RequestNetwork/requestNetwork/commit/bdebab735bd29c781f186e7c17840d747361a836))
- **data-access:** transaction index persisted for faster initialization ([#406](https://github.com/RequestNetwork/requestNetwork/issues/406)) ([d820036](https://github.com/RequestNetwork/requestNetwork/commit/d820036d1546749bd90523241aa5eedf5232545d))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd3819822ccdcc4684054f553ff79e375fe))
- Storage module ([#157](https://github.com/RequestNetwork/requestNetwork/issues/157)) ([bea2b50](https://github.com/RequestNetwork/requestNetwork/commit/bea2b50b50b44a5f78d2c49cdfbdb5f2d0ad883f))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac195077aa59b1547fb5b16169267a4173c3a))

### Performance Improvements

- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e555484b3c33b1e3b0d970e701338c74ff))

### BREAKING CHANGES

- Topics are stored as multiformat hashes. Old formats of topics (raw strings) are not compatible.

**Request-client.js**:

- Topics are hashed and follow the multiformat
- The hashes follow the multiformat

**Utils**:

- Add multiformat to the utils library

**Ethereum-storage**:

- Artifacts are updated to link to new contracts on Rinkeby
- The hashes follow the multiformat

**Data-access**:

- The hashes follow the multiformat
- Topics must be hashed and multi-formatted

**Request-logic**:

- The hashes follow the multiformat

# [0.27.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.27.0) (2022-11-04)

### Bug Fixes

- typescript lint for test files ([#778](https://github.com/RequestNetwork/requestNetwork/issues/778)) ([048e876](https://github.com/RequestNetwork/requestNetwork/commit/048e876a905516be0de8a31d446e4572eb74eccb))

### Features

- graceful shutdown of request-node ([#463](https://github.com/RequestNetwork/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/RequestNetwork/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))

# [0.26.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.26.0) (2021-06-22)

### Features

- graceful shutdown of request-node ([#463](https://github.com/RequestNetwork/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/RequestNetwork/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))

# [0.25.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.25.0) (2021-05-12)

### Features

- graceful shutdown of request-node ([#463](https://github.com/RequestNetwork/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/RequestNetwork/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))

# [0.24.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.24.0) (2021-04-19)

### Features

- graceful shutdown of request-node ([#463](https://github.com/RequestNetwork/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/RequestNetwork/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))

## [0.23.6](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.23.6) (2021-03-25)

**Note:** Version bump only for package @huma-shan/data-access

## [0.23.5](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.23.5) (2021-03-15)

**Note:** Version bump only for package @huma-shan/data-access

## [0.23.4](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.23.4) (2021-03-03)

**Note:** Version bump only for package @huma-shan/data-access

## [0.23.3](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.23.3) (2021-02-22)

**Note:** Version bump only for package @huma-shan/data-access

## [0.23.2](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.23.2) (2020-12-22)

**Note:** Version bump only for package @huma-shan/data-access

## [0.23.1](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.23.0...@huma-shan/data-access@0.23.1) (2020-12-21)

**Note:** Version bump only for package @huma-shan/data-access

# [0.23.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.23.0) (2020-12-02)

# 0.26.0 (2020-10-14)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.22.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.22.0) (2020-11-12)

# 0.26.0 (2020-10-14)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.21.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.21.0) (2020-11-05)

# 0.26.0 (2020-10-14)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.20.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.20.0) (2020-10-21)

# 0.26.0 (2020-10-14)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.19.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.19.0) (2020-10-14)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.18.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.18.0) (2020-10-13)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.17.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.17.0) (2020-10-09)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.16.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.16.0) (2020-09-28)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.15.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.15.0) (2020-09-18)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.14.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.14.0) (2020-09-01)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.13.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.13.0) (2020-08-27)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.12.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.12.0) (2020-08-13)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.11.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.11.0) (2020-06-29)

### Bug Fixes

- don't remove failed transactions from data-access ([#236](https://github.com/RequestNetwork/requestNetwork/issues/236)) ([74835f0](https://github.com/RequestNetwork/requestNetwork/commit/74835f0890de5816d0d29c43c1c253ecd756bd6e))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add the synchronization of ignored data in data access ([#214](https://github.com/RequestNetwork/requestNetwork/issues/214)) ([7f8e668](https://github.com/RequestNetwork/requestNetwork/commit/7f8e6685a20b6d9057d2224213fb2ed75bae168f))
- remove hash in encrypted transaction ([#232](https://github.com/RequestNetwork/requestNetwork/issues/232)) ([d58f101](https://github.com/RequestNetwork/requestNetwork/commit/d58f101f9f76e408671dd1edb0d67863d1c8abd5))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.10.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.10.0) (2020-05-04)

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.9.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.9.0) (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.8.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.8.0) (2020-04-06)

### Features

- emits "error" event when the confirmation fails ([#179](https://github.com/RequestNetwork/requestNetwork/issues/179)) ([73bfcfb](https://github.com/RequestNetwork/requestNetwork/commit/73bfcfb5f6a54d2036a47e09ce180a00c12a81ae))

# 0.14.0 (2020-03-19)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.7.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.7.0) (2020-03-23)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.6.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.6.0) (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

## [0.5.5](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.5.5) (2020-01-16)

# 0.10.0 (2019-12-04)

**Note:** Version bump only for package @huma-shan/data-access

## [0.5.4](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.5.4) (2019-12-18)

# 0.10.0 (2019-12-04)

**Note:** Version bump only for package @huma-shan/data-access

## [0.5.3](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.2...@huma-shan/data-access@0.5.3) (2019-12-04)

**Note:** Version bump only for package @huma-shan/data-access

## [0.5.2](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.1...@huma-shan/data-access@0.5.2) (2019-11-20)

**Note:** Version bump only for package @huma-shan/data-access

## [0.5.1](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.5.0...@huma-shan/data-access@0.5.1) (2019-10-21)

### Bug Fixes

- **data-access:** Some blocks read twice during synchronization ([653fe64](https://github.com/RequestNetwork/requestNetwork/commit/653fe64))

# [0.5.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.4.2...@huma-shan/data-access@0.5.0) (2019-09-16)

### Features

- **data-access:** get channels from multiple topics ([#527](https://github.com/RequestNetwork/requestNetwork/issues/527)) ([bdebab7](https://github.com/RequestNetwork/requestNetwork/commit/bdebab7))

## [0.4.2](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.4.1...@huma-shan/data-access@0.4.2) (2019-09-05)

### Bug Fixes

- log interval function failure as warning instead of error in data-access ([#508](https://github.com/RequestNetwork/requestNetwork/issues/508)) ([d132f54](https://github.com/RequestNetwork/requestNetwork/commit/d132f54))

## [0.4.1](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.4.0...@huma-shan/data-access@0.4.1) (2019-08-19)

**Note:** Version bump only for package @huma-shan/data-access

# [0.3.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.1.1-alpha.4...@huma-shan/data-access@0.3.0) (2019-07-24)

### Bug Fixes

- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- data-access taking time to initialize when Node start ([#422](https://github.com/RequestNetwork/requestNetwork/issues/422)) ([61999b6](https://github.com/RequestNetwork/requestNetwork/commit/61999b6))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Ignore invalid block during synchronisation instead of throwing ([#461](https://github.com/RequestNetwork/requestNetwork/issues/461)) ([528d74f](https://github.com/RequestNetwork/requestNetwork/commit/528d74f))

### Features

- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f484))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- add IPFS peer for faster IPFS retrieval, and check IPFS and Ethereum nodes connections ([#353](https://github.com/RequestNetwork/requestNetwork/issues/353)) ([47358c2](https://github.com/RequestNetwork/requestNetwork/commit/47358c2))
- **data-access:** transaction index persisted for faster initialization ([#406](https://github.com/RequestNetwork/requestNetwork/issues/406)) ([d820036](https://github.com/RequestNetwork/requestNetwork/commit/d820036))
- add request node logger ([#416](https://github.com/RequestNetwork/requestNetwork/issues/416)) ([8d56ade](https://github.com/RequestNetwork/requestNetwork/commit/8d56ade))
- getTransactionByTopic with timestamp boundaries ([#294](https://github.com/RequestNetwork/requestNetwork/issues/294)) ([be4ec56](https://github.com/RequestNetwork/requestNetwork/commit/be4ec56))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

### Performance Improvements

- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e))

## [0.2.1-alpha.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.1.1-alpha.4...@huma-shan/data-access@0.2.1-alpha.0) (2019-07-22)

### Bug Fixes

- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- data-access taking time to initialize when Node start ([#422](https://github.com/RequestNetwork/requestNetwork/issues/422)) ([61999b6](https://github.com/RequestNetwork/requestNetwork/commit/61999b6))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Ignore invalid block during synchronisation instead of throwing ([#461](https://github.com/RequestNetwork/requestNetwork/issues/461)) ([528d74f](https://github.com/RequestNetwork/requestNetwork/commit/528d74f))

### Features

- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f484))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- add IPFS peer for faster IPFS retrieval, and check IPFS and Ethereum nodes connections ([#353](https://github.com/RequestNetwork/requestNetwork/issues/353)) ([47358c2](https://github.com/RequestNetwork/requestNetwork/commit/47358c2))
- **data-access:** transaction index persisted for faster initialization ([#406](https://github.com/RequestNetwork/requestNetwork/issues/406)) ([d820036](https://github.com/RequestNetwork/requestNetwork/commit/d820036))
- add request node logger ([#416](https://github.com/RequestNetwork/requestNetwork/issues/416)) ([8d56ade](https://github.com/RequestNetwork/requestNetwork/commit/8d56ade))
- getTransactionByTopic with timestamp boundaries ([#294](https://github.com/RequestNetwork/requestNetwork/issues/294)) ([be4ec56](https://github.com/RequestNetwork/requestNetwork/commit/be4ec56))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

### Performance Improvements

- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e))

# [0.2.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.1.1-alpha.4...@huma-shan/data-access@0.2.0) (2019-06-06)

### Bug Fixes

- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))

### Features

- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f484))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- add IPFS peer for faster IPFS retrieval, and check IPFS and Ethereum nodes connections ([#353](https://github.com/RequestNetwork/requestNetwork/issues/353)) ([47358c2](https://github.com/RequestNetwork/requestNetwork/commit/47358c2))
- getTransactionByTopic with timestamp boundaries ([#294](https://github.com/RequestNetwork/requestNetwork/issues/294)) ([be4ec56](https://github.com/RequestNetwork/requestNetwork/commit/be4ec56))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

### Performance Improvements

- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e))

## [0.1.1-alpha.12](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.1.1-alpha.4...@huma-shan/data-access@0.1.1-alpha.12) (2019-05-21)

### Bug Fixes

- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))

### Features

- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- getTransactionByTopic with timestamp boundaries ([#294](https://github.com/RequestNetwork/requestNetwork/issues/294)) ([be4ec56](https://github.com/RequestNetwork/requestNetwork/commit/be4ec56))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

## [0.1.1-alpha.11](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.1.1-alpha.4...@huma-shan/data-access@0.1.1-alpha.11) (2019-05-17)

### Bug Fixes

- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))

### Features

- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- getTransactionByTopic with timestamp boundaries ([#294](https://github.com/RequestNetwork/requestNetwork/issues/294)) ([be4ec56](https://github.com/RequestNetwork/requestNetwork/commit/be4ec56))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

## [0.1.1-alpha.10](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/data-access@0.1.1-alpha.4...@huma-shan/data-access@0.1.1-alpha.10) (2019-05-10)

### Bug Fixes

- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))

### Features

- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- getTransactionByTopic with timestamp boundaries ([#294](https://github.com/RequestNetwork/requestNetwork/issues/294)) ([be4ec56](https://github.com/RequestNetwork/requestNetwork/commit/be4ec56))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))
