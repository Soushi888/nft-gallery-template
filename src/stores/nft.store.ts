import { type Readable, readable } from "svelte/store";

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
    "link": "https://solsea.io/",
    "isSoldOut": false
  },
  {
    "name": "NFT 2",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/",
    "isSoldOut": false
  },
  {
    "name": "NFT 3",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/",
    "isSoldOut": false
  },
  {
    "name": "NFT 4",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/",
    "isSoldOut": true
  },
  {
    "name": "NFT 5",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/",
    "isSoldOut": false
  },
  {
    "name": "NFT 6",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/",
    "isSoldOut": false
  },
  {
    "name": "NFT 7",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/",
    "isSoldOut": true
  },
  {
    "name": "NFT 8",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/",
    "isSoldOut": false
  },
  {
    "name": "NFT 9",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/",
    "isSoldOut": false
  },
  {
    "name": "NFT 10",
    "imageUrl": "/assets/images/img-250x250.png",
    "price": "1 SOL",
    "link": "https://solsea.io/",
    "isSoldOut": false
  }
]);
