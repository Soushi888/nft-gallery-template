import { Readable, readable } from "svelte/store";

export interface NFT {
  name: string,
  imageUrl: string,
  price: string,
  link: string,
  isSoldOut: boolean
}

export const nftStore: Readable<NFT[]> = readable([
  {
    "name": "NFT 1",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/AyngreAutUf1GBPrfwJtHkM6kWVtX2tLDxGSidYz2iUC",
    "isSoldOut": false
  },
  {
    "name": "NFT 2",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/BF7KSdyJZL6x2AfAvMXxLog1ozAzNBEG6KzZE5VSLx57",
    "isSoldOut": false
  },
  {
    "name": "NFT 3",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/4CGwGRb15ubgTYgVic4fSiFCZVxL9LCLR57Spm6KoJdo",
    "isSoldOut": false
  },
  {
    "name": "NFT 4",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/DVp1Q5ex2NGKAvRzEtJmpYENJYHtbjsAk94RpV6yjg5p",
    "isSoldOut": true
  },
  {
    "name": "NFT 5",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/EgEmGFrMLVsGyK3uCJh1DgrrPJmcRAV3a1aVU3FBQppF",
    "isSoldOut": false
  },
  {
    "name": "NFT 6",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/GyHHpcxyd5RxcKRFm2B1s2BW5Dp5PHzcsSg6kjs8SSYt",
    "isSoldOut": false
  },
  {
    "name": "NFT 7",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/BdXVwW1QxrC5K2bXZUSTRWAhRyJ1EfwPhCKRpurZGLW9",
    "isSoldOut": true
  },
  {
    "name": "NFT 8",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/6xg3GjZbBjNAqdiu2DYtT9wWbkoCfBBAase7DjsidmSe",
    "isSoldOut": false
  },
  {
    "name": "NFT 9",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/AmMuVPzj9sNV3GXKCV2nJn9v4VXhBcSgT8KCNhy9QKyf",
    "isSoldOut": false
  },
  {
    "name": "NFT 10",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/nft/3jawJ9h5LQkSBrR6CVUif2QahEZH3uVh8K9iVkPiMEEw",
    "isSoldOut": false
  }
]);
