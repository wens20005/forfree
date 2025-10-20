import React, { useContext, useEffect, useState } from 'react';
import { Web3Context } from '../Web3Provider';
import NFTGallery from '../components/NFTGallery';
import TokenTracker from '../components/TokenTracker';
import SmartContractInteraction from '../components/SmartContractInteraction';
import AnalyticsDashboard from '../components/AnalyticsDashboard';

const Dashboard = () => {
  const { account, balance } = useContext(Web3Context);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // In a real app, this would fetch user data from the backend
    if (account) {
      setUser({
        walletAddress: account,
        username: `User ${account.substring(0, 6)}`
      });
    }
  }, [account]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {user ? (
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Welcome, {user.username}</h2>
          <p>Wallet Address: {account}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      ) : (
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <p>Please connect your wallet to view dashboard</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <NFTGallery account={account} />
        <TokenTracker account={account} />
      </div>
      
      <div className="mt-8">
        <SmartContractInteraction account={account} />
      </div>
      
      <div className="mt-8">
        <AnalyticsDashboard account={account} />
      </div>
    </div>
  );
};

export default Dashboard;