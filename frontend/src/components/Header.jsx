import React from 'react'
import './Header.css'

const Header = ({ account, balance, onConnect, onDisconnect }) => {
  // Simple dark mode toggle without context
  const [darkMode, setDarkMode] = React.useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>ForFree</h2>
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
        
        <div className="theme-toggle">
          <button onClick={toggleDarkMode} className="theme-button">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        <div className="wallet-info">
          {account ? (
            <div className="connected-wallet">
              <div className="account-info">
                <span className="account-address">
                  {account.substring(0, 6)}...{account.substring(account.length - 4)}
                </span>
                <span className="balance">{balance ? `${parseFloat(balance).toFixed(4)} ETH` : 'Loading...'}</span>
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