import {type Readable, readable, writable} from "svelte/store";
import {Connection, type MetadataJson, programs} from '@metaplex/js';

const {metadata: {Metadata}} = programs;

const connection = new Connection('devnet');
const tokenPublicKey = 'Gz3vYbpsB2agTsAwedtvtTkQ1CG9vsioqLW3r9ecNpvZ';

export type NFT = {
  name: string,
  imageUrl: string,
  price: string,
  link: string,
  isSoldOut: boolean
}

const metaplexStore = () => {
  const metadata = writable<string>("Hello world !");

  // const getMetadata = async () => {
  //   try {
  //     const ownedMetadata = await Metadata.load(connection, tokenPublicKey);
  //     console.log(ownedMetadata);
  //     let json = await ownedMetadata.toJSON;
  //     metadata.set(json);
  //   } catch {
  //     console.error('Failed to fetch metadata');
  //   }
  // };

  return {metadata,
    // getMetadata
  };
}


const metaplex = metaplexStore();
export default metaplex;
