import { HardhatRuntimeEnvironment } from 'hardhat/types';

export async function deployInvoiceNFT(hre: HardhatRuntimeEnvironment) {
  try {
    const [deployer] = await hre.ethers.getSigners();
    const InvoiceNFT = await hre.ethers.getContractFactory('InvoiceNFT', deployer);
    const invoiceNFT = await InvoiceNFT.deploy('Request NFT', 'RNFT', { gasPrice: 40000000000 });
    await invoiceNFT.deployed();
    console.log('InvoiceNFT Contract deployed: ' + invoiceNFT.address);
    const mintRole = await invoiceNFT.MINTER_ROLE();
    await invoiceNFT.grantRole(mintRole, deployer.address, { gasPrice: 40000000000 });
    console.log(`deployer ${deployer.address} has mint role of InvoiceNFT`);
  } catch (e) {
    console.error(e);
  }
}
