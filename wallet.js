// Polygon RPC URL
const polygonRPC = 'https://polygon-rpc.com'; 

// NFT contract addresses 
const BONUS_NFT_ADDRESSES = [
  '0x123...',
  '0x456...'
];

// Check for bonus NFTs
export async function checkForBonusNFTs() {

  // Connect to remote provider
  const provider = new Web3.providers.HttpProvider(polygonRPC);

  // Request access to MetaMask
  await window.ethereum.request({method: 'eth_requestAccounts'});

  // Get list of owned NFTs
  const nfts = await getOwnedNFTs(provider);  

  // Check for bonus NFTs
  const bonuses = [];
  nfts.forEach(nft => {
    if (BONUS_NFT_ADDRESSES.includes(nft.address)) {
      bonuses.push(nft);
    }
  });

  return bonuses;

}

// Helper methods 

async function getOwnedNFTs(provider) {
  // Call contract methods on provider  
  // Return list of NFT metadata
}