const express = require('express');
const router = express.Router();

// Mock data for demonstration
let nfts = [
  { id: 1, tokenId: 1, owner: '0x1234...5678', metadataURI: 'https://example.com/nft1' },
  { id: 2, tokenId: 2, owner: '0x8765...4321', metadataURI: 'https://example.com/nft2' }
];

// Get all NFTs
router.get('/', (req, res) => {
  res.json(nfts);
});

// Get NFT by ID
router.get('/:id', (req, res) => {
  const nft = nfts.find(n => n.id == req.params.id);
  if (nft) {
    res.json(nft);
  } else {
    res.status(404).json({ message: 'NFT not found' });
  }
});

module.exports = router;