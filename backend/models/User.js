const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    walletAddress: { type: String, required: true, unique: true },
    username: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);