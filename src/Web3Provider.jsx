import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'

function getLibrary(provider) {
  return new ethers.BrowserProvider(provider)
}

export const Web3Provider = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {children}
    </Web3ReactProvider>
  )
}