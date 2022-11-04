import { HardhatRuntimeEnvironment } from 'hardhat/types';

export async function deployInvoiceNFT(hre: HardhatRuntimeEnvironment) {
  try {
    const [deployer] = await hre.ethers.getSigners();

    const InvoiceNFT = await hre.ethers.getContractFactory('InvoiceNFT', deployer);
    const invoiceNFT = await InvoiceNFT.deploy('Invoice NFT', 'INFT');
    await invoiceNFT.deployed();

    console.log('InvoiceNFT Contract deployed: ' + invoiceNFT.address);
  } catch (e) {
    console.error(e);
  }
}
