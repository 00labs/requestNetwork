// Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';

contract InvoiceNFT is ERC721URIStorage, Ownable {
  using SafeERC20 for IERC20;
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  Counters.Counter private _paymentId;

  mapping(address => uint256[]) private _nftTokenIds;

  event Mint(address recipient, string tokenURI);
  event NFTGenerated(address recipient, uint256 tokenId);
  event SetURI(uint256 tokenId, string tokenURI);
  event Payment(
    address sender,
    address recipient,
    address assetAddress,
    uint256 amount,
    uint256 tokenId,
    uint256 paymentId
  );

  constructor() ERC721('InvoiceNFT', 'HumaNFT') {}

  function getCurrentTokenId() external view returns (uint256) {
    return _tokenIds.current();
  }

  function payOwner(
    address _tokenAddress,
    uint256 tokenId,
    uint256 amount
  ) external {
    address payee = ownerOf(tokenId);
    _paymentId.increment();

    IERC20(_tokenAddress).safeTransferFrom(msg.sender, payee, amount);

    emit Payment(msg.sender, payee, _tokenAddress, amount, tokenId, _paymentId.current());
  }

  function mintNFT(address recipient, string memory tokenURI) external returns (uint256) {
    emit Mint(recipient, tokenURI);
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, tokenURI);

    emit NFTGenerated(recipient, newItemId);
    return newItemId;
  }

  function setTokenURI(uint256 tokenId, string memory uri) external {
    emit SetURI(tokenId, uri);
    _setTokenURI(tokenId, uri);
  }

  function getNFTIds(address account) external view returns (uint256[] memory) {
    return _nftTokenIds[account];
  }
}
