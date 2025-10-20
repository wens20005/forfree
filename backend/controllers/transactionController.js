import Transaction from '../models/Transaction.js';

// Get all transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('nft');
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get transaction by hash
export const getTransactionByHash = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ transactionHash: req.params.hash }).populate('nft');
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get transactions by user address
export const getTransactionsByUser = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      $or: [{ from: req.params.address }, { to: req.params.address }]
    }).populate('nft');
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new transaction
export const createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    const savedTransaction = await transaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update transaction
export const updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findOneAndUpdate(
      { transactionHash: req.params.hash },
      req.body,
      { new: true }
    ).populate('nft');
    if (!updatedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};