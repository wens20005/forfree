import React, { useContext } from 'react';
import { Web3Context } from './Web3Provider';
import Header from './components/Header';
import WalletConnect from './components/WalletConnect';
import NFTGallery from './components/NFTGallery';
import TokenTracker from './components/TokenTracker';
import SmartContractInteraction from './components/SmartContractInteraction';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import './App.css';

function App() {
  const { account, balance, connectWallet } = useContext(Web3Context);
  
  const disconnectWallet = () => {
    // In a real app, this would disconnect the wallet
    window.location.reload();
  };

  return (
    <div className="App">
      <Header 
        account={account} 
        balance={balance} 
        onConnect={connectWallet} 
        onDisconnect={disconnectWallet} 
      />
      
      <main>
        {/* For now, we'll show the home page */}
        <Home />
        
        {/* If wallet is connected, show dashboard */}
        {account && (
          <div className="mt-8">
            <Dashboard />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App