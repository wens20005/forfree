import React, { useState, useEffect } from 'react'
import './App.css'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import { injected } from './components/WalletConnector'

// Get base path for GitHub Pages
const basePath = import.meta.env.BASE_URL || '/';

import Header from './components/Header'
import WalletConnect from './components/WalletConnect'
import NFTGallery from './components/NFTGallery'
import TokenTracker from './components/TokenTracker'
import SmartContractInteraction from './components/SmartContractInteraction'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import Footer from './components/Footer'

function App() {
  const { active, account, library, activate, deactivate } = useWeb3React()
  const [balance, setBalance] = useState(null)
  const [chainId, setChainId] = useState(null)

  const connectWallet = async () => {
    try {
      await activate(injected)
    } catch (error) {
      console.error('Failed to connect wallet:', error)
    }
  }

  const disconnectWallet = async () => {
    try {
      deactivate()
    } catch (error) {
      console.error('Failed to disconnect wallet:', error)
    }
  }

  useEffect(() => {
    if (active && library && account) {
      // Get account balance
      library.eth.getBalance(account).then(balance => {
        setBalance(Web3.utils.fromWei(balance, 'ether'))
      })
      
      // Get chain ID
      library.eth.getChainId().then(id => {
        setChainId(id)
      })
    }
  }, [active, library, account])

  return (
    <div className="App">
      <Header 
        account={account} 
        balance={balance} 
        chainId={chainId} 
        onConnect={connectWallet} 
        onDisconnect={disconnectWallet} 
      />
      
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>ForFree</h1>
            <p>Professional Web3 platform combining creative web design with secure blockchain integration</p>
            {!active ? (
              <WalletConnect onConnect={connectWallet} />
            ) : (
              <div className="connected-info">
                <p>Connected to wallet: {account?.substring(0, 6)}...{account?.substring(account.length - 4)}</p>
                <p>Balance: {balance} ETH</p>
              </div>
            )}
          </div>
        </section>

        {active && (
          <>
            <section className="features">
              <NFTGallery account={account} />
              <TokenTracker account={account} />
              <SmartContractInteraction account={account} />
              <AnalyticsDashboard account={account} />
            </section>
          </>
        )}

        <section className="about">
          <h2>Why Choose ForFree?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Wallet Integration</h3>
              <p>Connect crypto wallets such as MetaMask or WalletConnect for secure login and transaction authentication.</p>
            </div>
            <div className="feature-card">
              <h3>Smart Contract Interaction</h3>
              <p>Interact with Ethereum-compatible smart contracts directly on the website.</p>
            </div>
            <div className="feature-card">
              <h3>NFT & Crypto Display</h3>
              <p>Showcase NFT collections, crypto assets, and blockchain-based portfolios.</p>
            </div>
            <div className="feature-card">
              <h3>Decentralized Experience</h3>
              <p>No dependency on central servers; users retain full control over their assets.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App