import mongoose from 'mongoose';

const nftSchema = new mongoose.Schema({
  tokenId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collectionName: {
    type: String,
    required: true
  },
  attributes: [{
    trait_type: String,
    value: String
  }],
  price: {
    type: Number,
    required: false
  },
  currency: {
    type: String,
    required: false,
    default: 'ETH'
  },
  isListed: {
    type: Boolean,
    default: false
  },
  metadataURI: {
    type: String,
    required: false
  },
  contractAddress: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('NFT', nftSchema);