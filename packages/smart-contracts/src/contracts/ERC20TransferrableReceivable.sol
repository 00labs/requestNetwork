// Contract based on https://docs.openzeppelin.com/contracts/3.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';

contract ERC20TransferrableReceivable is ERC721URIStorage {
  using Counters for Counters.Counter;

  // Counter for uniquely identifying payments
  Counters.Counter private _paymentId;

  // Counter for uniquely identifying receivable tokens
  Counters.Counter private _receivableTokenId;

  struct ReceivableInfo {
    address tokenAddress;
    uint256 amount;
    uint256 balance;
  }
  mapping(uint256 => ReceivableInfo) public receivableInfoMapping;

  // Nested mapping for looking up receivable token given a paymentReference
  // and original payment address
  mapping(bytes32 => uint256) public receivableTokenIdMapping;

  // Helper mappings to lookup all receivable tokens owned by an address
  mapping(address => uint256[]) private _receivableIds;
  mapping(uint256 => uint256) private _receivableIdIndexes;

  address public paymentProxy;

  // Event to declare payments to a receivableTokenId
  event Payment(
    address sender,
    address recipient,
    address paymentProxy,
    uint256 receivableTokenId,
    address tokenAddress,
    uint256 paymentId,
    bytes indexed paymentReference
  );

  // Event to declare a transfer with a reference
  // This event is emitted from a delegatecall to an ERC20FeeProxy contract
  event TransferWithReferenceAndFee(
    address tokenAddress,
    address to,
    uint256 amount,
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
    uint256 receivableTokenId,
    uint256 amount,
    bytes calldata paymentReference,
    uint256 feeAmount,
    address feeAddress
  ) external {
    require(amount != 0, 'Zero amount provided');
    address owner = ownerOf(receivableTokenId);
    _paymentId.increment();

    ReceivableInfo storage receivableInfo = receivableInfoMapping[receivableTokenId];
    address tokenAddress = receivableInfo.tokenAddress;

    (bool status, ) = paymentProxy.delegatecall(
      abi.encodeWithSignature(
        'transferFromWithReferenceAndFee(address,address,uint256,bytes,uint256,address)',
        tokenAddress,
        owner,
        amount,
        paymentReference,
        feeAmount,
        feeAddress
      )
    );
    require(status, 'transferFromWithReferenceAndFee failed');

    receivableInfo.balance += amount;

    emit Payment(
      msg.sender,
      owner,
      paymentProxy,
      receivableTokenId,
      tokenAddress,
      _paymentId.current(),
      paymentReference
    );
  }

  function mint(
    bytes calldata paymentReference,
    uint256 amount,
    address erc20Addr,
    string memory receivableURI
  ) external {
    require(paymentReference.length > 0, 'Zero paymentReference provided');
    require(amount > 0, 'Zero amount provided');
    require(erc20Addr != address(0), 'Zero address provided');
    bytes32 idKey = keccak256(abi.encodePacked(msg.sender, paymentReference));
    require(
      receivableTokenIdMapping[idKey] == 0,
      'Receivable has already been minted for this user and request'
    );
    _receivableTokenId.increment();
    uint256 currentReceivableTokenId = _receivableTokenId.current();

    _mint(msg.sender, currentReceivableTokenId);
    receivableTokenIdMapping[idKey] = currentReceivableTokenId;
    receivableInfoMapping[currentReceivableTokenId] = ReceivableInfo({
      tokenAddress: erc20Addr,
      amount: amount,
      balance: 0
    });
    _setTokenURI(currentReceivableTokenId, receivableURI);
  }

  // Grab all IDS of receivables owned by account
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
