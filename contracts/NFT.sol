// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ForFreeNFT is ERC721, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("ForFreeNFT", "FFNFT") {}

    function mint(address to) external onlyOwner {
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }
}