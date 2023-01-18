import { HardhatRuntimeEnvironment } from 'hardhat/types';

export async function deployERC20TransferrableReceivable(hre: HardhatRuntimeEnvironment) {
  try {
    const [deployer] = await hre.ethers.getSigners();
    const ERC20TransferrableReceivable = await hre.ethers.getContractFactory(
      'ERC20TransferrableReceivable',
      deployer,
    );
    const erc20TransferrableReceivable = await ERC20TransferrableReceivable.deploy(
      'Request Transferrable Receivable',
      'RReceivable',
      {
        gasPrice: 40000000000,
      },
    );
    await erc20TransferrableReceivable.deployed();
    console.log(
      'ERC20TransferrableReceivable Contract deployed: ' + erc20TransferrableReceivable.address,
    );
  } catch (e) {
    console.error(e);
  }
}
