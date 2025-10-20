import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NFTGallery = () => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/nfts')
      .then(res => setNFTs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {nfts.map(nft => (
        <div key={nft.tokenId} className="border p-2 rounded">
          <img src={nft.metadataURI} alt={`NFT ${nft.tokenId}`} />
          <p>Owner: {nft.owner}</p>
        </div>
      ))}
    </div>
  );
};

export default NFTGallery;
