import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>AU GOLYA RéI DYALK</h3>
          <p>Next-generation Web3 platform combining creative web design with secure blockchain integration.</p>
        </div>
        
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>Wallet Integration</li>
            <li>Smart Contract Interaction</li>
            <li>NFT & Crypto Display</li>
            <li>Decentralized User Experience</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li>Twitter</li>
            <li>Discord</li>
            <li>GitHub</li>
            <li>Documentation</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AU GOLYA RéI DYALK. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer