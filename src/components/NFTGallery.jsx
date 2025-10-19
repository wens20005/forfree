import React, { useState, useEffect } from 'react'
import './NFTGallery.css'

const NFTGallery = ({ account }) => {
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(false)

  // Mock NFT data - in a real app, this would come from an API or blockchain
  const mockNFTs = [
    {
      id: 1,
      name: 'Crypto Art #1',
      image: 'https://images.unsplash.com/photo-1621819119200-72e156b0f2d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      collection: 'Digital Art Collection',
      price: '0.5 ETH'
    },
    {
      id: 2,
      name: 'Pixel Panda #24',
      image: 'https://images.unsplash.com/photo-1621819119200-72e156b0f2d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      collection: 'Pixel Pandas',
      price: '1.2 ETH'
    },
    {
      id: 3,
      name: 'Abstract Waves #7',
      image: 'https://images.unsplash.com/photo-1621819119200-72e156b0f2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      collection: 'Abstract Art',
      price: '0.8 ETH'
    },
    {
      id: 4,
      name: 'Cyber Punk #12',
      image: 'https://images.unsplash.com/photo-1621819119200-72e156b0f2d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      collection: 'Cyber Collection',
      price: '2.1 ETH'
    }
  ]

  useEffect(() => {
    if (account) {
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
        setNfts(mockNFTs)
        setLoading(false)
      }, 1000)
    }
  }, [account])

  return (
    <div className="nft-gallery">
      <h2>Your NFT Collection</h2>
      {loading ? (
        <div className="loading">Loading NFTs...</div>
      ) : nfts.length > 0 ? (
        <div className="nft-grid">
          {nfts.map((nft) => (
            <div key={nft.id} className="nft-card">
              <img src={nft.image} alt={nft.name} className="nft-image" />
              <div className="nft-info">
                <h3 className="nft-name">{nft.name}</h3>
                <p className="nft-collection">{nft.collection}</p>
                <p className="nft-price">{nft.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-nfts">
          <p>No NFTs found in your collection</p>
        </div>
      )}
    </div>
  )
}

export default NFTGallery