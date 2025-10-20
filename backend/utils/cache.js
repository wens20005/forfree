import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

// Create Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

// Connect to Redis
redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

redisClient.connect().catch(console.error);

// Function to set cache
export const setCache = async (key, value, expiration = 3600) => {
  try {
    await redisClient.setEx(key, expiration, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
};

// Function to get cache
export const getCache = async (key) => {
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error getting cache:', error);
    return null;
  }
};

// Function to delete cache
export const deleteCache = async (key) => {
  try {
    await redisClient.del(key);
  } catch (error) {
    console.error('Error deleting cache:', error);
  }
};

// Function to clear all cache
export const clearCache = async () => {
  try {
    await redisClient.flushAll();
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};

export default redisClient;