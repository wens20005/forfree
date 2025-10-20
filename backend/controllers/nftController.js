import NFT from '../models/NFT.js';

// Get all NFTs
export const getNFTs = async (req, res) => {
  try {
    const nfts = await NFT.find().populate('owner');
    res.status(200).json(nfts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get NFT by ID
export const getNFTById = async (req, res) => {
  try {
    const nft = await NFT.findById(req.params.id).populate('owner');
    if (!nft) {
      return res.status(404).json({ message: 'NFT not found' });
    }
    res.status(200).json(nft);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get NFTs by owner
export const getNFTsByOwner = async (req, res) => {
  try {
    const nfts = await NFT.find({ owner: req.params.ownerId }).populate('owner');
    res.status(200).json(nfts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new NFT
export const createNFT = async (req, res) => {
  try {
    const nft = new NFT(req.body);
    const savedNFT = await nft.save();
    res.status(201).json(savedNFT);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update NFT
export const updateNFT = async (req, res) => {
  try {
    const updatedNFT = await NFT.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('owner');
    if (!updatedNFT) {
      return res.status(404).json({ message: 'NFT not found' });
    }
    res.status(200).json(updatedNFT);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete NFT
export const deleteNFT = async (req, res) => {
  try {
    const deletedNFT = await NFT.findByIdAndDelete(req.params.id);
    if (!deletedNFT) {
      return res.status(404).json({ message: 'NFT not found' });
    }
    res.status(200).json({ message: 'NFT deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};