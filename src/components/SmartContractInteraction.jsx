import React, { useState } from 'react'
import './SmartContractInteraction.css'

const SmartContractInteraction = ({ account }) => {
  const [contractAddress, setContractAddress] = useState('')
  const [functionName, setFunctionName] = useState('')
  const [params, setParams] = useState('')
  const [result, setResult] = useState('')
  const [status, setStatus] = useState('')

  const handleInteraction = async (e) => {
    e.preventDefault()
    setStatus('pending')
    setResult('')
    
    // Simulate contract interaction
    try {
      // In a real app, this would interact with the blockchain
      setTimeout(() => {
        setStatus('success')
        setResult(`Successfully called ${functionName} on contract ${contractAddress.substring(0, 10)}...`)
      }, 2000)
    } catch (error) {
      setStatus('error')
      setResult('Failed to interact with contract: ' + error.message)
    }
  }

  const handleMintNFT = async () => {
    setStatus('pending')
    setResult('')
    
    // Simulate NFT minting
    try {
      setTimeout(() => {
        setStatus('success')
        setResult('NFT minted successfully! Transaction hash: 0xabc123...')
      }, 2000)
    } catch (error) {
      setStatus('error')
      setResult('Failed to mint NFT: ' + error.message)
    }
  }

  return (
    <div className="contract-interaction">
      <h2>Smart Contract Interaction</h2>
      
      <div className="interaction-options">
        <button className="option-button" onClick={handleMintNFT}>
          Mint NFT
        </button>
        
        <button className="option-button">
          Transfer Tokens
        </button>
        
        <button className="option-button">
          View Contract
        </button>
      </div>
      
      <form className="contract-form" onSubmit={handleInteraction}>
        <div className="form-group">
          <label htmlFor="contractAddress">Contract Address</label>
          <input
            type="text"
            id="contractAddress"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            placeholder="0x..."
            className="contract-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="functionName">Function Name</label>
          <input
            type="text"
            id="functionName"
            value={functionName}
            onChange={(e) => setFunctionName(e.target.value)}
            placeholder="e.g., transfer, mint, balanceOf"
            className="contract-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="params">Parameters (comma separated)</label>
          <input
            type="text"
            id="params"
            value={params}
            onChange={(e) => setParams(e.target.value)}
            placeholder="e.g., address, amount"
            className="contract-input"
          />
        </div>
        
        <button type="submit" className="contract-button">
          Interact with Contract
        </button>
      </form>
      
      {status && (
        <div className={`transaction-status ${status}`}>
          {status === 'pending' && <p>Processing transaction...</p>}
          {status === 'success' && <p>Transaction successful!</p>}
          {status === 'error' && <p>Transaction failed!</p>}
          {result && <p>{result}</p>}
        </div>
      )}
    </div>
  )
}

export default SmartContractInteraction