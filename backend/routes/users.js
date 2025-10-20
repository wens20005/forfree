import express from 'express';
import { getUsers, getUserByWallet, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Get all users
router.get('/', getUsers);

// Get user by wallet address
router.get('/:walletAddress', getUserByWallet);

// Create new user
router.post('/', createUser);

// Update user
router.patch('/:walletAddress', updateUser);

// Delete user
router.delete('/:walletAddress', deleteUser);

export default router;