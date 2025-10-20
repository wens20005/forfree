const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
    tokenId: { type: Number, required: true, unique: true },
    owner: { type: String, required: true },
    metadataURI: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NFT', nftSchema);