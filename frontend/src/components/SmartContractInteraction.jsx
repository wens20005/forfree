import React, { useState } from 'react'
import './SmartContractInteraction.css'
import Loader from './Loader.jsx'
import { motion } from 'framer-motion'

const SmartContractInteraction = ({ account }) => {
  const [contractAddress, setContractAddress] = useState('')
  const [functionName, setFunctionName] = useState('')
  const [params, setParams] = useState('')
  const [result, setResult] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')

  const handleInteraction = async (e) => {
    e.preventDefault()
    setStatus('pending')
    setResult('')
    setLoading(true)
    setLoadingMessage('Interacting with smart contract...')
    
    // Simulate contract interaction
    try {
      // In a real app, this would interact with the blockchain
      setTimeout(() => {
        setLoading(false)
        setStatus('success')
        setResult(`Successfully called ${functionName} on contract ${contractAddress.substring(0, 10)}...`)
      }, 2000)
    } catch (error) {
      setLoading(false)
      setStatus('error')
      setResult('Failed to interact with contract: ' + error.message)
    }
  }

  const handleMintNFT = async () => {
    setStatus('pending')
    setResult('')
    setLoading(true)
    setLoadingMessage('Minting NFT...')
    
    // Simulate NFT minting
    try {
      setTimeout(() => {
        setLoading(false)
        setStatus('success')
        setResult('NFT minted successfully! Transaction hash: 0xabc123...')
      }, 2000)
    } catch (error) {
      setLoading(false)
      setStatus('error')
      setResult('Failed to mint NFT: ' + error.message)
    }
  }

  const handleTransferTokens = async () => {
    setStatus('pending')
    setResult('')
    setLoading(true)
    setLoadingMessage('Transferring tokens...')
    
    // Simulate token transfer
    try {
      setTimeout(() => {
        setLoading(false)
        setStatus('success')
        setResult('Tokens transferred successfully! Transaction hash: 0xdef456...')
      }, 2000)
    } catch (error) {
      setLoading(false)
      setStatus('error')
      setResult('Failed to transfer tokens: ' + error.message)
    }
  }

  return (
    <div className="contract-interaction">
      <Loader loading={loading} message={loadingMessage} />
      <h2>Smart Contract Interaction</h2>
      
      <div className="interaction-options">
        <motion.button 
          className="option-button" 
          onClick={handleMintNFT}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mint NFT
        </motion.button>
        
        <motion.button 
          className="option-button" 
          onClick={handleTransferTokens}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Transfer Tokens
        </motion.button>
        
        <motion.button 
          className="option-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Contract
        </motion.button>
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
        
        <motion.button 
          type="submit" 
          className="contract-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Interact with Contract
        </motion.button>
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