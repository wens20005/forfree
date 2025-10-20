import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  transactionHash: {
    type: String,
    required: true,
    unique: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true,
    default: 'ETH'
  },
  nft: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NFT',
    required: false
  },
  type: {
    type: String,
    required: true,
    enum: ['transfer', 'mint', 'purchase', 'sale']
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'success', 'failed'],
    default: 'pending'
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Transaction', transactionSchema);