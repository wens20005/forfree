import express from 'express';
import { getTransactions, getTransactionByHash, getTransactionsByUser, createTransaction, updateTransaction } from '../controllers/transactionController.js';

const router = express.Router();

// Get all transactions
router.get('/', getTransactions);

// Get transaction by hash
router.get('/:hash', getTransactionByHash);

// Get transactions by user address
router.get('/user/:address', getTransactionsByUser);

// Create new transaction
router.post('/', createTransaction);

// Update transaction
router.patch('/:hash', updateTransaction);

export default router;