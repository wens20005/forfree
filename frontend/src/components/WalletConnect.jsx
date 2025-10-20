import React, { useState } from 'react'
import './WalletConnect.css'
import { coinbase } from './WalletConnector'

const WalletConnect = ({ onConnect }) => {
  const [showModal, setShowModal] = useState(false)

  const handleConnect = () => {
    onConnect()
    setShowModal(false)
  }

  const handleCoinbaseConnect = async () => {
    try {
      await coinbase.enable()
      onConnect()
      setShowModal(false)
    } catch (error) {
      console.error('Failed to connect Coinbase Wallet:', error)
    }
  }

  return (
    <div className="wallet-connect">
      <button className="connect-button" onClick={() => setShowModal(true)}>
        Connect Wallet
      </button>
      
      {showModal && (
        <div className="wallet-modal" onClick={() => setShowModal(false)}>
          <div className="wallet-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Connect Your Wallet</h3>
            <p>Select your preferred wallet to connect</p>
            
            <button className="wallet-option" onClick={handleConnect}>
              <span>MetaMask</span>
            </button>
            
            <button className="wallet-option">
              <span>WalletConnect</span>
            </button>
            
            <button className="wallet-option" onClick={handleCoinbaseConnect}>
              <span>Coinbase Wallet</span>
            </button>
            
            <button className="cancel-button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WalletConnect