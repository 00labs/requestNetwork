# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.28.0 (2022-11-15)

### Bug Fixes

- **graph node:** graphql query name ([#864](https://github.com/00labs/requestNetwork/issues/864)) ([5ea56a4](https://github.com/00labs/requestNetwork/commit/5ea56a4ddf0e0c68ce8043a4e0c39ddf31209876))
- remove provider assertion ([#861](https://github.com/00labs/requestNetwork/issues/861)) ([5e12b74](https://github.com/00labs/requestNetwork/commit/5e12b74a7226b4060e29109bf9935a1c905a18dd))
- typescript lint for test files ([#778](https://github.com/00labs/requestNetwork/issues/778)) ([048e876](https://github.com/00labs/requestNetwork/commit/048e876a905516be0de8a31d446e4572eb74eccb))
- **request-node:** eth_feeHistory missing parameters ([#764](https://github.com/00labs/requestNetwork/issues/764)) ([b941252](https://github.com/00labs/requestNetwork/commit/b941252a1da0f3252cc5405be9a1fb19580790ee))
- **request-node:** maxFeePerGas calculation ([#766](https://github.com/00labs/requestNetwork/issues/766)) ([12b4227](https://github.com/00labs/requestNetwork/commit/12b4227cfd5b7b3dea64c1952e40d77d9e9ae8d6))
- **thegraph:** zero timestamp ([#757](https://github.com/00labs/requestNetwork/issues/757)) ([8246f6f](https://github.com/00labs/requestNetwork/commit/8246f6fd52478c3a80d2c1a740c3330eb840a1e7))
- Add a specific tsconfig for Dockerfile ([#286](https://github.com/00labs/requestNetwork/issues/286)) ([901c36c](https://github.com/00labs/requestNetwork/commit/901c36c4138381877ba006046bbdfceeab4e84f3))
- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/00labs/requestNetwork/issues/349)) ([1fea138](https://github.com/00labs/requestNetwork/commit/1fea138df42ba2b8308a2d27f07b6bd1537ea970))
- block parsing with encrypted transaction ([#176](https://github.com/00labs/requestNetwork/issues/176)) ([de86f43](https://github.com/00labs/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))
- codecov publishing ([#238](https://github.com/00labs/requestNetwork/issues/238)) ([672df84](https://github.com/00labs/requestNetwork/commit/672df84111a9fb8096a9dca0a2785d9d6fa2c1d3))
- Error block XXX not found ([#306](https://github.com/00labs/requestNetwork/issues/306)) ([6c9c59b](https://github.com/00labs/requestNetwork/commit/6c9c59bab1551518c9430bdbc1b498a123e01e0c))
- getDataIdMeta heavy load ([#613](https://github.com/00labs/requestNetwork/issues/613)) ([fa8bf9e](https://github.com/00labs/requestNetwork/commit/fa8bf9e77a98d27ad6e21a8118995e6930a99407))
- hide infura token in the status ([#197](https://github.com/00labs/requestNetwork/issues/197)) ([4d154d7](https://github.com/00labs/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))
- high gas related fixes ([#270](https://github.com/00labs/requestNetwork/issues/270)) ([1471b54](https://github.com/00labs/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))
- intercept error and log the missed transaction ([#230](https://github.com/00labs/requestNetwork/issues/230)) ([90f5fdc](https://github.com/00labs/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))
- Misc. minor fixes on the request node ([#334](https://github.com/00labs/requestNetwork/issues/334)) ([8fcf53d](https://github.com/00labs/requestNetwork/commit/8fcf53d6bba23cbb299e7ee7b4bc434be84ca6bd))
- Node socket hangup error ([#293](https://github.com/00labs/requestNetwork/issues/293)) ([02777ea](https://github.com/00labs/requestNetwork/commit/02777ea0b3a2298810098c09bcc591a9cdf631ba))
- publish dist folder instead of src ([#254](https://github.com/00labs/requestNetwork/issues/254)) ([d6b5bd4](https://github.com/00labs/requestNetwork/commit/d6b5bd4899550ece7e182ee937aaacaea5413842))
- Rename providerHost to providerUrl ([#271](https://github.com/00labs/requestNetwork/issues/271)) ([fa5480c](https://github.com/00labs/requestNetwork/commit/fa5480c2ca8e2f64854ea0fa9411d803453a1c42))
- ts-node configuration ([#138](https://github.com/00labs/requestNetwork/issues/138)) ([e2180d5](https://github.com/00labs/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))
- use keyv to persist Ethereum metadata cache ([#431](https://github.com/00labs/requestNetwork/issues/431)) ([6a6788b](https://github.com/00labs/requestNetwork/commit/6a6788bce513b6638b3cbc7d36ca1b5e8cfecddb))

### Features

- **ipfs-manager:** adapt RPC usage with POST methods ([#871](https://github.com/00labs/requestNetwork/issues/871)) ([9b99d72](https://github.com/00labs/requestNetwork/commit/9b99d726512320999b94d8635772ceadc773f6ca))
- split data-access read and write for TheGraph ([#875](https://github.com/00labs/requestNetwork/issues/875)) ([8fdf34d](https://github.com/00labs/requestNetwork/commit/8fdf34d280a5c277125fa431d74976be69768d38))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/00labs/requestNetwork/issues/192)) ([20ad94b](https://github.com/00labs/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))
- **request-node:** allow ws connection ([#691](https://github.com/00labs/requestNetwork/issues/691)) ([2c879a6](https://github.com/00labs/requestNetwork/commit/2c879a60c907e77accb4a99e0d1facaa46cd6001))
- **request-node:** TheGraph as data access ([#717](https://github.com/00labs/requestNetwork/issues/717)) ([651e77f](https://github.com/00labs/requestNetwork/commit/651e77f5fbb1f1c18d01381a8e439029e1d61f30))
- add .env support to the node ([#336](https://github.com/00labs/requestNetwork/issues/336)) ([e1ef0c6](https://github.com/00labs/requestNetwork/commit/e1ef0c62798de8a12c7d8f2ac85beb586ad51308))
- add an option for the Node to define the timeout when calling persistTransaction ([#485](https://github.com/00labs/requestNetwork/issues/485)) ([176228c](https://github.com/00labs/requestNetwork/commit/176228c013a0fd4ea1d3de0a0b1bcf368753251e))
- add concurrent readMany to storage layer ([#363](https://github.com/00labs/requestNetwork/issues/363)) ([db3f484](https://github.com/00labs/requestNetwork/commit/db3f48482f2e97664d5090fa15592ccc96af955d))
- add entry point to request node to get monitoring status ([#191](https://github.com/00labs/requestNetwork/issues/191)) ([1d9c239](https://github.com/00labs/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- add getChannelByTopic in data-access ([#305](https://github.com/00labs/requestNetwork/issues/305)) ([b345df8](https://github.com/00labs/requestNetwork/commit/b345df8216556674fc9f5125053508c675fa9227))
- add logging interfaces and default logger ([#397](https://github.com/00labs/requestNetwork/issues/397)) ([f83a716](https://github.com/00labs/requestNetwork/commit/f83a71699ef6c934b9c3c23469a255ea98f058d1))
- add logs for request processing time ([#424](https://github.com/00labs/requestNetwork/issues/424)) ([3802f4e](https://github.com/00labs/requestNetwork/commit/3802f4ea729d4ef14c2107b0b607b16836fb2c25))
- add logs to calculate success rate of transaction creation ([#443](https://github.com/00labs/requestNetwork/issues/443)) ([738a98d](https://github.com/00labs/requestNetwork/commit/738a98dde35c573fea98e4d68aa8ff6d2e2d18b1))
- add request node health check endpoints ([#449](https://github.com/00labs/requestNetwork/issues/449)) ([bef1a71](https://github.com/00labs/requestNetwork/commit/bef1a718a8f03b08ed1d18be01d4fae86c1dc371))
- add request node logger ([#416](https://github.com/00labs/requestNetwork/issues/416)) ([8d56ade](https://github.com/00labs/requestNetwork/commit/8d56ade8bf141a62cf7c56b4b3e1e6be13324d3d))
- add script to configure private IPFS network ([#458](https://github.com/00labs/requestNetwork/issues/458)) ([4490d2b](https://github.com/00labs/requestNetwork/commit/4490d2bc30a28c02544c13dd44d1db1c10cf3ab9))
- add the confirmed events in the highest layers ([#141](https://github.com/00labs/requestNetwork/issues/141)) ([7f9b756](https://github.com/00labs/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))
- add time to start a Node in the logs ([#423](https://github.com/00labs/requestNetwork/issues/423)) ([f9a6972](https://github.com/00labs/requestNetwork/commit/f9a697202c1727f8c9c0c739a18065862c812e97))
- additional node logs to show progress and logLevel option ([#338](https://github.com/00labs/requestNetwork/issues/338)) ([38559f4](https://github.com/00labs/requestNetwork/commit/38559f4c14e9b605b44184e61e4e655210e10b43))
- BREAKING CHANGE store the multiformat hash of the topics ([#452](https://github.com/00labs/requestNetwork/issues/452)) ([3173333](https://github.com/00labs/requestNetwork/commit/3173333577d48ad472162fc11a5b0bcbefc359e8))
- buffered ethereum storage ([#113](https://github.com/00labs/requestNetwork/issues/113)) ([fe4ece6](https://github.com/00labs/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- Create usable Dockerfile ([#278](https://github.com/00labs/requestNetwork/issues/278)) ([6c83f28](https://github.com/00labs/requestNetwork/commit/6c83f2808d429ba0633ef8af2a18b23af2bb4ba4))
- getRequestsByIdentity include timestamp boundaries in request-clients ([#308](https://github.com/00labs/requestNetwork/issues/308)) ([1fd2df5](https://github.com/00labs/requestNetwork/commit/1fd2df572486c3af73a2a8cd55f2a7b1ee6d544e))
- graceful shutdown of request-node ([#463](https://github.com/00labs/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/00labs/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))
- implements cached-throttle utility ([#348](https://github.com/00labs/requestNetwork/issues/348)) ([01c9885](https://github.com/00labs/requestNetwork/commit/01c988579c5ba15248b781b0069a4d1d0a35c20b))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/00labs/requestNetwork/issues/297)) ([6072905](https://github.com/00labs/requestNetwork/commit/607290533b8a7c58bd01c803ba06c5f846eb6bf6))
- persist transaction with custom ethereum provider ([#106](https://github.com/00labs/requestNetwork/issues/106)) ([61b215f](https://github.com/00labs/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))
- resubmit stuck transaction with more gas ([#239](https://github.com/00labs/requestNetwork/issues/239)) ([cf7f92e](https://github.com/00labs/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- run node through command line `request-node` ([#256](https://github.com/00labs/requestNetwork/issues/256)) ([a03b93d](https://github.com/00labs/requestNetwork/commit/a03b93d9324c36ce2c7f2b91195b1f8b0be6947c))
- Storage get data from timestamp boundaries ([#291](https://github.com/00labs/requestNetwork/issues/291)) ([e9554cd](https://github.com/00labs/requestNetwork/commit/e9554cd3819822ccdcc4684054f553ff79e375fe))
- store confirmed transactions ([#235](https://github.com/00labs/requestNetwork/issues/235)) ([f2d10fc](https://github.com/00labs/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))
- **data-access:** transaction index persisted for faster initialization ([#406](https://github.com/00labs/requestNetwork/issues/406)) ([d820036](https://github.com/00labs/requestNetwork/commit/d820036d1546749bd90523241aa5eedf5232545d))
- Timestamp from storage to client ([#309](https://github.com/00labs/requestNetwork/issues/309)) ([bb0ac19](https://github.com/00labs/requestNetwork/commit/bb0ac195077aa59b1547fb5b16169267a4173c3a))

### Performance Improvements

- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/00labs/requestNetwork/issues/401)) ([184c14e](https://github.com/00labs/requestNetwork/commit/184c14e555484b3c33b1e3b0d970e701338c74ff))
- lower concurrency to 5 and disable DHT on IPFS ([#500](https://github.com/00labs/requestNetwork/issues/500)) ([cec31e3](https://github.com/00labs/requestNetwork/commit/cec31e39af00997e44f61135df1e83c96293954d))

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

# 0.27.0 (2022-11-15)

### Bug Fixes

- **graph node:** graphql query name ([#864](https://github.com/RequestNetwork/requestNetwork/issues/864)) ([5ea56a4](https://github.com/RequestNetwork/requestNetwork/commit/5ea56a4ddf0e0c68ce8043a4e0c39ddf31209876))
- remove provider assertion ([#861](https://github.com/RequestNetwork/requestNetwork/issues/861)) ([5e12b74](https://github.com/RequestNetwork/requestNetwork/commit/5e12b74a7226b4060e29109bf9935a1c905a18dd))
- typescript lint for test files ([#778](https://github.com/RequestNetwork/requestNetwork/issues/778)) ([048e876](https://github.com/RequestNetwork/requestNetwork/commit/048e876a905516be0de8a31d446e4572eb74eccb))
- **request-node:** eth_feeHistory missing parameters ([#764](https://github.com/RequestNetwork/requestNetwork/issues/764)) ([b941252](https://github.com/RequestNetwork/requestNetwork/commit/b941252a1da0f3252cc5405be9a1fb19580790ee))
- **request-node:** maxFeePerGas calculation ([#766](https://github.com/RequestNetwork/requestNetwork/issues/766)) ([12b4227](https://github.com/RequestNetwork/requestNetwork/commit/12b4227cfd5b7b3dea64c1952e40d77d9e9ae8d6))
- **thegraph:** zero timestamp ([#757](https://github.com/RequestNetwork/requestNetwork/issues/757)) ([8246f6f](https://github.com/RequestNetwork/requestNetwork/commit/8246f6fd52478c3a80d2c1a740c3330eb840a1e7))
- Add a specific tsconfig for Dockerfile ([#286](https://github.com/RequestNetwork/requestNetwork/issues/286)) ([901c36c](https://github.com/RequestNetwork/requestNetwork/commit/901c36c4138381877ba006046bbdfceeab4e84f3))
- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138df42ba2b8308a2d27f07b6bd1537ea970))
- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))
- codecov publishing ([#238](https://github.com/RequestNetwork/requestNetwork/issues/238)) ([672df84](https://github.com/RequestNetwork/requestNetwork/commit/672df84111a9fb8096a9dca0a2785d9d6fa2c1d3))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59bab1551518c9430bdbc1b498a123e01e0c))
- getDataIdMeta heavy load ([#613](https://github.com/RequestNetwork/requestNetwork/issues/613)) ([fa8bf9e](https://github.com/RequestNetwork/requestNetwork/commit/fa8bf9e77a98d27ad6e21a8118995e6930a99407))
- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))
- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d6bba23cbb299e7ee7b4bc434be84ca6bd))
- Node socket hangup error ([#293](https://github.com/RequestNetwork/requestNetwork/issues/293)) ([02777ea](https://github.com/RequestNetwork/requestNetwork/commit/02777ea0b3a2298810098c09bcc591a9cdf631ba))
- publish dist folder instead of src ([#254](https://github.com/RequestNetwork/requestNetwork/issues/254)) ([d6b5bd4](https://github.com/RequestNetwork/requestNetwork/commit/d6b5bd4899550ece7e182ee937aaacaea5413842))
- Rename providerHost to providerUrl ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([fa5480c](https://github.com/RequestNetwork/requestNetwork/commit/fa5480c2ca8e2f64854ea0fa9411d803453a1c42))
- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))
- use keyv to persist Ethereum metadata cache ([#431](https://github.com/RequestNetwork/requestNetwork/issues/431)) ([6a6788b](https://github.com/RequestNetwork/requestNetwork/commit/6a6788bce513b6638b3cbc7d36ca1b5e8cfecddb))

### Features

- **ipfs-manager:** adapt RPC usage with POST methods ([#871](https://github.com/RequestNetwork/requestNetwork/issues/871)) ([9b99d72](https://github.com/RequestNetwork/requestNetwork/commit/9b99d726512320999b94d8635772ceadc773f6ca))
- split data-access read and write for TheGraph ([#875](https://github.com/RequestNetwork/requestNetwork/issues/875)) ([8fdf34d](https://github.com/RequestNetwork/requestNetwork/commit/8fdf34d280a5c277125fa431d74976be69768d38))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))
- **request-node:** allow ws connection ([#691](https://github.com/RequestNetwork/requestNetwork/issues/691)) ([2c879a6](https://github.com/RequestNetwork/requestNetwork/commit/2c879a60c907e77accb4a99e0d1facaa46cd6001))
- **request-node:** TheGraph as data access ([#717](https://github.com/RequestNetwork/requestNetwork/issues/717)) ([651e77f](https://github.com/RequestNetwork/requestNetwork/commit/651e77f5fbb1f1c18d01381a8e439029e1d61f30))
- add .env support to the node ([#336](https://github.com/RequestNetwork/requestNetwork/issues/336)) ([e1ef0c6](https://github.com/RequestNetwork/requestNetwork/commit/e1ef0c62798de8a12c7d8f2ac85beb586ad51308))
- add an option for the Node to define the timeout when calling persistTransaction ([#485](https://github.com/RequestNetwork/requestNetwork/issues/485)) ([176228c](https://github.com/RequestNetwork/requestNetwork/commit/176228c013a0fd4ea1d3de0a0b1bcf368753251e))
- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f48482f2e97664d5090fa15592ccc96af955d))
- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8216556674fc9f5125053508c675fa9227))
- add logging interfaces and default logger ([#397](https://github.com/RequestNetwork/requestNetwork/issues/397)) ([f83a716](https://github.com/RequestNetwork/requestNetwork/commit/f83a71699ef6c934b9c3c23469a255ea98f058d1))
- add logs for request processing time ([#424](https://github.com/RequestNetwork/requestNetwork/issues/424)) ([3802f4e](https://github.com/RequestNetwork/requestNetwork/commit/3802f4ea729d4ef14c2107b0b607b16836fb2c25))
- add logs to calculate success rate of transaction creation ([#443](https://github.com/RequestNetwork/requestNetwork/issues/443)) ([738a98d](https://github.com/RequestNetwork/requestNetwork/commit/738a98dde35c573fea98e4d68aa8ff6d2e2d18b1))
- add request node health check endpoints ([#449](https://github.com/RequestNetwork/requestNetwork/issues/449)) ([bef1a71](https://github.com/RequestNetwork/requestNetwork/commit/bef1a718a8f03b08ed1d18be01d4fae86c1dc371))
- add request node logger ([#416](https://github.com/RequestNetwork/requestNetwork/issues/416)) ([8d56ade](https://github.com/RequestNetwork/requestNetwork/commit/8d56ade8bf141a62cf7c56b4b3e1e6be13324d3d))
- add script to configure private IPFS network ([#458](https://github.com/RequestNetwork/requestNetwork/issues/458)) ([4490d2b](https://github.com/RequestNetwork/requestNetwork/commit/4490d2bc30a28c02544c13dd44d1db1c10cf3ab9))
- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))
- add time to start a Node in the logs ([#423](https://github.com/RequestNetwork/requestNetwork/issues/423)) ([f9a6972](https://github.com/RequestNetwork/requestNetwork/commit/f9a697202c1727f8c9c0c739a18065862c812e97))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4c14e9b605b44184e61e4e655210e10b43))
- BREAKING CHANGE store the multiformat hash of the topics ([#452](https://github.com/RequestNetwork/requestNetwork/issues/452)) ([3173333](https://github.com/RequestNetwork/requestNetwork/commit/3173333577d48ad472162fc11a5b0bcbefc359e8))
- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f2808d429ba0633ef8af2a18b23af2bb4ba4))
- getRequestsByIdentity include timestamp boundaries in request-clients ([#308](https://github.com/RequestNetwork/requestNetwork/issues/308)) ([1fd2df5](https://github.com/RequestNetwork/requestNetwork/commit/1fd2df572486c3af73a2a8cd55f2a7b1ee6d544e))
- graceful shutdown of request-node ([#463](https://github.com/RequestNetwork/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/RequestNetwork/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c988579c5ba15248b781b0069a4d1d0a35c20b))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/607290533b8a7c58bd01c803ba06c5f846eb6bf6))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- run node through command line `request-node` ([#256](https://github.com/RequestNetwork/requestNetwork/issues/256)) ([a03b93d](https://github.com/RequestNetwork/requestNetwork/commit/a03b93d9324c36ce2c7f2b91195b1f8b0be6947c))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd3819822ccdcc4684054f553ff79e375fe))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))
- **data-access:** transaction index persisted for faster initialization ([#406](https://github.com/RequestNetwork/requestNetwork/issues/406)) ([d820036](https://github.com/RequestNetwork/requestNetwork/commit/d820036d1546749bd90523241aa5eedf5232545d))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac195077aa59b1547fb5b16169267a4173c3a))

### Performance Improvements

- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e555484b3c33b1e3b0d970e701338c74ff))
- lower concurrency to 5 and disable DHT on IPFS ([#500](https://github.com/RequestNetwork/requestNetwork/issues/500)) ([cec31e3](https://github.com/RequestNetwork/requestNetwork/commit/cec31e39af00997e44f61135df1e83c96293954d))

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

# [0.26.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.23.0...@requestnetwork/request-node@0.26.0) (2021-06-22)

### Features

- graceful shutdown of request-node ([#463](https://github.com/RequestNetwork/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/RequestNetwork/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))

# [0.25.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.23.0...@requestnetwork/request-node@0.25.0) (2021-05-12)

### Features

- graceful shutdown of request-node ([#463](https://github.com/RequestNetwork/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/RequestNetwork/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))

# [0.24.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.23.0...@requestnetwork/request-node@0.24.0) (2021-04-19)

### Features

- graceful shutdown of request-node ([#463](https://github.com/RequestNetwork/requestNetwork/issues/463)) ([ba5b7c2](https://github.com/RequestNetwork/requestNetwork/commit/ba5b7c257d65996c971dedf71ac6fa1ea44ec891))

## [0.23.6](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.23.0...@requestnetwork/request-node@0.23.6) (2021-03-25)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.23.5](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.23.0...@requestnetwork/request-node@0.23.5) (2021-03-15)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.23.4](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.23.0...@requestnetwork/request-node@0.23.4) (2021-03-03)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.23.3](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.23.0...@requestnetwork/request-node@0.23.3) (2021-02-22)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.23.2](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.23.0...@requestnetwork/request-node@0.23.2) (2020-12-22)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.23.1](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.23.0...@requestnetwork/request-node@0.23.1) (2020-12-21)

**Note:** Version bump only for package @requestnetwork/request-node

# [0.23.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.23.0) (2020-12-02)

# 0.26.0 (2020-10-14)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))
- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.22.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.22.0) (2020-11-12)

# 0.26.0 (2020-10-14)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))
- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.21.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.21.0) (2020-11-05)

# 0.26.0 (2020-10-14)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))
- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.20.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.20.0) (2020-10-21)

# 0.26.0 (2020-10-14)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.19.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.19.0) (2020-10-14)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.18.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.18.0) (2020-10-13)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.17.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.17.0) (2020-10-09)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.16.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.16.0) (2020-09-28)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))
- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.15.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.15.0) (2020-09-18)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))
- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.14.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.14.0) (2020-09-01)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.13.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.13.0) (2020-08-27)

### Bug Fixes

- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.12.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.12.0) (2020-08-13)

# 0.18.0 (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.11.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.11.0) (2020-06-29)

### Bug Fixes

- intercept error and log the missed transaction ([#230](https://github.com/RequestNetwork/requestNetwork/issues/230)) ([90f5fdc](https://github.com/RequestNetwork/requestNetwork/commit/90f5fdc814b1e53698be294e1b138e2ea7276794))

### Features

- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- store confirmed transactions ([#235](https://github.com/RequestNetwork/requestNetwork/issues/235)) ([f2d10fc](https://github.com/RequestNetwork/requestNetwork/commit/f2d10fc6af098fec4b8585ffea5e101c256f6a35))

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.10.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.10.0) (2020-05-04)

# 0.16.0 (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.9.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.9.0) (2020-04-21)

### Bug Fixes

- hide infura token in the status ([#197](https://github.com/RequestNetwork/requestNetwork/issues/197)) ([4d154d7](https://github.com/RequestNetwork/requestNetwork/commit/4d154d717a37bd9212dfec5ee44ff1541453018a))

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- **request-node:** Add Request Node version and Request Client version to requests header ([#192](https://github.com/RequestNetwork/requestNetwork/issues/192)) ([20ad94b](https://github.com/RequestNetwork/requestNetwork/commit/20ad94b7679b5c08a3951329b1fa8a58c8a3e2df))

# 0.15.0 (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.8.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.8.0) (2020-04-06)

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
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.7.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.7.0) (2020-03-23)

### Bug Fixes

- block parsing with encrypted transaction ([#176](https://github.com/RequestNetwork/requestNetwork/issues/176)) ([de86f43](https://github.com/RequestNetwork/requestNetwork/commit/de86f43d7f2886673364bded70ab6a4f8acf4711))

### Features

- add the confirmed events in the highest layers ([#141](https://github.com/RequestNetwork/requestNetwork/issues/141)) ([7f9b756](https://github.com/RequestNetwork/requestNetwork/commit/7f9b756d51b20fbd45971f4db3e9865b75f2d265))

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.6.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.6.0) (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

## [0.5.7](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.5.7) (2020-01-16)

# 0.10.0 (2019-12-04)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.5.6](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.5.6) (2019-12-18)

# 0.10.0 (2019-12-04)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.5.5](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.4...@requestnetwork/request-node@0.5.5) (2019-12-04)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.5.4](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.3...@requestnetwork/request-node@0.5.4) (2019-11-20)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.5.3](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.2...@requestnetwork/request-node@0.5.3) (2019-10-21)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.5.2](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.1...@requestnetwork/request-node@0.5.2) (2019-09-16)

**Note:** Version bump only for package @requestnetwork/request-node

## [0.5.1](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.5.0...@requestnetwork/request-node@0.5.1) (2019-09-05)

**Note:** Version bump only for package @requestnetwork/request-node

# [0.5.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.4.0...@requestnetwork/request-node@0.5.0) (2019-08-19)

### Features

- add an option for the Node to define the timeout when calling persistTransaction ([#485](https://github.com/RequestNetwork/requestNetwork/issues/485)) ([176228c](https://github.com/RequestNetwork/requestNetwork/commit/176228c))

### Performance Improvements

- lower concurrency to 5 and disable DHT on IPFS ([#500](https://github.com/RequestNetwork/requestNetwork/issues/500)) ([cec31e3](https://github.com/RequestNetwork/requestNetwork/commit/cec31e3))

# [0.3.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.1.1-alpha.4...@requestnetwork/request-node@0.3.0) (2019-07-24)

### Bug Fixes

- Add a specific tsconfig for Dockerfile ([#286](https://github.com/RequestNetwork/requestNetwork/issues/286)) ([901c36c](https://github.com/RequestNetwork/requestNetwork/commit/901c36c))
- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- Node socket hangup error ([#293](https://github.com/RequestNetwork/requestNetwork/issues/293)) ([02777ea](https://github.com/RequestNetwork/requestNetwork/commit/02777ea))
- Rename providerHost to providerUrl ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([fa5480c](https://github.com/RequestNetwork/requestNetwork/commit/fa5480c))
- use keyv to persist Ethereum metadata cache ([#431](https://github.com/RequestNetwork/requestNetwork/issues/431)) ([6a6788b](https://github.com/RequestNetwork/requestNetwork/commit/6a6788b))

### Features

- add .env support to the node ([#336](https://github.com/RequestNetwork/requestNetwork/issues/336)) ([e1ef0c6](https://github.com/RequestNetwork/requestNetwork/commit/e1ef0c6))
- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f484))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- add logging interfaces and default logger ([#397](https://github.com/RequestNetwork/requestNetwork/issues/397)) ([f83a716](https://github.com/RequestNetwork/requestNetwork/commit/f83a716))
- add logs for request processing time ([#424](https://github.com/RequestNetwork/requestNetwork/issues/424)) ([3802f4e](https://github.com/RequestNetwork/requestNetwork/commit/3802f4e))
- add logs to calculate success rate of transaction creation ([#443](https://github.com/RequestNetwork/requestNetwork/issues/443)) ([738a98d](https://github.com/RequestNetwork/requestNetwork/commit/738a98d))
- add request node health check endpoints ([#449](https://github.com/RequestNetwork/requestNetwork/issues/449)) ([bef1a71](https://github.com/RequestNetwork/requestNetwork/commit/bef1a71))
- add request node logger ([#416](https://github.com/RequestNetwork/requestNetwork/issues/416)) ([8d56ade](https://github.com/RequestNetwork/requestNetwork/commit/8d56ade))
- add script to configure private IPFS network ([#458](https://github.com/RequestNetwork/requestNetwork/issues/458)) ([4490d2b](https://github.com/RequestNetwork/requestNetwork/commit/4490d2b))
- add time to start a Node in the logs ([#423](https://github.com/RequestNetwork/requestNetwork/issues/423)) ([f9a6972](https://github.com/RequestNetwork/requestNetwork/commit/f9a6972))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- **data-access:** transaction index persisted for faster initialization ([#406](https://github.com/RequestNetwork/requestNetwork/issues/406)) ([d820036](https://github.com/RequestNetwork/requestNetwork/commit/d820036))
- getRequestsByIdentity include timestamp boundaries in request-clients ([#308](https://github.com/RequestNetwork/requestNetwork/issues/308)) ([1fd2df5](https://github.com/RequestNetwork/requestNetwork/commit/1fd2df5))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

### Performance Improvements

- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e))

## [0.2.1-alpha.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.1.1-alpha.4...@requestnetwork/request-node@0.2.1-alpha.0) (2019-07-22)

### Bug Fixes

- Add a specific tsconfig for Dockerfile ([#286](https://github.com/RequestNetwork/requestNetwork/issues/286)) ([901c36c](https://github.com/RequestNetwork/requestNetwork/commit/901c36c))
- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- Node socket hangup error ([#293](https://github.com/RequestNetwork/requestNetwork/issues/293)) ([02777ea](https://github.com/RequestNetwork/requestNetwork/commit/02777ea))
- Rename providerHost to providerUrl ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([fa5480c](https://github.com/RequestNetwork/requestNetwork/commit/fa5480c))
- use keyv to persist Ethereum metadata cache ([#431](https://github.com/RequestNetwork/requestNetwork/issues/431)) ([6a6788b](https://github.com/RequestNetwork/requestNetwork/commit/6a6788b))

### Features

- add .env support to the node ([#336](https://github.com/RequestNetwork/requestNetwork/issues/336)) ([e1ef0c6](https://github.com/RequestNetwork/requestNetwork/commit/e1ef0c6))
- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f484))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- add logging interfaces and default logger ([#397](https://github.com/RequestNetwork/requestNetwork/issues/397)) ([f83a716](https://github.com/RequestNetwork/requestNetwork/commit/f83a716))
- add logs for request processing time ([#424](https://github.com/RequestNetwork/requestNetwork/issues/424)) ([3802f4e](https://github.com/RequestNetwork/requestNetwork/commit/3802f4e))
- add logs to calculate success rate of transaction creation ([#443](https://github.com/RequestNetwork/requestNetwork/issues/443)) ([738a98d](https://github.com/RequestNetwork/requestNetwork/commit/738a98d))
- add request node health check endpoints ([#449](https://github.com/RequestNetwork/requestNetwork/issues/449)) ([bef1a71](https://github.com/RequestNetwork/requestNetwork/commit/bef1a71))
- add request node logger ([#416](https://github.com/RequestNetwork/requestNetwork/issues/416)) ([8d56ade](https://github.com/RequestNetwork/requestNetwork/commit/8d56ade))
- add time to start a Node in the logs ([#423](https://github.com/RequestNetwork/requestNetwork/issues/423)) ([f9a6972](https://github.com/RequestNetwork/requestNetwork/commit/f9a6972))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- **data-access:** transaction index persisted for faster initialization ([#406](https://github.com/RequestNetwork/requestNetwork/issues/406)) ([d820036](https://github.com/RequestNetwork/requestNetwork/commit/d820036))
- getRequestsByIdentity include timestamp boundaries in request-clients ([#308](https://github.com/RequestNetwork/requestNetwork/issues/308)) ([1fd2df5](https://github.com/RequestNetwork/requestNetwork/commit/1fd2df5))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

### Performance Improvements

- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e))

# [0.2.0](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.1.1-alpha.4...@requestnetwork/request-node@0.2.0) (2019-06-06)

### Bug Fixes

- Add a specific tsconfig for Dockerfile ([#286](https://github.com/RequestNetwork/requestNetwork/issues/286)) ([901c36c](https://github.com/RequestNetwork/requestNetwork/commit/901c36c))
- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- Node socket hangup error ([#293](https://github.com/RequestNetwork/requestNetwork/issues/293)) ([02777ea](https://github.com/RequestNetwork/requestNetwork/commit/02777ea))
- Rename providerHost to providerUrl ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([fa5480c](https://github.com/RequestNetwork/requestNetwork/commit/fa5480c))

### Features

- add .env support to the node ([#336](https://github.com/RequestNetwork/requestNetwork/issues/336)) ([e1ef0c6](https://github.com/RequestNetwork/requestNetwork/commit/e1ef0c6))
- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f484))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- add logging interfaces and default logger ([#397](https://github.com/RequestNetwork/requestNetwork/issues/397)) ([f83a716](https://github.com/RequestNetwork/requestNetwork/commit/f83a716))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- getRequestsByIdentity include timestamp boundaries in request-clients ([#308](https://github.com/RequestNetwork/requestNetwork/issues/308)) ([1fd2df5](https://github.com/RequestNetwork/requestNetwork/commit/1fd2df5))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

### Performance Improvements

- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e))

## [0.1.1-alpha.12](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.1.1-alpha.4...@requestnetwork/request-node@0.1.1-alpha.12) (2019-05-21)

### Bug Fixes

- Add a specific tsconfig for Dockerfile ([#286](https://github.com/RequestNetwork/requestNetwork/issues/286)) ([901c36c](https://github.com/RequestNetwork/requestNetwork/commit/901c36c))
- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- Node socket hangup error ([#293](https://github.com/RequestNetwork/requestNetwork/issues/293)) ([02777ea](https://github.com/RequestNetwork/requestNetwork/commit/02777ea))
- Rename providerHost to providerUrl ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([fa5480c](https://github.com/RequestNetwork/requestNetwork/commit/fa5480c))

### Features

- add .env support to the node ([#336](https://github.com/RequestNetwork/requestNetwork/issues/336)) ([e1ef0c6](https://github.com/RequestNetwork/requestNetwork/commit/e1ef0c6))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- getRequestsByIdentity include timestamp boundaries in request-clients ([#308](https://github.com/RequestNetwork/requestNetwork/issues/308)) ([1fd2df5](https://github.com/RequestNetwork/requestNetwork/commit/1fd2df5))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

## [0.1.1-alpha.11](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.1.1-alpha.4...@requestnetwork/request-node@0.1.1-alpha.11) (2019-05-17)

### Bug Fixes

- Add a specific tsconfig for Dockerfile ([#286](https://github.com/RequestNetwork/requestNetwork/issues/286)) ([901c36c](https://github.com/RequestNetwork/requestNetwork/commit/901c36c))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- Node socket hangup error ([#293](https://github.com/RequestNetwork/requestNetwork/issues/293)) ([02777ea](https://github.com/RequestNetwork/requestNetwork/commit/02777ea))
- Rename providerHost to providerUrl ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([fa5480c](https://github.com/RequestNetwork/requestNetwork/commit/fa5480c))

### Features

- add .env support to the node ([#336](https://github.com/RequestNetwork/requestNetwork/issues/336)) ([e1ef0c6](https://github.com/RequestNetwork/requestNetwork/commit/e1ef0c6))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- getRequestsByIdentity include timestamp boundaries in request-clients ([#308](https://github.com/RequestNetwork/requestNetwork/issues/308)) ([1fd2df5](https://github.com/RequestNetwork/requestNetwork/commit/1fd2df5))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))

## [0.1.1-alpha.10](https://github.com/RequestNetwork/requestNetwork/compare/@requestnetwork/request-node@0.1.1-alpha.4...@requestnetwork/request-node@0.1.1-alpha.10) (2019-05-10)

### Bug Fixes

- Add a specific tsconfig for Dockerfile ([#286](https://github.com/RequestNetwork/requestNetwork/issues/286)) ([901c36c](https://github.com/RequestNetwork/requestNetwork/commit/901c36c))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- Node socket hangup error ([#293](https://github.com/RequestNetwork/requestNetwork/issues/293)) ([02777ea](https://github.com/RequestNetwork/requestNetwork/commit/02777ea))
- Rename providerHost to providerUrl ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([fa5480c](https://github.com/RequestNetwork/requestNetwork/commit/fa5480c))

### Features

- add .env support to the node ([#336](https://github.com/RequestNetwork/requestNetwork/issues/336)) ([e1ef0c6](https://github.com/RequestNetwork/requestNetwork/commit/e1ef0c6))
- add getChannelByTopic in data-access ([#305](https://github.com/RequestNetwork/requestNetwork/issues/305)) ([b345df8](https://github.com/RequestNetwork/requestNetwork/commit/b345df8))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- getRequestsByIdentity include timestamp boundaries in request-clients ([#308](https://github.com/RequestNetwork/requestNetwork/issues/308)) ([1fd2df5](https://github.com/RequestNetwork/requestNetwork/commit/1fd2df5))
- introduce channelIds to enhance the topics mechanism ([#297](https://github.com/RequestNetwork/requestNetwork/issues/297)) ([6072905](https://github.com/RequestNetwork/requestNetwork/commit/6072905))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- Timestamp from storage to client ([#309](https://github.com/RequestNetwork/requestNetwork/issues/309)) ([bb0ac19](https://github.com/RequestNetwork/requestNetwork/commit/bb0ac19))
