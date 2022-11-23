// @ts-nocheck
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const addressBurnerContract = '0xfCb4393e7fAef06fAb01c00d67c1895545AfF3b8';

// Deploys, set up the contracts
export default async function deploy(_args: any, hre: HardhatRuntimeEnvironment) {
  try {
    const [deployer] = await hre.ethers.getSigners();
    console.log(`deployer: ${deployer.address}`);
    console.log(`transaction account: ${await deployer.getTransactionCount('latest')}`);
    console.log(`transaction pending account: ${await deployer.getTransactionCount('pending')}`);
    // Not used, only useful to keep the same addresses as with Truffle
    // const uselessInstance = await (await hre.ethers.getContractFactory('TestERC20')).deploy('100');
    // await uselessInstance.transfer(recipient.address, 10);

    // Deploy the contract RequestHashStorage
    const RequestHashStorage__factory = await hre.ethers.getContractFactory(
      'RequestHashStorage',
      deployer,
    );
    // const RequestHashStorage = await RequestHashStorage__factory.attach(
    //   '0x127eB88afD78EF627cAb2bD07ca5012Cd268a550',
    // );
    const RequestHashStorage = await RequestHashStorage__factory.deploy({
      maxFeePerGas: 300000000000,
      maxPriorityFeePerGas: 10000000000,
      gasPrice: 200000000000,
      // nonce: 129,
    });
    console.log(
      `RequestHashStorage Contract ${
        RequestHashStorage.address
      } is deploying... in tx ${JSON.stringify(RequestHashStorage.deployTransaction)}`,
    );
    await RequestHashStorage.deployed();
    console.log('RequestHashStorage Contract deployed: ' + RequestHashStorage.address);

    // Deploy the contract RequestOpenHashSubmitter
    const RequestOpenHashSubmitter__factory = await hre.ethers.getContractFactory(
      'RequestOpenHashSubmitter',
      deployer,
    );
    const RequestOpenHashSubmitter = await RequestOpenHashSubmitter__factory.deploy(
      RequestHashStorage.address,
      addressBurnerContract,
      {
        maxFeePerGas: 300000000000,
        maxPriorityFeePerGas: 10000000000,
        gasPrice: 200000000000,
        // nonce: 130,
      },
    );
    console.log(
      `RequestOpenHashSubmitter Contract ${
        RequestOpenHashSubmitter.address
      } is deploying... in tx ${JSON.stringify(RequestOpenHashSubmitter.deployTransaction)}`,
    );
    await RequestOpenHashSubmitter.deployed();
    console.log('RequestOpenHashSubmitter Contract deployed: ' + RequestOpenHashSubmitter.address);

    // Whitelist the requestSubmitter in requestHashDeclaration
    const tx = await RequestHashStorage.addWhitelisted(RequestOpenHashSubmitter.address, {
      maxFeePerGas: 300000000000,
      maxPriorityFeePerGas: 10000000000,
      gasPrice: 200000000000,
      // nonce: 168,
      // gasLimit: '100000',
    });
    console.log(
      `requestSubmitter Whitelisted in requestHashDeclaration in tx ${JSON.stringify(tx)}`,
    );
    await tx.wait();

    // ----------------------------------
    console.log('Contracts deployed');
    console.log(`
      RequestHashStorage:       ${RequestHashStorage.address}
      RequestOpenHashSubmitter: ${RequestOpenHashSubmitter.address}
      `);
  } catch (e) {
    console.error(e);
  }
}
