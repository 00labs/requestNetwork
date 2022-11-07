import { HardhatRuntimeEnvironment } from 'hardhat/types';

// Deploys, set up the contracts
export async function deployInvoiceNFT(hre: HardhatRuntimeEnvironment) {
  try {
    const [deployer] = await hre.ethers.getSigners();

    // Deploy the contract InvoiceNFT
    const InvoiceNFT__factory = await hre.ethers.getContractFactory('InvoiceNFT', deployer);
    const InvoiceNFT = await InvoiceNFT__factory.deploy();
    console.log('InvoiceNFT Contract deployed: ' + InvoiceNFT.address);

    // ----------------------------------
    console.log('Contracts deployed');
    console.log(`
        InvoiceNFT:       ${InvoiceNFT.address}
    `);
  } catch (e) {
    console.error(e);
  }
}
