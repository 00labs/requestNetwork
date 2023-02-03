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
            address: '0x2e335F247E91caa168c64b63104C4475b2af3942',
            creationBlockNumber: 0,
          },
          goerli: {
            address: '0x2E8045D885e9e4F339122304D9e591c9E1c5a2Af',
            creationBlockNumber: 8427439,
          },
        },
      },
    },
    '0.1.0',
  );
