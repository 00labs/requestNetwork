import { ContractArtifact } from '../../ContractArtifact';

import { abi as ABI_0_1_0 } from './0.1.0.json';
// @ts-ignore Cannot find module
import type { ERC20TransferrableReceivable } from '../../../types/ERC20TransferrableReceivable';

export const erc20TransferrableReceivableArtifact =
  new ContractArtifact<ERC20TransferrableReceivable>(
    {
      '0.1.0': {
        abi: ABI_0_1_0,
        deployment: {
          private: {
            address: '0xF426505ac145abE033fE77C666840063757Be9cd',
            creationBlockNumber: 0,
          },
          goerli: {
            address: '0x4C85f86b88d24d93172f8d1633Ea7eBAe0A37672',
            creationBlockNumber: 8444058,
          },
        },
      },
    },
    '0.1.0',
  );
