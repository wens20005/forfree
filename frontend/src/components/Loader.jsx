import React from 'react'
import './Loader.css'

const Loader = ({ loading, message }) => {
  if (!loading) return null

  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-message">{message || 'Processing transaction...'}</p>
      </div>
    </div>
  )
}

export default Loader