// Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract InvoiceNFT is ERC721URIStorage, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    using SafeERC20 for IERC20;
    using Counters for Counters.Counter;
    Counters.Counter private _paymentId;

    // ERC20 that one InvoiceNFT is paid in
    mapping(uint256 => address) public assetToken;

    mapping(address => uint256[]) private _nftTokenIds;
    mapping(uint256 => uint256) private _tokenIdIndexes;

    event Payment(
        address sender,
        address recipient,
        uint256 tokenId,
        address assetAddress,
        uint256 amount,
        uint256 paymentId,
        bytes indexed paymentReference
    );

    error zeroAddressProvided(); // 0x5ff75ab0
    error tokenIdAlreadyExists();
    error zeroAmountProvided(); // 0x71799f2a
    error noAssetToken();

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function payOwner(
        uint256 tokenId,
        uint256 amount,
        bytes calldata paymentReference
    ) external {
        if (amount == 0) revert zeroAmountProvided();
        address owner = ownerOf(tokenId);
        _paymentId.increment();
        address assetAddress = assetToken[tokenId];
        IERC20(assetToken[tokenId]).safeTransferFrom(msg.sender, owner, amount);

        emit Payment(
            msg.sender,
            owner,
            tokenId,
            assetAddress,
            amount,
            _paymentId.current(),
            paymentReference
        );
    }

    function mint(
        address recipient,
        uint256 tokenId,
        address erc20Addr,
        string memory tokenURI
    ) external onlyRole(MINTER_ROLE) {
        if (recipient == address(0) || erc20Addr == address(0)) revert zeroAddressProvided();
        if (_exists(tokenId)) revert tokenIdAlreadyExists();

        _mint(recipient, tokenId);
        assetToken[tokenId] = erc20Addr;
        _setTokenURI(tokenId, tokenURI);
    }

    function getIds(address account) external view returns (uint256[] memory) {
        return _nftTokenIds[account];
    }

    function getTokenIdIndex(uint256 tokenId) external view returns (uint256) {
        return _tokenIdIndexes[tokenId];
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override {
        if (from != address(0)) {
            uint256 index = _tokenIdIndexes[tokenId];
            if (index > 0) {
                index = index - 1;
                uint256[] storage tokenIds = _nftTokenIds[from];
                uint256 len = tokenIds.length;
                if (index < len && tokenIds[index] > 0) {
                    if (index < len - 1) {
                        tokenIds[index] = tokenIds[len - 1];
                        _tokenIdIndexes[tokenIds[len - 1]] = index + 1;
                    }
                    tokenIds.pop();
                }
            }
        }
        if (to != address(0)) {
            uint256[] storage tokenIds = _nftTokenIds[to];
            tokenIds.push(tokenId);
            _tokenIdIndexes[tokenId] = tokenIds.length;
        }
    }
}
