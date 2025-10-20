const express = require('express');
const router = express.Router();

// Mock data for demonstration
let users = [
  { id: 1, walletAddress: '0x1234...5678', username: 'User1', createdAt: '2023-01-01' },
  { id: 2, walletAddress: '0x8765...4321', username: 'User2', createdAt: '2023-01-02' }
];

// Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Get user by wallet address
router.get('/:walletAddress', (req, res) => {
  const user = users.find(u => u.walletAddress === req.params.walletAddress);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Create new user
router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;