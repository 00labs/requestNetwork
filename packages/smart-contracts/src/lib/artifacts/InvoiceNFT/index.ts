import { ContractArtifact } from '../../ContractArtifact';

import { abi as ABI_0_1_0 } from './0.1.0.json';
// @ts-ignore Cannot find module
import type { InvoiceNFT } from '../../../types/InvoiceNFT';

export const invoiceNFTArtifact = new ContractArtifact<InvoiceNFT>(
  {
    '0.1.0': {
      abi: ABI_0_1_0,
      deployment: {
        private: {
          address: '0x2e335F247E91caa168c64b63104C4475b2af3942',
          creationBlockNumber: 0,
        },
        goerli: {
          address: '0x9aEBB4B8abf7afC96dC00f707F766499C5EbeDF1',
          creationBlockNumber: 7956654,
        },
        matic: {
          address: '0xf98b8a94edbc9628b7b2141465980f2c3acab23f',
          creationBlockNumber: 36487297,
        },
      },
    },
  },
  '0.1.0',
);
