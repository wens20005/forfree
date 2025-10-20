import React, { useContext, useState } from 'react';
import { Web3Context } from '../Web3Provider';

const Admin = () => {
  const { account } = useContext(Web3Context);
  const [users, setUsers] = useState([]);
  const [nfts, setNfts] = useState([]);

  // In a real app, this would fetch data from the backend
  const fetchUsers = async () => {
    try {
      // Mock data
      setUsers([
        { id: 1, walletAddress: '0x1234...5678', username: 'User1', createdAt: '2023-01-01' },
        { id: 2, walletAddress: '0x8765...4321', username: 'User2', createdAt: '2023-01-02' }
      ]);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchNFTs = async () => {
    try {
      // Mock data
      setNfts([
        { id: 1, tokenId: 1, owner: '0x1234...5678', metadataURI: 'https://example.com/nft1' },
        { id: 2, tokenId: 2, owner: '0x8765...4321', metadataURI: 'https://example.com/nft2' }
      ]);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="mb-8 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Connected Wallet</h2>
        <p>{account || 'Not connected'}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Users</h2>
            <button 
              onClick={fetchUsers}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Refresh
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-700">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Wallet</th>
                  <th className="py-2 px-4 border-b">Username</th>
                  <th className="py-2 px-4 border-b">Created</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.id}</td>
                    <td className="py-2 px-4 border-b">{user.walletAddress}</td>
                    <td className="py-2 px-4 border-b">{user.username}</td>
                    <td className="py-2 px-4 border-b">{user.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">NFTs</h2>
            <button 
              onClick={fetchNFTs}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Refresh
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-700">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Token ID</th>
                  <th className="py-2 px-4 border-b">Owner</th>
                  <th className="py-2 px-4 border-b">Metadata</th>
                </tr>
              </thead>
              <tbody>
                {nfts.map(nft => (
                  <tr key={nft.id}>
                    <td className="py-2 px-4 border-b">{nft.id}</td>
                    <td className="py-2 px-4 border-b">{nft.tokenId}</td>
                    <td className="py-2 px-4 border-b">{nft.owner}</td>
                    <td className="py-2 px-4 border-b">
                      <a href={nft.metadataURI} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;