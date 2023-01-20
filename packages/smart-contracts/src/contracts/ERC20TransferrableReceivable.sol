// Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';

contract ERC20TransferrableReceivable is ERC721URIStorage {
  using SafeERC20 for IERC20;
  using Counters for Counters.Counter;
  Counters.Counter private _paymentId;

  // ERC20 that one ERC20TransferrableReceivable is paid in
  mapping(uint256 => address) public assetToken;

  mapping(address => uint256[]) private _receivableIds;
  mapping(uint256 => uint256) private _receivableIdIndexes;

  address public paymentProxy;

  event Payment(
    address sender,
    address recipient,
    uint256 receivableId,
    address assetAddress,
    uint256 amount,
    uint256 paymentId,
    bytes indexed paymentReference,
    uint256 feeAmount,
    address feeAddress
  );

  constructor(
    string memory name,
    string memory symbol,
    address _paymentProxyAddress
  ) ERC721(name, symbol) {
    paymentProxy = _paymentProxyAddress;
  }

  function supportsInterface(bytes4 interfaceId) public view override(ERC721) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function payOwner(
    uint256 receivableId,
    uint256 amount,
    bytes calldata paymentReference,
    uint256 feeAmount,
    address feeAddress
  ) external {
    require(amount != 0, 'Zero amount provided');
    address owner = ownerOf(receivableId);
    _paymentId.increment();
    address assetAddress = assetToken[receivableId];

    (bool status, ) = paymentProxy.delegatecall(
      abi.encodeWithSignature(
        'transferFromWithReferenceAndFee(address,address,uint256,bytes,uint256,address)',
        assetAddress,
        owner,
        amount,
        paymentReference,
        feeAmount,
        feeAddress
      )
    );
    require(status, 'transferFromWithReferenceAndFee failed');

    emit Payment(
      msg.sender,
      owner,
      receivableId,
      assetAddress,
      amount,
      _paymentId.current(),
      paymentReference,
      feeAmount,
      feeAddress
    );
  }

  function mint(
    address recipient,
    uint256 receivableId,
    address erc20Addr,
    string memory receivableURI
  ) external {
    require(recipient != address(0) && erc20Addr != address(0), 'Zero address provided');
    require(!_exists(receivableId), 'receivableId already exists');

    _mint(recipient, receivableId);
    assetToken[receivableId] = erc20Addr;
    _setTokenURI(receivableId, receivableURI);
  }

  function getIds(address account) external view returns (uint256[] memory) {
    return _receivableIds[account];
  }

  function getReceivableIdIndex(uint256 receivableId) external view returns (uint256) {
    return _receivableIdIndexes[receivableId];
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 receivableId
  ) internal override {
    if (from != address(0)) {
      uint256 index = _receivableIdIndexes[receivableId];
      if (index > 0) {
        index = index - 1;
        uint256[] storage receivableIds = _receivableIds[from];
        uint256 len = receivableIds.length;
        if (index < len && receivableIds[index] > 0) {
          if (index < len - 1) {
            receivableIds[index] = receivableIds[len - 1];
            _receivableIdIndexes[receivableIds[len - 1]] = index + 1;
          }
          receivableIds.pop();
        }
      }
    }
    if (to != address(0)) {
      uint256[] storage receivableIds = _receivableIds[to];
      receivableIds.push(receivableId);
      _receivableIdIndexes[receivableId] = receivableIds.length;
    }
  }
}
