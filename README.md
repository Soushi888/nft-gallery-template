# NFT Gallery Template

Generic template for exposing NFT collections in single or multi pages static website.

Created with [Svelte Kit](https://kit.svelte.dev).

## Demo

- [Template (this repo)](https://nft-gallery-template.netlify.app)
- [Beardman Club](https://beardman-club.netlify.app)

## Routes

You can add more pages by simply create new svelte files in the `Routes/` folder.

*/src/routes/* :

```bash
├── __error.svelte
├── index.svelte
└── __layout.svelte
```

- `index.svelte` : Main Page
- `[...].svelte` : Other collection pages
- `__layout.svelte` : Main Layout (header + footer)
- `__error.svelte` : Error Page

## Components tree

You can assemble those components in `Routes/` files and create additional ones if needed.

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

You can create as much store you need for managing the data of your collections.

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
