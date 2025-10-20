import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to ForFree</h1>
      <p className="text-center text-xl mb-12">Professional Web3 platform combining creative web design with secure blockchain integration</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Wallet Integration</h2>
          <p>Connect MetaMask, WalletConnect, and Coinbase Wallet for secure login and transaction authentication.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">NFT Management</h2>
          <p>Showcase NFT collections, crypto assets, and blockchain-based portfolios with real-time updates.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Smart Contracts</h2>
          <p>Interact with Ethereum-compatible smart contracts directly on the website for minting and transfers.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;