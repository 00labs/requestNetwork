# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.29.0 (2023-02-07)

### Bug Fixes

- **toolbox:** addAggregator fees ([#1010](https://github.com/RequestNetwork/requestNetwork/issues/1010)) ([8ff7690](https://github.com/RequestNetwork/requestNetwork/commit/8ff76906005ed42e7624e73d7e2b579731508a0d))
- add retry for getPastEvents web3 API call ([#455](https://github.com/RequestNetwork/requestNetwork/issues/455)) ([0116636](https://github.com/RequestNetwork/requestNetwork/commit/01166362ff1cd013950a4ea9cfe84d512f44ea32))
- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138df42ba2b8308a2d27f07b6bd1537ea970))
- change bootstrap IPFS multiaddrs id ([#474](https://github.com/RequestNetwork/requestNetwork/issues/474)) ([1638199](https://github.com/RequestNetwork/requestNetwork/commit/1638199f017ca62cb3d58bd65daa0472f92fd421))
- Check the ipfs node connection getting an expected file instead of using repo/verify ([#440](https://github.com/RequestNetwork/requestNetwork/issues/440)) ([4d537f7](https://github.com/RequestNetwork/requestNetwork/commit/4d537f7133e4cee7d2ad554d65b16c541a6c175f))
- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a227ed29254404329ad672b00a56639e35f4))
- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59bab1551518c9430bdbc1b498a123e01e0c))
- Ethereum-storage meta, no redundant getPastEvents call ([#312](https://github.com/RequestNetwork/requestNetwork/issues/312)) ([28b5bb1](https://github.com/RequestNetwork/requestNetwork/commit/28b5bb107338eb801a42fdbe661c52d08fcfdb6d))
- getDataIdMeta heavy load ([#613](https://github.com/RequestNetwork/requestNetwork/issues/613)) ([fa8bf9e](https://github.com/RequestNetwork/requestNetwork/commit/fa8bf9e77a98d27ad6e21a8118995e6930a99407))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))
- invoice total types + upgrade ethers ([#514](https://github.com/RequestNetwork/requestNetwork/issues/514)) ([c2b98b2](https://github.com/RequestNetwork/requestNetwork/commit/c2b98b2bd3c93f063f340d58c6b95ad026fd9519))
- ipfs manager read() decode from base64 before checking the size ([#314](https://github.com/RequestNetwork/requestNetwork/issues/314)) ([4b41eb7](https://github.com/RequestNetwork/requestNetwork/commit/4b41eb7271d0b7a2b7711915d5a3125063118f16))
- merge issue in ipfs pin config ([#413](https://github.com/RequestNetwork/requestNetwork/issues/413)) ([3a5654f](https://github.com/RequestNetwork/requestNetwork/commit/3a5654f8c7beb89224b1cbbed88374f092bbdf83))
- min gas ([#940](https://github.com/RequestNetwork/requestNetwork/issues/940)) ([ce9990f](https://github.com/RequestNetwork/requestNetwork/commit/ce9990f704cd374218769ff4cd9f4d2e8e041bbd))
- min priority fee ([#998](https://github.com/RequestNetwork/requestNetwork/issues/998)) ([21e1bbd](https://github.com/RequestNetwork/requestNetwork/commit/21e1bbdfd7cafe593a938462cffd0360108ef4b7))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d6bba23cbb299e7ee7b4bc434be84ca6bd))
- publish dist folder instead of src ([#254](https://github.com/RequestNetwork/requestNetwork/issues/254)) ([d6b5bd4](https://github.com/RequestNetwork/requestNetwork/commit/d6b5bd4899550ece7e182ee937aaacaea5413842))
- query returned more than 10000 results error ([#437](https://github.com/RequestNetwork/requestNetwork/issues/437)) ([9621633](https://github.com/RequestNetwork/requestNetwork/commit/96216331d50424cfbb174b382ce4f15debc898e3))
- remove IPFS swarm connect from node initialization ([#442](https://github.com/RequestNetwork/requestNetwork/issues/442)) ([da11afa](https://github.com/RequestNetwork/requestNetwork/commit/da11afa07d05c51d0fdd15393006c8a59d399f8d))
- typescript lint for test files ([#778](https://github.com/RequestNetwork/requestNetwork/issues/778)) ([048e876](https://github.com/RequestNetwork/requestNetwork/commit/048e876a905516be0de8a31d446e4572eb74eccb))
- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- **smart-contract-manager:** save the real confirmationNumber ([#659](https://github.com/RequestNetwork/requestNetwork/issues/659)) ([c6f4b85](https://github.com/RequestNetwork/requestNetwork/commit/c6f4b85ac6998c0d6172ee036dd353ba175b6f0b))
- retry twice to parse data on IPFS during initialisation of data-access ([#497](https://github.com/RequestNetwork/requestNetwork/issues/497)) ([c8d542d](https://github.com/RequestNetwork/requestNetwork/commit/c8d542db3a57fb18ec582ab5710b7fd02554f679))
- return ipfs-manager rejections ([#434](https://github.com/RequestNetwork/requestNetwork/issues/434)) ([0bc2b73](https://github.com/RequestNetwork/requestNetwork/commit/0bc2b731f43fbeb25e28e7b58998cda31b2c5acf))
- skip fetching data if no hash was found ([#545](https://github.com/RequestNetwork/requestNetwork/issues/545)) ([9583b8d](https://github.com/RequestNetwork/requestNetwork/commit/9583b8df968220cf567baaa536c05bce86487428))
- skip flaky retry tests ([#427](https://github.com/RequestNetwork/requestNetwork/issues/427)) ([68dd837](https://github.com/RequestNetwork/requestNetwork/commit/68dd837dc740bf02fdf11fea2bf2e8b0d76fd751))
- storage endless http request ([#284](https://github.com/RequestNetwork/requestNetwork/issues/284)) ([9adac9a](https://github.com/RequestNetwork/requestNetwork/commit/9adac9a9f8b3ef9597235fbf3eab270a14e826c9))
- Storage Infura 1000 results error ([#320](https://github.com/RequestNetwork/requestNetwork/issues/320)) ([289a7f2](https://github.com/RequestNetwork/requestNetwork/commit/289a7f23a19005bd489210309c44b1013dd5993c))
- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))
- upgrade ethers to 5.2.0 ([#532](https://github.com/RequestNetwork/requestNetwork/issues/532)) ([6c7cf35](https://github.com/RequestNetwork/requestNetwork/commit/6c7cf350a04e280b77ce6fd758b6f065f28fd1cc))
- **ethereum-storage:** checkEthereumNodeConnection never finishing when Ethereum node not reachable ([6941bd9](https://github.com/RequestNetwork/requestNetwork/commit/6941bd9312008cfee9c05d5f7d1768e02f6023cc))
- Use getSecondtLastBlockNumber instead of getLastBlockNumber for getBlockNumbersFromTimestamp ([#330](https://github.com/RequestNetwork/requestNetwork/issues/330)) ([58606b7](https://github.com/RequestNetwork/requestNetwork/commit/58606b73add05aa0309677ab47159c827e38d0cb))
- use IPFS id endpoint to verify if the server is online ([#450](https://github.com/RequestNetwork/requestNetwork/issues/450)) ([ce56b5f](https://github.com/RequestNetwork/requestNetwork/commit/ce56b5f5eb5a164918fb698a568396cca9cb527c))
- use keyv to persist Ethereum metadata cache ([#431](https://github.com/RequestNetwork/requestNetwork/issues/431)) ([6a6788b](https://github.com/RequestNetwork/requestNetwork/commit/6a6788bce513b6638b3cbc7d36ca1b5e8cfecddb))
- use last synched block timestamp as the sync timestamp instead of now ([#481](https://github.com/RequestNetwork/requestNetwork/issues/481)) ([81c8cd6](https://github.com/RequestNetwork/requestNetwork/commit/81c8cd6671ff7e80f182213205470c58647e7ef2))

### Features

- **ethereum-storage:** add minimum gas price option ([#997](https://github.com/RequestNetwork/requestNetwork/issues/997)) ([121aeaa](https://github.com/RequestNetwork/requestNetwork/commit/121aeaaed4c8f65a57b9f20a1cf1e31d75e09d3f))
- **ipfs-manager:** adapt RPC usage with POST methods ([#871](https://github.com/RequestNetwork/requestNetwork/issues/871)) ([9b99d72](https://github.com/RequestNetwork/requestNetwork/commit/9b99d726512320999b94d8635772ceadc773f6ca))
- **smart-contracts:** xdeployer gas fee eip1559 ([#1014](https://github.com/RequestNetwork/requestNetwork/issues/1014)) ([054fc63](https://github.com/RequestNetwork/requestNetwork/commit/054fc6307177d9dd56f690e37fdaf4a965bbfbfe))
- **toolbox:** troubleshooting utilities ([#995](https://github.com/RequestNetwork/requestNetwork/issues/995)) ([1818e08](https://github.com/RequestNetwork/requestNetwork/commit/1818e080fee237aec3ba411e15bc864e82adaf7c))
- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f48482f2e97664d5090fa15592ccc96af955d))
- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))
- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- add IPFS peer for faster IPFS retrieval, and check IPFS and Ethereum nodes connections ([#353](https://github.com/RequestNetwork/requestNetwork/issues/353)) ([47358c2](https://github.com/RequestNetwork/requestNetwork/commit/47358c2bad8b5c40e0d4c2c240b9e856592858e4))
- add logging interfaces and default logger ([#397](https://github.com/RequestNetwork/requestNetwork/issues/397)) ([f83a716](https://github.com/RequestNetwork/requestNetwork/commit/f83a71699ef6c934b9c3c23469a255ea98f058d1))
- Add mainnet contracts addresses to artifacts ([#477](https://github.com/RequestNetwork/requestNetwork/issues/477)) ([ec80c4b](https://github.com/RequestNetwork/requestNetwork/commit/ec80c4b032532e0c54abb93c7740107382d31c7f))
- add script to configure private IPFS network ([#458](https://github.com/RequestNetwork/requestNetwork/issues/458)) ([4490d2b](https://github.com/RequestNetwork/requestNetwork/commit/4490d2bc30a28c02544c13dd44d1db1c10cf3ab9))
- add tags for successfully retrieved hashes ([#444](https://github.com/RequestNetwork/requestNetwork/issues/444)) ([cfc3eb0](https://github.com/RequestNetwork/requestNetwork/commit/cfc3eb03a5210b73b5f5e8083bffd5b7c988d299))
- add the ability to be able to configure the host + port via com… ([#355](https://github.com/RequestNetwork/requestNetwork/issues/355)) ([5b6a6c6](https://github.com/RequestNetwork/requestNetwork/commit/5b6a6c68117664f6c8797d8732489fdae001b4ab))
- Add the two new IPFS nodes as known IPFS nodes ([#410](https://github.com/RequestNetwork/requestNetwork/issues/410)) ([b33f2e9](https://github.com/RequestNetwork/requestNetwork/commit/b33f2e9adfc1dd5fe37478bc09586456968ea9cb))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4c14e9b605b44184e61e4e655210e10b43))
- asynchronously pin IPFS files in batches ([#403](https://github.com/RequestNetwork/requestNetwork/issues/403)) ([926c22b](https://github.com/RequestNetwork/requestNetwork/commit/926c22b326e7cd7dc800fc89302bc19cf1105c4f))
- BREAKING CHANGE store the multiformat hash of the topics ([#452](https://github.com/RequestNetwork/requestNetwork/issues/452)) ([3173333](https://github.com/RequestNetwork/requestNetwork/commit/3173333577d48ad472162fc11a5b0bcbefc359e8))
- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- check if the contracts are deployed and configured ([#360](https://github.com/RequestNetwork/requestNetwork/issues/360)) ([c18bf00](https://github.com/RequestNetwork/requestNetwork/commit/c18bf0016f0a12abed2c9c774b37cbb2bd8f5014))
- check ipfs bootstrap nodes to ensure the correct ipfs network ([#465](https://github.com/RequestNetwork/requestNetwork/issues/465)) ([184d04a](https://github.com/RequestNetwork/requestNetwork/commit/184d04acf46d199cb8736fec58374de982e5f223))
- class to get Ethereum block information in storage ([#283](https://github.com/RequestNetwork/requestNetwork/issues/283)) ([1454981](https://github.com/RequestNetwork/requestNetwork/commit/1454981e01d10e378909279d3f96e2ac8796eedf))
- configurable ethereum node host and port for smart contract deployment ([#358](https://github.com/RequestNetwork/requestNetwork/issues/358)) ([d7ad242](https://github.com/RequestNetwork/requestNetwork/commit/d7ad2422fbcdde0a42643595cc2599cebb828f00))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f2808d429ba0633ef8af2a18b23af2bb4ba4))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- Data access interface ([#161](https://github.com/RequestNetwork/requestNetwork/issues/161)) ([ccb4481](https://github.com/RequestNetwork/requestNetwork/commit/ccb448161607867f64929ae89e9189b1427067cd))
- determines gas price automatically on mainnet ([#429](https://github.com/RequestNetwork/requestNetwork/issues/429)) ([3d42c75](https://github.com/RequestNetwork/requestNetwork/commit/3d42c75a3a6544541fe0197a1fd69f49a873430a))
- goerli storage ([#890](https://github.com/RequestNetwork/requestNetwork/issues/890)) ([6aa9849](https://github.com/RequestNetwork/requestNetwork/commit/6aa9849e7c5795de6ec3cbd2a1607af15416a833))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c988579c5ba15248b781b0069a4d1d0a35c20b))
- increase XDaiFixedProvider prices ([#523](https://github.com/RequestNetwork/requestNetwork/issues/523)) ([eeca1e7](https://github.com/RequestNetwork/requestNetwork/commit/eeca1e7657e74579da66112045855a5d7dea8078))
- IPFS retry on error ([#421](https://github.com/RequestNetwork/requestNetwork/issues/421)) ([18d6e6e](https://github.com/RequestNetwork/requestNetwork/commit/18d6e6ea1596db91147dc94881458995a6ab5c6d))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0dc31a9c94c7acd8caee5126f1846589558))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))
- pin ipfs data on the node ([#361](https://github.com/RequestNetwork/requestNetwork/issues/361)) ([5830350](https://github.com/RequestNetwork/requestNetwork/commit/5830350467c9539a6d6a5f082493701cf4fdc188))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))
- Save dataId's Ethereum metadata when append is called ([#352](https://github.com/RequestNetwork/requestNetwork/issues/352)) ([118d197](https://github.com/RequestNetwork/requestNetwork/commit/118d197588780559057607a6b137a7b7e4d28d3f))
- Storage cache for Ethereum metadata ([#323](https://github.com/RequestNetwork/requestNetwork/issues/323)) ([cb29b8e](https://github.com/RequestNetwork/requestNetwork/commit/cb29b8e77a0f6750541f0b74c26676f86072f983))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd3819822ccdcc4684054f553ff79e375fe))
- Storage module ([#157](https://github.com/RequestNetwork/requestNetwork/issues/157)) ([bea2b50](https://github.com/RequestNetwork/requestNetwork/commit/bea2b50b50b44a5f78d2c49cdfbdb5f2d0ad883f))
- upgradable smart contracts ([#337](https://github.com/RequestNetwork/requestNetwork/issues/337)) ([c8cf724](https://github.com/RequestNetwork/requestNetwork/commit/c8cf7249978f4c892b92a3cdcab98a32427c65a5))
- upgrade smart contract dependencies ([#241](https://github.com/RequestNetwork/requestNetwork/issues/241)) ([319000f](https://github.com/RequestNetwork/requestNetwork/commit/319000f6c4834a925816d0706924b05b6cac72c3))
- xdai gas price ([#457](https://github.com/RequestNetwork/requestNetwork/issues/457)) ([8f0822d](https://github.com/RequestNetwork/requestNetwork/commit/8f0822de91cb2d9f617fa94c4d11dcd9adf806b2))

### Performance Improvements

- add the node ipfs request network at initialization ([#398](https://github.com/RequestNetwork/requestNetwork/issues/398)) ([7e0c25a](https://github.com/RequestNetwork/requestNetwork/commit/7e0c25a4fbdc70ff0e57f96d32585f30cfa8fc93))
- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e555484b3c33b1e3b0d970e701338c74ff))
- lower concurrency to 5 and disable DHT on IPFS ([#500](https://github.com/RequestNetwork/requestNetwork/issues/500)) ([cec31e3](https://github.com/RequestNetwork/requestNetwork/commit/cec31e39af00997e44f61135df1e83c96293954d))
- use the fast value provided by gas price APIs instead of the standard value ([#479](https://github.com/RequestNetwork/requestNetwork/issues/479)) ([acd4fdd](https://github.com/RequestNetwork/requestNetwork/commit/acd4fdd997cf6b011ff01922d98520242b0cade1))

### Reverts

- Revert "feat: add the ability to be able to configure the host + port via com… (#355)" (#356) ([c9519f7](https://github.com/RequestNetwork/requestNetwork/commit/c9519f7f10e9a0ca8c4a8e61b7291b7b08b1fda3)), closes [#355](https://github.com/RequestNetwork/requestNetwork/issues/355) [#356](https://github.com/RequestNetwork/requestNetwork/issues/356)

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

# [0.27.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.27.0) (2022-11-04)

### Bug Fixes

- getDataIdMeta heavy load ([#613](https://github.com/RequestNetwork/requestNetwork/issues/613)) ([fa8bf9e](https://github.com/RequestNetwork/requestNetwork/commit/fa8bf9e77a98d27ad6e21a8118995e6930a99407))
- invoice total types + upgrade ethers ([#514](https://github.com/RequestNetwork/requestNetwork/issues/514)) ([c2b98b2](https://github.com/RequestNetwork/requestNetwork/commit/c2b98b2bd3c93f063f340d58c6b95ad026fd9519))
- min gas ([#940](https://github.com/RequestNetwork/requestNetwork/issues/940)) ([ce9990f](https://github.com/RequestNetwork/requestNetwork/commit/ce9990f704cd374218769ff4cd9f4d2e8e041bbd))
- typescript lint for test files ([#778](https://github.com/RequestNetwork/requestNetwork/issues/778)) ([048e876](https://github.com/RequestNetwork/requestNetwork/commit/048e876a905516be0de8a31d446e4572eb74eccb))
- **smart-contract-manager:** save the real confirmationNumber ([#659](https://github.com/RequestNetwork/requestNetwork/issues/659)) ([c6f4b85](https://github.com/RequestNetwork/requestNetwork/commit/c6f4b85ac6998c0d6172ee036dd353ba175b6f0b))
- upgrade ethers to 5.2.0 ([#532](https://github.com/RequestNetwork/requestNetwork/issues/532)) ([6c7cf35](https://github.com/RequestNetwork/requestNetwork/commit/6c7cf350a04e280b77ce6fd758b6f065f28fd1cc))

### Features

- goerli storage ([#890](https://github.com/RequestNetwork/requestNetwork/issues/890)) ([6aa9849](https://github.com/RequestNetwork/requestNetwork/commit/6aa9849e7c5795de6ec3cbd2a1607af15416a833))
- **ipfs-manager:** adapt RPC usage with POST methods ([#871](https://github.com/RequestNetwork/requestNetwork/issues/871)) ([9b99d72](https://github.com/RequestNetwork/requestNetwork/commit/9b99d726512320999b94d8635772ceadc773f6ca))
- increase XDaiFixedProvider prices ([#523](https://github.com/RequestNetwork/requestNetwork/issues/523)) ([eeca1e7](https://github.com/RequestNetwork/requestNetwork/commit/eeca1e7657e74579da66112045855a5d7dea8078))
- xdai gas price ([#457](https://github.com/RequestNetwork/requestNetwork/issues/457)) ([8f0822d](https://github.com/RequestNetwork/requestNetwork/commit/8f0822de91cb2d9f617fa94c4d11dcd9adf806b2))

# [0.26.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.26.0) (2021-06-22)

### Bug Fixes

- invoice total types + upgrade ethers ([#514](https://github.com/RequestNetwork/requestNetwork/issues/514)) ([c2b98b2](https://github.com/RequestNetwork/requestNetwork/commit/c2b98b2bd3c93f063f340d58c6b95ad026fd9519))

### Features

- increase XDaiFixedProvider prices ([#523](https://github.com/RequestNetwork/requestNetwork/issues/523)) ([eeca1e7](https://github.com/RequestNetwork/requestNetwork/commit/eeca1e7657e74579da66112045855a5d7dea8078))
- xdai gas price ([#457](https://github.com/RequestNetwork/requestNetwork/issues/457)) ([8f0822d](https://github.com/RequestNetwork/requestNetwork/commit/8f0822de91cb2d9f617fa94c4d11dcd9adf806b2))

# [0.25.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.25.0) (2021-05-12)

### Features

- xdai gas price ([#457](https://github.com/RequestNetwork/requestNetwork/issues/457)) ([8f0822d](https://github.com/RequestNetwork/requestNetwork/commit/8f0822de91cb2d9f617fa94c4d11dcd9adf806b2))

# [0.24.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.24.0) (2021-04-19)

### Features

- xdai gas price ([#457](https://github.com/RequestNetwork/requestNetwork/issues/457)) ([8f0822d](https://github.com/RequestNetwork/requestNetwork/commit/8f0822de91cb2d9f617fa94c4d11dcd9adf806b2))

# [0.23.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.23.0) (2021-03-25)

### Features

- xdai gas price ([#457](https://github.com/RequestNetwork/requestNetwork/issues/457)) ([8f0822d](https://github.com/RequestNetwork/requestNetwork/commit/8f0822de91cb2d9f617fa94c4d11dcd9adf806b2))

## [0.22.5](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.22.5) (2021-03-15)

**Note:** Version bump only for package @huma-shan/ethereum-storage

## [0.22.4](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.22.4) (2021-03-03)

**Note:** Version bump only for package @huma-shan/ethereum-storage

## [0.22.3](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.22.3) (2021-02-22)

**Note:** Version bump only for package @huma-shan/ethereum-storage

## [0.22.2](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.22.2) (2020-12-22)

**Note:** Version bump only for package @huma-shan/ethereum-storage

## [0.22.1](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.22.0...@huma-shan/ethereum-storage@0.22.1) (2020-12-21)

**Note:** Version bump only for package @huma-shan/ethereum-storage

# [0.22.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.22.0) (2020-12-02)

# 0.26.0 (2020-10-14)

### Bug Fixes

- ipfs manager read() decode from base64 before checking the size ([#314](https://github.com/RequestNetwork/requestNetwork/issues/314)) ([4b41eb7](https://github.com/RequestNetwork/requestNetwork/commit/4b41eb7271d0b7a2b7711915d5a3125063118f16))
- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

### Features

- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.21.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.21.0) (2020-11-12)

# 0.26.0 (2020-10-14)

### Bug Fixes

- ipfs manager read() decode from base64 before checking the size ([#314](https://github.com/RequestNetwork/requestNetwork/issues/314)) ([4b41eb7](https://github.com/RequestNetwork/requestNetwork/commit/4b41eb7271d0b7a2b7711915d5a3125063118f16))
- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

### Features

- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.20.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.20.0) (2020-11-05)

# 0.26.0 (2020-10-14)

### Bug Fixes

- ipfs manager read() decode from base64 before checking the size ([#314](https://github.com/RequestNetwork/requestNetwork/issues/314)) ([4b41eb7](https://github.com/RequestNetwork/requestNetwork/commit/4b41eb7271d0b7a2b7711915d5a3125063118f16))
- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

### Features

- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.19.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.19.0) (2020-10-21)

# 0.26.0 (2020-10-14)

### Bug Fixes

- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))
- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- ipfs manager read() decode from base64 before checking the size ([#314](https://github.com/RequestNetwork/requestNetwork/issues/314)) ([4b41eb7](https://github.com/RequestNetwork/requestNetwork/commit/4b41eb7271d0b7a2b7711915d5a3125063118f16))

### Features

- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.18.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.18.0) (2020-10-14)

### Bug Fixes

- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))
- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- ipfs manager read() decode from base64 before checking the size ([#314](https://github.com/RequestNetwork/requestNetwork/issues/314)) ([4b41eb7](https://github.com/RequestNetwork/requestNetwork/commit/4b41eb7271d0b7a2b7711915d5a3125063118f16))

### Features

- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.17.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.17.0) (2020-10-13)

### Bug Fixes

- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))
- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- ipfs manager read() decode from base64 before checking the size ([#314](https://github.com/RequestNetwork/requestNetwork/issues/314)) ([4b41eb7](https://github.com/RequestNetwork/requestNetwork/commit/4b41eb7271d0b7a2b7711915d5a3125063118f16))

### Features

- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.16.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.16.0) (2020-10-09)

### Bug Fixes

- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))
- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- ipfs manager read() decode from base64 before checking the size ([#314](https://github.com/RequestNetwork/requestNetwork/issues/314)) ([4b41eb7](https://github.com/RequestNetwork/requestNetwork/commit/4b41eb7271d0b7a2b7711915d5a3125063118f16))

### Features

- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.15.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.15.0) (2020-09-28)

### Bug Fixes

- ipfs manager read() decode from base64 before checking the size ([#314](https://github.com/RequestNetwork/requestNetwork/issues/314)) ([4b41eb7](https://github.com/RequestNetwork/requestNetwork/commit/4b41eb7271d0b7a2b7711915d5a3125063118f16))
- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

### Features

- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.14.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.14.0) (2020-09-18)

### Bug Fixes

- **ipfs-manager:** use base64 format to support long files ([#304](https://github.com/RequestNetwork/requestNetwork/issues/304)) ([03b0b48](https://github.com/RequestNetwork/requestNetwork/commit/03b0b48bc4f054cbe86d41ba0d306acf009a9fa7))
- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

### Features

- add etherscan gas oracle provider ([#271](https://github.com/RequestNetwork/requestNetwork/issues/271)) ([d5939a1](https://github.com/RequestNetwork/requestNetwork/commit/d5939a1b5c29c690fe80fe4e79c8bd2111fd2969))
- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.13.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.13.0) (2020-09-01)

### Bug Fixes

- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.12.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.12.0) (2020-08-27)

### Bug Fixes

- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))
- high gas related fixes ([#270](https://github.com/RequestNetwork/requestNetwork/issues/270)) ([1471b54](https://github.com/RequestNetwork/requestNetwork/commit/1471b54ae703bc8c14b5bf3a91ad0b9fae661214))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.11.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.11.0) (2020-08-13)

### Bug Fixes

- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.10.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.10.0) (2020-06-29)

### Bug Fixes

- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))
- resubmit stuck transaction with more gas ([#239](https://github.com/RequestNetwork/requestNetwork/issues/239)) ([cf7f92e](https://github.com/RequestNetwork/requestNetwork/commit/cf7f92eb6ee9f0c5da427f37fa5f12f56812a221))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.9.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.9.0) (2020-05-04)

### Bug Fixes

- enhance node synchronization and storing of ignored data ([#205](https://github.com/RequestNetwork/requestNetwork/issues/205)) ([fb6add2](https://github.com/RequestNetwork/requestNetwork/commit/fb6add27b0507e5db3a19682dbcda90274ab19f1))

### Features

- add getIgnoredData() to the ethereum storage ([#206](https://github.com/RequestNetwork/requestNetwork/issues/206)) ([255d2dc](https://github.com/RequestNetwork/requestNetwork/commit/255d2dc22ce0158ba3e6ce6766efece6e4c054cb))

# 0.16.0 (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.8.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.8.0) (2020-04-21)

### Features

- add entry point to request node to get monitoring status ([#191](https://github.com/RequestNetwork/requestNetwork/issues/191)) ([1d9c239](https://github.com/RequestNetwork/requestNetwork/commit/1d9c239f5de5143cd54c3470b42786eff17748f6))

# 0.15.0 (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.7.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.7.0) (2020-04-06)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.6.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.6.0) (2020-03-23)

# 0.13.0 (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

# [0.5.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.5.0) (2020-02-20)

### Bug Fixes

- ts-node configuration ([#138](https://github.com/RequestNetwork/requestNetwork/issues/138)) ([e2180d5](https://github.com/RequestNetwork/requestNetwork/commit/e2180d507bd87116fdeb3466690b6df0c5187976))

### Features

- buffered ethereum storage ([#113](https://github.com/RequestNetwork/requestNetwork/issues/113)) ([fe4ece6](https://github.com/RequestNetwork/requestNetwork/commit/fe4ece6a1768155182be2d3ebb2908501f571912))
- confirmed & pending state in the highest layers ([#119](https://github.com/RequestNetwork/requestNetwork/issues/119)) ([9424dc0](https://github.com/RequestNetwork/requestNetwork/commit/9424dc0c9482208fdbe714f8d29f5deed68711de))
- custom docker ganache image ([#129](https://github.com/RequestNetwork/requestNetwork/issues/129)) ([9ab725d](https://github.com/RequestNetwork/requestNetwork/commit/9ab725dca826ba82152c9f7e0cedc8038c6a17b1))
- persist transaction with custom ethereum provider ([#106](https://github.com/RequestNetwork/requestNetwork/issues/106)) ([61b215f](https://github.com/RequestNetwork/requestNetwork/commit/61b215fb8335d01dfa069d7f7899dd5b33749692))

# 0.12.0 (2020-01-16)

# 0.10.0 (2019-12-04)

## [0.4.8](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.4.8) (2020-01-16)

# 0.10.0 (2019-12-04)

**Note:** Version bump only for package @huma-shan/ethereum-storage

## [0.4.7](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.4.7) (2019-12-18)

# 0.10.0 (2019-12-04)

**Note:** Version bump only for package @huma-shan/ethereum-storage

## [0.4.6](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.5...@huma-shan/ethereum-storage@0.4.6) (2019-12-04)

**Note:** Version bump only for package @huma-shan/ethereum-storage

## [0.4.5](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.4...@huma-shan/ethereum-storage@0.4.5) (2019-11-20)

**Note:** Version bump only for package @huma-shan/ethereum-storage

## [0.4.4](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.3...@huma-shan/ethereum-storage@0.4.4) (2019-10-21)

### Bug Fixes

- **ethereum-storage:** checkEthereumNodeConnection never finishing when Ethereum node not reachable ([6941bd9](https://github.com/RequestNetwork/requestNetwork/commit/6941bd9))
- skip fetching data if no hash was found ([#545](https://github.com/RequestNetwork/requestNetwork/issues/545)) ([9583b8d](https://github.com/RequestNetwork/requestNetwork/commit/9583b8d))

## [0.4.3](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.2...@huma-shan/ethereum-storage@0.4.3) (2019-09-16)

**Note:** Version bump only for package @huma-shan/ethereum-storage

## [0.4.2](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.1...@huma-shan/ethereum-storage@0.4.2) (2019-09-05)

### Bug Fixes

- retry twice to parse data on IPFS during initialisation of data-access ([#497](https://github.com/RequestNetwork/requestNetwork/issues/497)) ([c8d542d](https://github.com/RequestNetwork/requestNetwork/commit/c8d542d))

## [0.4.1](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.4.0...@huma-shan/ethereum-storage@0.4.1) (2019-08-19)

### Performance Improvements

- lower concurrency to 5 and disable DHT on IPFS ([#500](https://github.com/RequestNetwork/requestNetwork/issues/500)) ([cec31e3](https://github.com/RequestNetwork/requestNetwork/commit/cec31e3))

# [0.3.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.1.1-alpha.4...@huma-shan/ethereum-storage@0.3.0) (2019-07-24)

### Bug Fixes

- add retry for getPastEvents web3 API call ([#455](https://github.com/RequestNetwork/requestNetwork/issues/455)) ([0116636](https://github.com/RequestNetwork/requestNetwork/commit/0116636))
- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138))
- Check the ipfs node connection getting an expected file instead of using repo/verify ([#440](https://github.com/RequestNetwork/requestNetwork/issues/440)) ([4d537f7](https://github.com/RequestNetwork/requestNetwork/commit/4d537f7))
- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Ethereum-storage meta, no redundant getPastEvents call ([#312](https://github.com/RequestNetwork/requestNetwork/issues/312)) ([28b5bb1](https://github.com/RequestNetwork/requestNetwork/commit/28b5bb1))
- merge issue in ipfs pin config ([#413](https://github.com/RequestNetwork/requestNetwork/issues/413)) ([3a5654f](https://github.com/RequestNetwork/requestNetwork/commit/3a5654f))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- query returned more than 10000 results error ([#437](https://github.com/RequestNetwork/requestNetwork/issues/437)) ([9621633](https://github.com/RequestNetwork/requestNetwork/commit/9621633))
- remove IPFS swarm connect from node initialization ([#442](https://github.com/RequestNetwork/requestNetwork/issues/442)) ([da11afa](https://github.com/RequestNetwork/requestNetwork/commit/da11afa))
- return ipfs-manager rejections ([#434](https://github.com/RequestNetwork/requestNetwork/issues/434)) ([0bc2b73](https://github.com/RequestNetwork/requestNetwork/commit/0bc2b73))
- skip flaky retry tests ([#427](https://github.com/RequestNetwork/requestNetwork/issues/427)) ([68dd837](https://github.com/RequestNetwork/requestNetwork/commit/68dd837))
- storage endless http request ([#284](https://github.com/RequestNetwork/requestNetwork/issues/284)) ([9adac9a](https://github.com/RequestNetwork/requestNetwork/commit/9adac9a))
- Storage Infura 1000 results error ([#320](https://github.com/RequestNetwork/requestNetwork/issues/320)) ([289a7f2](https://github.com/RequestNetwork/requestNetwork/commit/289a7f2))
- Use getSecondtLastBlockNumber instead of getLastBlockNumber for getBlockNumbersFromTimestamp ([#330](https://github.com/RequestNetwork/requestNetwork/issues/330)) ([58606b7](https://github.com/RequestNetwork/requestNetwork/commit/58606b7))
- use IPFS id endpoint to verify if the server is online ([#450](https://github.com/RequestNetwork/requestNetwork/issues/450)) ([ce56b5f](https://github.com/RequestNetwork/requestNetwork/commit/ce56b5f))
- use keyv to persist Ethereum metadata cache ([#431](https://github.com/RequestNetwork/requestNetwork/issues/431)) ([6a6788b](https://github.com/RequestNetwork/requestNetwork/commit/6a6788b))

### Features

- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f484))
- add IPFS peer for faster IPFS retrieval, and check IPFS and Ethereum nodes connections ([#353](https://github.com/RequestNetwork/requestNetwork/issues/353)) ([47358c2](https://github.com/RequestNetwork/requestNetwork/commit/47358c2))
- add logging interfaces and default logger ([#397](https://github.com/RequestNetwork/requestNetwork/issues/397)) ([f83a716](https://github.com/RequestNetwork/requestNetwork/commit/f83a716))
- add script to configure private IPFS network ([#458](https://github.com/RequestNetwork/requestNetwork/issues/458)) ([4490d2b](https://github.com/RequestNetwork/requestNetwork/commit/4490d2b))
- add tags for successfully retrieved hashes ([#444](https://github.com/RequestNetwork/requestNetwork/issues/444)) ([cfc3eb0](https://github.com/RequestNetwork/requestNetwork/commit/cfc3eb0))
- add the ability to be able to configure the host + port via com… ([#355](https://github.com/RequestNetwork/requestNetwork/issues/355)) ([5b6a6c6](https://github.com/RequestNetwork/requestNetwork/commit/5b6a6c6))
- Add the two new IPFS nodes as known IPFS nodes ([#410](https://github.com/RequestNetwork/requestNetwork/issues/410)) ([b33f2e9](https://github.com/RequestNetwork/requestNetwork/commit/b33f2e9))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- asynchronously pin IPFS files in batches ([#403](https://github.com/RequestNetwork/requestNetwork/issues/403)) ([926c22b](https://github.com/RequestNetwork/requestNetwork/commit/926c22b))
- check if the contracts are deployed and configured ([#360](https://github.com/RequestNetwork/requestNetwork/issues/360)) ([c18bf00](https://github.com/RequestNetwork/requestNetwork/commit/c18bf00))
- class to get Ethereum block information in storage ([#283](https://github.com/RequestNetwork/requestNetwork/issues/283)) ([1454981](https://github.com/RequestNetwork/requestNetwork/commit/1454981))
- configurable ethereum node host and port for smart contract deployment ([#358](https://github.com/RequestNetwork/requestNetwork/issues/358)) ([d7ad242](https://github.com/RequestNetwork/requestNetwork/commit/d7ad242))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- determines gas price automatically on mainnet ([#429](https://github.com/RequestNetwork/requestNetwork/issues/429)) ([3d42c75](https://github.com/RequestNetwork/requestNetwork/commit/3d42c75))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- IPFS retry on error ([#421](https://github.com/RequestNetwork/requestNetwork/issues/421)) ([18d6e6e](https://github.com/RequestNetwork/requestNetwork/commit/18d6e6e))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- pin ipfs data on the node ([#361](https://github.com/RequestNetwork/requestNetwork/issues/361)) ([5830350](https://github.com/RequestNetwork/requestNetwork/commit/5830350))
- Save dataId's Ethereum metadata when append is called ([#352](https://github.com/RequestNetwork/requestNetwork/issues/352)) ([118d197](https://github.com/RequestNetwork/requestNetwork/commit/118d197))
- Storage cache for Ethereum metadata ([#323](https://github.com/RequestNetwork/requestNetwork/issues/323)) ([cb29b8e](https://github.com/RequestNetwork/requestNetwork/commit/cb29b8e))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- upgradable smart contracts ([#337](https://github.com/RequestNetwork/requestNetwork/issues/337)) ([c8cf724](https://github.com/RequestNetwork/requestNetwork/commit/c8cf724))

### Performance Improvements

- add the node ipfs request network at initialization ([#398](https://github.com/RequestNetwork/requestNetwork/issues/398)) ([7e0c25a](https://github.com/RequestNetwork/requestNetwork/commit/7e0c25a))
- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e))

## [0.2.1-alpha.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.1.1-alpha.4...@huma-shan/ethereum-storage@0.2.1-alpha.0) (2019-07-22)

### Bug Fixes

- add retry for getPastEvents web3 API call ([#455](https://github.com/RequestNetwork/requestNetwork/issues/455)) ([0116636](https://github.com/RequestNetwork/requestNetwork/commit/0116636))
- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138))
- Check the ipfs node connection getting an expected file instead of using repo/verify ([#440](https://github.com/RequestNetwork/requestNetwork/issues/440)) ([4d537f7](https://github.com/RequestNetwork/requestNetwork/commit/4d537f7))
- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Ethereum-storage meta, no redundant getPastEvents call ([#312](https://github.com/RequestNetwork/requestNetwork/issues/312)) ([28b5bb1](https://github.com/RequestNetwork/requestNetwork/commit/28b5bb1))
- merge issue in ipfs pin config ([#413](https://github.com/RequestNetwork/requestNetwork/issues/413)) ([3a5654f](https://github.com/RequestNetwork/requestNetwork/commit/3a5654f))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- query returned more than 10000 results error ([#437](https://github.com/RequestNetwork/requestNetwork/issues/437)) ([9621633](https://github.com/RequestNetwork/requestNetwork/commit/9621633))
- remove IPFS swarm connect from node initialization ([#442](https://github.com/RequestNetwork/requestNetwork/issues/442)) ([da11afa](https://github.com/RequestNetwork/requestNetwork/commit/da11afa))
- return ipfs-manager rejections ([#434](https://github.com/RequestNetwork/requestNetwork/issues/434)) ([0bc2b73](https://github.com/RequestNetwork/requestNetwork/commit/0bc2b73))
- skip flaky retry tests ([#427](https://github.com/RequestNetwork/requestNetwork/issues/427)) ([68dd837](https://github.com/RequestNetwork/requestNetwork/commit/68dd837))
- storage endless http request ([#284](https://github.com/RequestNetwork/requestNetwork/issues/284)) ([9adac9a](https://github.com/RequestNetwork/requestNetwork/commit/9adac9a))
- Storage Infura 1000 results error ([#320](https://github.com/RequestNetwork/requestNetwork/issues/320)) ([289a7f2](https://github.com/RequestNetwork/requestNetwork/commit/289a7f2))
- Use getSecondtLastBlockNumber instead of getLastBlockNumber for getBlockNumbersFromTimestamp ([#330](https://github.com/RequestNetwork/requestNetwork/issues/330)) ([58606b7](https://github.com/RequestNetwork/requestNetwork/commit/58606b7))
- use IPFS id endpoint to verify if the server is online ([#450](https://github.com/RequestNetwork/requestNetwork/issues/450)) ([ce56b5f](https://github.com/RequestNetwork/requestNetwork/commit/ce56b5f))
- use keyv to persist Ethereum metadata cache ([#431](https://github.com/RequestNetwork/requestNetwork/issues/431)) ([6a6788b](https://github.com/RequestNetwork/requestNetwork/commit/6a6788b))

### Features

- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f484))
- add IPFS peer for faster IPFS retrieval, and check IPFS and Ethereum nodes connections ([#353](https://github.com/RequestNetwork/requestNetwork/issues/353)) ([47358c2](https://github.com/RequestNetwork/requestNetwork/commit/47358c2))
- add logging interfaces and default logger ([#397](https://github.com/RequestNetwork/requestNetwork/issues/397)) ([f83a716](https://github.com/RequestNetwork/requestNetwork/commit/f83a716))
- add tags for successfully retrieved hashes ([#444](https://github.com/RequestNetwork/requestNetwork/issues/444)) ([cfc3eb0](https://github.com/RequestNetwork/requestNetwork/commit/cfc3eb0))
- add the ability to be able to configure the host + port via com… ([#355](https://github.com/RequestNetwork/requestNetwork/issues/355)) ([5b6a6c6](https://github.com/RequestNetwork/requestNetwork/commit/5b6a6c6))
- Add the two new IPFS nodes as known IPFS nodes ([#410](https://github.com/RequestNetwork/requestNetwork/issues/410)) ([b33f2e9](https://github.com/RequestNetwork/requestNetwork/commit/b33f2e9))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- asynchronously pin IPFS files in batches ([#403](https://github.com/RequestNetwork/requestNetwork/issues/403)) ([926c22b](https://github.com/RequestNetwork/requestNetwork/commit/926c22b))
- check if the contracts are deployed and configured ([#360](https://github.com/RequestNetwork/requestNetwork/issues/360)) ([c18bf00](https://github.com/RequestNetwork/requestNetwork/commit/c18bf00))
- class to get Ethereum block information in storage ([#283](https://github.com/RequestNetwork/requestNetwork/issues/283)) ([1454981](https://github.com/RequestNetwork/requestNetwork/commit/1454981))
- configurable ethereum node host and port for smart contract deployment ([#358](https://github.com/RequestNetwork/requestNetwork/issues/358)) ([d7ad242](https://github.com/RequestNetwork/requestNetwork/commit/d7ad242))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- determines gas price automatically on mainnet ([#429](https://github.com/RequestNetwork/requestNetwork/issues/429)) ([3d42c75](https://github.com/RequestNetwork/requestNetwork/commit/3d42c75))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- IPFS retry on error ([#421](https://github.com/RequestNetwork/requestNetwork/issues/421)) ([18d6e6e](https://github.com/RequestNetwork/requestNetwork/commit/18d6e6e))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- pin ipfs data on the node ([#361](https://github.com/RequestNetwork/requestNetwork/issues/361)) ([5830350](https://github.com/RequestNetwork/requestNetwork/commit/5830350))
- Save dataId's Ethereum metadata when append is called ([#352](https://github.com/RequestNetwork/requestNetwork/issues/352)) ([118d197](https://github.com/RequestNetwork/requestNetwork/commit/118d197))
- Storage cache for Ethereum metadata ([#323](https://github.com/RequestNetwork/requestNetwork/issues/323)) ([cb29b8e](https://github.com/RequestNetwork/requestNetwork/commit/cb29b8e))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- upgradable smart contracts ([#337](https://github.com/RequestNetwork/requestNetwork/issues/337)) ([c8cf724](https://github.com/RequestNetwork/requestNetwork/commit/c8cf724))

### Performance Improvements

- add the node ipfs request network at initialization ([#398](https://github.com/RequestNetwork/requestNetwork/issues/398)) ([7e0c25a](https://github.com/RequestNetwork/requestNetwork/commit/7e0c25a))
- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e))

# [0.2.0](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.1.1-alpha.4...@huma-shan/ethereum-storage@0.2.0) (2019-06-06)

### Bug Fixes

- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138))
- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Ethereum-storage meta, no redundant getPastEvents call ([#312](https://github.com/RequestNetwork/requestNetwork/issues/312)) ([28b5bb1](https://github.com/RequestNetwork/requestNetwork/commit/28b5bb1))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- storage endless http request ([#284](https://github.com/RequestNetwork/requestNetwork/issues/284)) ([9adac9a](https://github.com/RequestNetwork/requestNetwork/commit/9adac9a))
- Storage Infura 1000 results error ([#320](https://github.com/RequestNetwork/requestNetwork/issues/320)) ([289a7f2](https://github.com/RequestNetwork/requestNetwork/commit/289a7f2))
- Use getSecondtLastBlockNumber instead of getLastBlockNumber for getBlockNumbersFromTimestamp ([#330](https://github.com/RequestNetwork/requestNetwork/issues/330)) ([58606b7](https://github.com/RequestNetwork/requestNetwork/commit/58606b7))

### Features

- add concurrent readMany to storage layer ([#363](https://github.com/RequestNetwork/requestNetwork/issues/363)) ([db3f484](https://github.com/RequestNetwork/requestNetwork/commit/db3f484))
- add IPFS peer for faster IPFS retrieval, and check IPFS and Ethereum nodes connections ([#353](https://github.com/RequestNetwork/requestNetwork/issues/353)) ([47358c2](https://github.com/RequestNetwork/requestNetwork/commit/47358c2))
- add logging interfaces and default logger ([#397](https://github.com/RequestNetwork/requestNetwork/issues/397)) ([f83a716](https://github.com/RequestNetwork/requestNetwork/commit/f83a716))
- add the ability to be able to configure the host + port via com… ([#355](https://github.com/RequestNetwork/requestNetwork/issues/355)) ([5b6a6c6](https://github.com/RequestNetwork/requestNetwork/commit/5b6a6c6))
- Add the two new IPFS nodes as known IPFS nodes ([#410](https://github.com/RequestNetwork/requestNetwork/issues/410)) ([b33f2e9](https://github.com/RequestNetwork/requestNetwork/commit/b33f2e9))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- asynchronously pin IPFS files in batches ([#403](https://github.com/RequestNetwork/requestNetwork/issues/403)) ([926c22b](https://github.com/RequestNetwork/requestNetwork/commit/926c22b))
- check if the contracts are deployed and configured ([#360](https://github.com/RequestNetwork/requestNetwork/issues/360)) ([c18bf00](https://github.com/RequestNetwork/requestNetwork/commit/c18bf00))
- class to get Ethereum block information in storage ([#283](https://github.com/RequestNetwork/requestNetwork/issues/283)) ([1454981](https://github.com/RequestNetwork/requestNetwork/commit/1454981))
- configurable ethereum node host and port for smart contract deployment ([#358](https://github.com/RequestNetwork/requestNetwork/issues/358)) ([d7ad242](https://github.com/RequestNetwork/requestNetwork/commit/d7ad242))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- pin ipfs data on the node ([#361](https://github.com/RequestNetwork/requestNetwork/issues/361)) ([5830350](https://github.com/RequestNetwork/requestNetwork/commit/5830350))
- Save dataId's Ethereum metadata when append is called ([#352](https://github.com/RequestNetwork/requestNetwork/issues/352)) ([118d197](https://github.com/RequestNetwork/requestNetwork/commit/118d197))
- Storage cache for Ethereum metadata ([#323](https://github.com/RequestNetwork/requestNetwork/issues/323)) ([cb29b8e](https://github.com/RequestNetwork/requestNetwork/commit/cb29b8e))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- upgradable smart contracts ([#337](https://github.com/RequestNetwork/requestNetwork/issues/337)) ([c8cf724](https://github.com/RequestNetwork/requestNetwork/commit/c8cf724))

### Performance Improvements

- add the node ipfs request network at initialization ([#398](https://github.com/RequestNetwork/requestNetwork/issues/398)) ([7e0c25a](https://github.com/RequestNetwork/requestNetwork/commit/7e0c25a))
- faster initialization by factoring stat and read IPFS calls in one call ([#401](https://github.com/RequestNetwork/requestNetwork/issues/401)) ([184c14e](https://github.com/RequestNetwork/requestNetwork/commit/184c14e))

## [0.1.1-alpha.12](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.1.1-alpha.4...@huma-shan/ethereum-storage@0.1.1-alpha.12) (2019-05-21)

### Bug Fixes

- block not found error in function addHashAndSizeToEthereum of storage ([#349](https://github.com/RequestNetwork/requestNetwork/issues/349)) ([1fea138](https://github.com/RequestNetwork/requestNetwork/commit/1fea138))
- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Ethereum-storage meta, no redundant getPastEvents call ([#312](https://github.com/RequestNetwork/requestNetwork/issues/312)) ([28b5bb1](https://github.com/RequestNetwork/requestNetwork/commit/28b5bb1))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- storage endless http request ([#284](https://github.com/RequestNetwork/requestNetwork/issues/284)) ([9adac9a](https://github.com/RequestNetwork/requestNetwork/commit/9adac9a))
- Storage Infura 1000 results error ([#320](https://github.com/RequestNetwork/requestNetwork/issues/320)) ([289a7f2](https://github.com/RequestNetwork/requestNetwork/commit/289a7f2))
- Use getSecondtLastBlockNumber instead of getLastBlockNumber for getBlockNumbersFromTimestamp ([#330](https://github.com/RequestNetwork/requestNetwork/issues/330)) ([58606b7](https://github.com/RequestNetwork/requestNetwork/commit/58606b7))

### Features

- add the ability to be able to configure the host + port via com… ([#355](https://github.com/RequestNetwork/requestNetwork/issues/355)) ([5b6a6c6](https://github.com/RequestNetwork/requestNetwork/commit/5b6a6c6))
- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- class to get Ethereum block information in storage ([#283](https://github.com/RequestNetwork/requestNetwork/issues/283)) ([1454981](https://github.com/RequestNetwork/requestNetwork/commit/1454981))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- Save dataId's Ethereum metadata when append is called ([#352](https://github.com/RequestNetwork/requestNetwork/issues/352)) ([118d197](https://github.com/RequestNetwork/requestNetwork/commit/118d197))
- Storage cache for Ethereum metadata ([#323](https://github.com/RequestNetwork/requestNetwork/issues/323)) ([cb29b8e](https://github.com/RequestNetwork/requestNetwork/commit/cb29b8e))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
- upgradable smart contracts ([#337](https://github.com/RequestNetwork/requestNetwork/issues/337)) ([c8cf724](https://github.com/RequestNetwork/requestNetwork/commit/c8cf724))

## [0.1.1-alpha.11](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.1.1-alpha.4...@huma-shan/ethereum-storage@0.1.1-alpha.11) (2019-05-17)

### Bug Fixes

- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Ethereum-storage meta, no redundant getPastEvents call ([#312](https://github.com/RequestNetwork/requestNetwork/issues/312)) ([28b5bb1](https://github.com/RequestNetwork/requestNetwork/commit/28b5bb1))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- storage endless http request ([#284](https://github.com/RequestNetwork/requestNetwork/issues/284)) ([9adac9a](https://github.com/RequestNetwork/requestNetwork/commit/9adac9a))
- Storage Infura 1000 results error ([#320](https://github.com/RequestNetwork/requestNetwork/issues/320)) ([289a7f2](https://github.com/RequestNetwork/requestNetwork/commit/289a7f2))
- Use getSecondtLastBlockNumber instead of getLastBlockNumber for getBlockNumbersFromTimestamp ([#330](https://github.com/RequestNetwork/requestNetwork/issues/330)) ([58606b7](https://github.com/RequestNetwork/requestNetwork/commit/58606b7))

### Features

- additional node logs to show progress and logLevel option ([#338](https://github.com/RequestNetwork/requestNetwork/issues/338)) ([38559f4](https://github.com/RequestNetwork/requestNetwork/commit/38559f4))
- class to get Ethereum block information in storage ([#283](https://github.com/RequestNetwork/requestNetwork/issues/283)) ([1454981](https://github.com/RequestNetwork/requestNetwork/commit/1454981))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- implements cached-throttle utility ([#348](https://github.com/RequestNetwork/requestNetwork/issues/348)) ([01c9885](https://github.com/RequestNetwork/requestNetwork/commit/01c9885))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- Storage cache for Ethereum metadata ([#323](https://github.com/RequestNetwork/requestNetwork/issues/323)) ([cb29b8e](https://github.com/RequestNetwork/requestNetwork/commit/cb29b8e))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))

## [0.1.1-alpha.10](https://github.com/RequestNetwork/requestNetwork/compare/@huma-shan/ethereum-storage@0.1.1-alpha.4...@huma-shan/ethereum-storage@0.1.1-alpha.10) (2019-05-10)

### Bug Fixes

- Data access synchronization not parallelized ([#333](https://github.com/RequestNetwork/requestNetwork/issues/333)) ([cd63a22](https://github.com/RequestNetwork/requestNetwork/commit/cd63a22))
- Error block XXX not found ([#306](https://github.com/RequestNetwork/requestNetwork/issues/306)) ([6c9c59b](https://github.com/RequestNetwork/requestNetwork/commit/6c9c59b))
- Ethereum-storage meta, no redundant getPastEvents call ([#312](https://github.com/RequestNetwork/requestNetwork/issues/312)) ([28b5bb1](https://github.com/RequestNetwork/requestNetwork/commit/28b5bb1))
- Misc. minor fixes on the request node ([#334](https://github.com/RequestNetwork/requestNetwork/issues/334)) ([8fcf53d](https://github.com/RequestNetwork/requestNetwork/commit/8fcf53d))
- storage endless http request ([#284](https://github.com/RequestNetwork/requestNetwork/issues/284)) ([9adac9a](https://github.com/RequestNetwork/requestNetwork/commit/9adac9a))
- Storage Infura 1000 results error ([#320](https://github.com/RequestNetwork/requestNetwork/issues/320)) ([289a7f2](https://github.com/RequestNetwork/requestNetwork/commit/289a7f2))
- Use getSecondtLastBlockNumber instead of getLastBlockNumber for getBlockNumbersFromTimestamp ([#330](https://github.com/RequestNetwork/requestNetwork/issues/330)) ([58606b7](https://github.com/RequestNetwork/requestNetwork/commit/58606b7))

### Features

- class to get Ethereum block information in storage ([#283](https://github.com/RequestNetwork/requestNetwork/issues/283)) ([1454981](https://github.com/RequestNetwork/requestNetwork/commit/1454981))
- Create usable Dockerfile ([#278](https://github.com/RequestNetwork/requestNetwork/issues/278)) ([6c83f28](https://github.com/RequestNetwork/requestNetwork/commit/6c83f28))
- Migrate the synchronization from storage to data-access ([#292](https://github.com/RequestNetwork/requestNetwork/issues/292)) ([3d04d0d](https://github.com/RequestNetwork/requestNetwork/commit/3d04d0d))
- Storage cache for Ethereum metadata ([#323](https://github.com/RequestNetwork/requestNetwork/issues/323)) ([cb29b8e](https://github.com/RequestNetwork/requestNetwork/commit/cb29b8e))
- Storage get data from timestamp boundaries ([#291](https://github.com/RequestNetwork/requestNetwork/issues/291)) ([e9554cd](https://github.com/RequestNetwork/requestNetwork/commit/e9554cd))
