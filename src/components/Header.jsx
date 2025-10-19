import React from 'react'
import './Header.css'

const Header = ({ account, balance, chainId, onConnect, onDisconnect }) => {
  const getChainName = (chainId) => {
    switch (chainId) {
      case 1: return 'Ethereum Mainnet'
      case 3: return 'Ropsten Testnet'
      case 4: return 'Rinkeby Testnet'
      case 5: return 'Goerli Testnet'
      case 42: return 'Kovan Testnet'
      case 137: return 'Polygon'
      case 80001: return 'Mumbai Testnet'
      case 56: return 'Binance Smart Chain'
      case 97: return 'BSC Testnet'
      default: return `Chain ID: ${chainId}`
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>AU GOLYA RéI DYALK</h2>
        </div>
        
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#nfts">NFTs</a></li>
            <li><a href="#tokens">Tokens</a></li>
            <li><a href="#contracts">Contracts</a></li>
            <li><a href="#analytics">Analytics</a></li>
          </ul>
        </nav>
        
        <div className="wallet-info">
          {account ? (
            <div className="connected-wallet">
              <div className="account-info">
                <span className="account-address">
                  {account.substring(0, 6)}...{account.substring(account.length - 4)}
                </span>
                <span className="balance">{balance ? `${parseFloat(balance).toFixed(4)} ETH` : 'Loading...'}</span>
                <span className="chain">{getChainName(chainId)}</span>
              </div>
              <button className="disconnect-button" onClick={onDisconnect}>
                Disconnect
              </button>
            </div>
          ) : (
            <button className="connect-button" onClick={onConnect}>
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header