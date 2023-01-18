import '@nomiclabs/hardhat-ethers';
import { Signer } from 'ethers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import {
  TestERC20__factory,
  TestERC20,
  ERC20TransferrableReceivable__factory,
  ERC20TransferrableReceivable,
} from '../../src/types';
import { BigNumber as BN } from 'ethers';

const BASE_DECIMAL = BN.from(10).pow(BN.from(18));

describe('contract: ERC20TransferrableReceivable', () => {
  let deployer: Signer;
  let user1: Signer, user1Addr: string;
  let user2: Signer, user2Addr: string;
  let user3: Signer, user3Addr: string;

  let testToken: TestERC20, receivable: ERC20TransferrableReceivable;

  before(async function () {
    [deployer, user1, user2, user3] = await ethers.getSigners();
    user1Addr = await user1.getAddress();
    user2Addr = await user2.getAddress();
    user3Addr = await user3.getAddress();
  });

  beforeEach(async function () {
    testToken = await new TestERC20__factory(deployer).deploy(BN.from(1000000).mul(BASE_DECIMAL));
    receivable = await new ERC20TransferrableReceivable__factory(deployer).deploy(
      'Request Transferrable Receivable',
      'RReceivable',
    );

    await testToken.approve(receivable.address, ethers.constants.MaxUint256);
  });

  async function verifyReceivables(userAddr: string, receivableIds: any) {
    const ids = await receivable.getIds(userAddr);
    expect(ids.toString()).equals(receivableIds.toString());
  }

  async function verifyReceivableIndexes(indexes: any) {
    const res = [];
    for (let i = 1; i <= 5; i++) {
      res[i - 1] = await receivable.getTokenIdIndex(i);
    }
    expect(res.toString()).equals(indexes.toString());
  }

  describe('mint', async function () {
    it('revert with empty recipient', async function () {
      await expect(
        receivable.mint(ethers.constants.AddressZero, 1, testToken.address, '0x01'),
      ).to.be.revertedWith('Zero address provided');
    });

    it('revert with asset address', async function () {
      await expect(
        receivable.mint(user1Addr, 1, ethers.constants.AddressZero, '0x01'),
      ).to.be.revertedWith('Zero address provided');
    });

    it('revert with duplicated tokenId', async function () {
      await receivable.mint(user1Addr, 1, testToken.address, '0x01');
      await expect(receivable.mint(user1Addr, 1, testToken.address, '0x01')).to.be.revertedWith(
        'tokenId already exists',
      );
    });

    it('success', async function () {
      const tokenId = BN.from('0x34cc5f0224acb0544a9d325f8f2160c53130ba4671849472f2a96a35c93a78d6');

      const metadata = ethers.utils.base64.encode('0x01');
      console.log('metadata: ' + metadata);
      await receivable.mint(user1Addr, tokenId, testToken.address, metadata);
      const owner = await receivable.ownerOf(tokenId);
      const md = await receivable.tokenURI(tokenId);
      expect(owner).equals(user1Addr);
      expect(md).equals(metadata);
    });

    it('list receivables', async function () {
      const metadata = ethers.utils.base64.encode('0x01');
      await receivable.mint(user1Addr, 1, testToken.address, metadata);
      await receivable.mint(user1Addr, 2, testToken.address, metadata);
      await receivable.mint(user1Addr, 3, testToken.address, metadata);
      await verifyReceivables(user1Addr, [1, 2, 3]);
      await receivable.mint(user2Addr, 4, testToken.address, metadata);
      await receivable.mint(user2Addr, 5, testToken.address, metadata);
      await verifyReceivables(user2Addr, [4, 5]);
      await receivable.connect(user1).transferFrom(user1Addr, user2Addr, 1);
      await verifyReceivables(user1Addr, [3, 2]);
      await verifyReceivables(user2Addr, [4, 5, 1]);
      await verifyReceivableIndexes([3, 2, 1, 1, 2]);
      await receivable
        .connect(user2)
        ['safeTransferFrom(address,address,uint256)'](user2Addr, user1Addr, 5);
      await verifyReceivables(user1Addr, [3, 2, 5]);
      await verifyReceivables(user2Addr, [4, 1]);
      await verifyReceivableIndexes([2, 2, 1, 1, 3]);
      await receivable.connect(user1).approve(user3Addr, 3);
      await receivable.connect(user1).approve(user3Addr, 2);
      await receivable.connect(user1).approve(user3Addr, 5);
      await receivable.connect(user2).approve(user3Addr, 4);
      await verifyReceivableIndexes([2, 2, 1, 1, 3]);
      await receivable.connect(user3).transferFrom(user1Addr, user3Addr, 5);
      await receivable.connect(user3).transferFrom(user1Addr, user3Addr, 2);
      await receivable.connect(user3).transferFrom(user1Addr, user3Addr, 3);
      await receivable.connect(user3).transferFrom(user2Addr, user3Addr, 4);
      await verifyReceivables(user1Addr, []);
      await verifyReceivables(user2Addr, [1]);
      await verifyReceivables(user3Addr, [5, 2, 3, 4]);
      await verifyReceivableIndexes([1, 2, 3, 4, 1]);
    });
  });

  describe('payOwner', async function () {
    it('revert with zero amount', async function () {
      const tokenId = 1;
      const metadata = ethers.utils.base64.encode('0x01');
      await receivable.mint(await user1.getAddress(), tokenId, testToken.address, metadata);
      await expect(receivable.payOwner(tokenId, 0, '0x01')).to.be.revertedWith(
        'Zero amount provided',
      );
    });

    it('success for original owner', async function () {
      const tokenId = 1;
      const metadata = ethers.utils.base64.encode('0x01');
      const user1Addr = await user1.getAddress();
      await receivable.mint(user1Addr, tokenId, testToken.address, metadata);
      const amount = BN.from(100).mul(BASE_DECIMAL);
      const beforeBal = await testToken.balanceOf(user1Addr);
      await receivable.payOwner(tokenId, amount, '0x02');
      const afterBal = await testToken.balanceOf(user1Addr);
      expect(amount).equals(afterBal.sub(beforeBal));
    });

    it('success for new owner', async function () {
      const tokenId = 1;
      const metadata = ethers.utils.base64.encode('0x01');
      const user1Addr = await user1.getAddress();
      const user2Addr = await user2.getAddress();
      await receivable.mint(user1Addr, tokenId, testToken.address, metadata);
      await receivable.connect(user1).transferFrom(user1Addr, user2Addr, tokenId);

      const amount = BN.from(100).mul(BASE_DECIMAL);
      const beforeBal = await testToken.balanceOf(user2Addr);
      await receivable.payOwner(tokenId, amount, '0x01');
      const afterBal = await testToken.balanceOf(user2Addr);
      expect(amount).equals(afterBal.sub(beforeBal));
    });
  });
});
