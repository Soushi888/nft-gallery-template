<script>
  import {nftStore} from "../../stores/nft.store.ts";
  import NTFCard from "./NFTCard.svelte";
</script>

<div>
    {#each $nftStore as nft, i}
        <NTFCard id={i} name={nft.name} url={nft.imageUrl} link={nft.link} price={nft.price}
                 isSoldOut="{nft.isSoldOut}"/>
    {/each}
</div>

<style lang="scss">
  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    gap: 50px;

    @media (max-width: 1600px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1300px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
      grid-template-columns:  1fr;
    }
  }
</style>
