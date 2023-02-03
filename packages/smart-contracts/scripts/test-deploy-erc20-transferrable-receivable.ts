import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { deployOne } from './deploy-one';

export async function deployERC20TransferrableReceivable(
  args: any,
  hre: HardhatRuntimeEnvironment,
  mainPaymentAddresses: any,
) {
  // Deploy ERC20 Transferrable Receivable
  const { address: ERC20TransferrableReceivableAddress } = await deployOne(
    args,
    hre,
    'ERC20TransferrableReceivable',
    {
      constructorArguments: [
        'Request Transferrable Receivable',
        'RReceivable',
        mainPaymentAddresses.ERC20FeeProxyAddress,
      ],
    },
  );

  console.log(
    `ERC20TransferrableReceivable Contract deployed: ${ERC20TransferrableReceivableAddress}`,
  );
}
