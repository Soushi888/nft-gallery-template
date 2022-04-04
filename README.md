# NFT Gallery Template

Generic template for exposing NFT collections in single or multi pages static website.

Created with [Svelte Kit](https://kit.svelte.dev).

## Demo

- [Template](https://nft-gallery-template.netlify.app)
- [Beardman Club](https://beardman-club.netlify.app)

## Routes

*/src/routes/* :
```bash
├── __error.svelte
├── index.svelte
└── __layout.svelte
```

- Index : Page principale
- __layout : Principal Layout (header + footer)
- __error : Error Page

## Components tree

*/src/components/* :
```bash
├── NFT
│    ├── NFTCard.svelte
│    └── NFTGrid.svelte
├── Footer.svelte
├── Logo.svelte
├── Navbar.svelte
├── Social.svelte
└── UI
    ├── Button.svelte
    └── Text.svelte
```

- `UI/` : Atomics components repertory
- `NFT/` : NFT Grid and Card components repertory

## Stores

*src/stores/*

- `nft.store.ts` : Data interface of an example collection

## Developing

Installation : `npm install` (or `pnpm install` or `yarn`)

Start a development server :

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Static adapter.

build repertory : `build/`

```bash
npm run build
```
