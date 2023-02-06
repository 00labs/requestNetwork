import '@nomiclabs/hardhat-ethers';
import { BytesLike, Signer } from 'ethers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import {
  TestERC20__factory,
  TestERC20,
  ERC20TransferrableReceivable__factory,
  ERC20TransferrableReceivable,
  ERC20FeeProxy,
  ERC20FeeProxy__factory,
} from '../../src/types';
import { BigNumber as BN } from 'ethers';

const BASE_DECIMAL = BN.from(10).pow(BN.from(18));

describe('contract: ERC20TransferrableReceivable', () => {
  let deployer: Signer;
  let user1: Signer, user1Addr: string;
  let user2: Signer, user2Addr: string;
  let user3: Signer, user3Addr: string;

  let testToken: TestERC20, receivable: ERC20TransferrableReceivable, erc20FeeProxy: ERC20FeeProxy;

  before(async function () {
    [deployer, user1, user2, user3] = await ethers.getSigners();
    user1Addr = await user1.getAddress();
    user2Addr = await user2.getAddress();
    user3Addr = await user3.getAddress();
  });

  beforeEach(async function () {
    testToken = await new TestERC20__factory(deployer).deploy(BN.from(1000000).mul(BASE_DECIMAL));
    erc20FeeProxy = await new ERC20FeeProxy__factory(deployer).deploy();
    receivable = await new ERC20TransferrableReceivable__factory(deployer).deploy(
      'Request Transferrable Receivable',
      'RReceivable',
      erc20FeeProxy.address,
    );

    await testToken.approve(receivable.address, ethers.constants.MaxUint256);
  });

  async function verifyReceivables(userAddr: string, receivableIds: any) {
    const ids = await receivable.getIds(userAddr);
    expect(ids.toString()).to.equals(receivableIds.toString());
  }

  async function verifyReceivableIndexes(indexes: any) {
    const res = [];
    for (let i = 1; i <= 5; i++) {
      res[i - 1] = await receivable.getReceivableIdIndex(i);
    }
    expect(res.toString()).to.equals(indexes.toString());
  }

  describe('mint', async function () {
    it('revert with empty paymentReference', async function () {
      await expect(receivable.mint([], 1, testToken.address, '')).to.be.revertedWith(
        'Zero paymentReference provided',
      );
    });
    it('revert with zero amount', async function () {
      await expect(receivable.mint('0x01', 0, testToken.address, '')).to.be.revertedWith(
        'Zero amount provided',
      );
    });

    it('revert with empty asset address', async function () {
      await expect(receivable.mint('0x01', 1, ethers.constants.AddressZero, '')).to.be.revertedWith(
        'Zero address provided',
      );
    });

    it('revert with duplicated receivableId', async function () {
      await receivable.connect(user1).mint('0x01', 1, testToken.address, '');
      await expect(
        receivable.connect(user1).mint('0x01', 2, testToken.address, ''),
      ).to.be.revertedWith('Receivable has already been minted for this user and request');
    });

    it('success', async function () {
      const receivableId = '0x0134cc5f0224acb0544a9d325f8f2160c53130ba4671849472f2a96a35c93a78d6';
      const metadata = ethers.utils.base64.encode(receivableId);
      const paymentRef = '0x01' as BytesLike;
      await receivable.connect(user1).mint(paymentRef, BASE_DECIMAL, testToken.address, metadata);
      const ids = await receivable.getIds(user1Addr);
      const tokenId = ids[0];
      expect(await receivable.ownerOf(tokenId)).to.equals(user1Addr);
      expect(await receivable.tokenURI(tokenId)).to.equals(metadata);
      const key = ethers.utils.solidityKeccak256(['address', 'bytes'], [user1Addr, paymentRef]);
      expect(await receivable.receivableTokenIdMapping(key)).to.equals(tokenId);
      const info = await receivable.receivableInfoMapping(tokenId);
      expect(info[0]).to.equals(testToken.address);
      expect(info[1]).to.equals(BASE_DECIMAL);
      expect(info[2]).to.equals(0);
    });

    it('list receivables', async function () {
      await receivable.connect(user1).mint('0x01', BASE_DECIMAL, testToken.address, '1');
      await receivable.connect(user1).mint('0x02', BASE_DECIMAL, testToken.address, '2');
      await receivable.connect(user1).mint('0x03', BASE_DECIMAL, testToken.address, '3');
      await verifyReceivables(user1Addr, [1, 2, 3]);
      await receivable.connect(user2).mint('0x04', BASE_DECIMAL, testToken.address, '4');
      await receivable.connect(user2).mint('0x05', BASE_DECIMAL, testToken.address, '5');
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
      const paymentRef = '0x01' as BytesLike;
      await receivable.connect(user1).mint(paymentRef, BASE_DECIMAL, testToken.address, '1');
      const ids = await receivable.getIds(await user1.getAddress());
      const tokenId = ids[0];
      await expect(
        receivable.payOwner(tokenId, 0, paymentRef, 0, ethers.constants.AddressZero),
      ).to.be.revertedWith('Zero amount provided');
    });

    it('revert with "transferFromWithReferenceAndFee failed"', async function () {
      const paymentRef = '0x01' as BytesLike;
      const user1Addr = await user1.getAddress();
      const amount = BN.from(100).mul(BASE_DECIMAL);
      await receivable.connect(user1).mint(paymentRef, amount, testToken.address, '1');
      const ids = await receivable.getIds(user1Addr);
      const tokenId = ids[0];
      const feeAmount = BN.from(10).mul(BASE_DECIMAL);
      await testToken.transfer(await user2.getAddress(), amount);
      await testToken.connect(user2).approve(receivable.address, amount);
      await expect(
        receivable
          .connect(user2)
          .payOwner(tokenId, amount, paymentRef, feeAmount, await user3.getAddress()),
      ).to.be.revertedWith('transferFromWithReferenceAndFee failed');
    });

    it('success for original owner', async function () {
      const paymentRef = '0x01' as BytesLike;
      const user1Addr = await user1.getAddress();
      const amount = BN.from(100).mul(BASE_DECIMAL);
      await receivable.connect(user1).mint(paymentRef, amount, testToken.address, '1');
      const ids = await receivable.getIds(user1Addr);
      const tokenId = ids[0];
      const beforeBal = await testToken.balanceOf(user1Addr);
      await expect(
        receivable.payOwner(tokenId, amount, paymentRef, 0, ethers.constants.AddressZero),
      )
        .to.emit(receivable, 'TransferWithReferenceAndFee')
        .withArgs(
          testToken.address,
          user1Addr,
          amount,
          paymentRef,
          0,
          ethers.constants.AddressZero,
        );
      const afterBal = await testToken.balanceOf(user1Addr);
      expect(amount).to.equals(afterBal.sub(beforeBal));
    });

    it('success for new owner', async function () {
      const paymentRef = '0x01' as BytesLike;
      const user1Addr = await user1.getAddress();
      const user2Addr = await user2.getAddress();
      const user3Addr = await user3.getAddress();
      const amount = BN.from(100).mul(BASE_DECIMAL);
      await receivable.connect(user1).mint(paymentRef, amount, testToken.address, '1');
      const ids = await receivable.getIds(user1Addr);
      const tokenId = ids[0];
      await receivable.connect(user1).transferFrom(user1Addr, user2Addr, tokenId);

      const feeAmount = BN.from(10).mul(BASE_DECIMAL);
      const beforeBal2 = await testToken.balanceOf(user2Addr);
      const beforeBal3 = await testToken.balanceOf(user3Addr);
      await expect(await receivable.payOwner(tokenId, amount, paymentRef, feeAmount, user3Addr))
        .to.emit(receivable, 'TransferWithReferenceAndFee')
        .withArgs(testToken.address, user2Addr, amount, paymentRef, feeAmount, user3Addr);
      const afterBal2 = await testToken.balanceOf(user2Addr);
      const afterBal3 = await testToken.balanceOf(user3Addr);
      expect(amount).to.equals(afterBal2.sub(beforeBal2));
      expect(feeAmount).to.equals(afterBal3.sub(beforeBal3));
    });
  });
});
