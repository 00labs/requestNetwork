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
            address: '0x5c7bb93ED5CAF047f9ac1850bA2075A580b38457',
            creationBlockNumber: 8364056,
          },
        },
      },
    },
    '0.1.0',
  );
