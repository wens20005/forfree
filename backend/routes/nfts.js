import express from 'express';
import { getNFTs, getNFTById, getNFTsByOwner, createNFT, updateNFT, deleteNFT } from '../controllers/nftController.js';

const router = express.Router();

// Get all NFTs
router.get('/', getNFTs);

// Get NFT by ID
router.get('/:id', getNFTById);

// Get NFTs by owner
router.get('/owner/:ownerId', getNFTsByOwner);

// Create new NFT
router.post('/', createNFT);

// Update NFT
router.patch('/:id', updateNFT);

// Delete NFT
router.delete('/:id', deleteNFT);

export default router;