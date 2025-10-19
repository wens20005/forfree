import React, { useState, useEffect } from 'react'
import './TokenTracker.css'

const TokenTracker = ({ account }) => {
  const [tokens, setTokens] = useState([])
  const [loading, setLoading] = useState(false)

  // Mock token data - in a real app, this would come from an API or blockchain
  const mockTokens = [
    {
      id: 1,
      name: 'Ethereum',
      symbol: 'ETH',
      balance: 2.45,
      value: 4500.50,
      change: 2.5
    },
    {
      id: 2,
      name: 'USD Coin',
      symbol: 'USDC',
      balance: 1250.75,
      value: 1250.75,
      change: 0.1
    },
    {
      id: 3,
      name: 'Dai',
      symbol: 'DAI',
      balance: 800.00,
      value: 800.00,
      change: -0.3
    },
    {
      id: 4,
      name: 'Uniswap',
      symbol: 'UNI',
      balance: 45.5,
      value: 680.25,
      change: 5.2
    }
  ]

  useEffect(() => {
    if (account) {
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
        setTokens(mockTokens)
        setLoading(false)
      }, 800)
    }
  }, [account])

  return (
    <div className="token-tracker">
      <h2>Token Portfolio</h2>
      {loading ? (
        <div className="loading">Loading tokens...</div>
      ) : tokens.length > 0 ? (
        <div className="tokens-grid">
          {tokens.map((token) => (
            <div key={token.id} className="token-card">
              <div className="token-header">
                <h3>{token.name}</h3>
                <span className="token-symbol">{token.symbol}</span>
              </div>
              <div className="token-balance">
                <p className="balance-amount">{token.balance} {token.symbol}</p>
                <p className="balance-value">${token.value.toFixed(2)}</p>
              </div>
              <div className={`token-change ${token.change >= 0 ? 'positive' : 'negative'}`}>
                {token.change >= 0 ? '↑' : '↓'} {Math.abs(token.change)}%
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-tokens">
          <p>No tokens found in your wallet</p>
        </div>
      )}
    </div>
  )
}

export default TokenTracker