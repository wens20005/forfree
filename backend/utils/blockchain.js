import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Web3
const web3 = new Web3(process.env.ETHEREUM_RPC_URL || 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Function to get account balance
export const getAccountBalance = async (address) => {
  try {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
  } catch (error) {
    throw new Error(`Failed to get balance: ${error.message}`);
  }
};

// Function to get transaction details
export const getTransactionDetails = async (txHash) => {
  try {
    const transaction = await web3.eth.getTransaction(txHash);
    return transaction;
  } catch (error) {
    throw new Error(`Failed to get transaction: ${error.message}`);
  }
};

// Function to get block details
export const getBlockDetails = async (blockNumber) => {
  try {
    const block = await web3.eth.getBlock(blockNumber);
    return block;
  } catch (error) {
    throw new Error(`Failed to get block: ${error.message}`);
  }
};

// Function to validate Ethereum address
export const isValidAddress = (address) => {
  return web3.utils.isAddress(address);
};

// Function to get current gas price
export const getGasPrice = async () => {
  try {
    const gasPrice = await web3.eth.getGasPrice();
    return web3.utils.fromWei(gasPrice, 'gwei');
  } catch (error) {
    throw new Error(`Failed to get gas price: ${error.message}`);
  }
};

export default web3;