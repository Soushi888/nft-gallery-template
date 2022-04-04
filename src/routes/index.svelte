<script lang='ts'>
  import banner from '$assets/images/banner-720x288.png';
  import NFTGrid from '../components/NFT/NFTGrid.svelte';
  import Text from '../components/UI/Text.svelte';
  import Button from '../components/UI/Button.svelte';

  const collectionLink = 'https://solsea.io/collections/';
</script>

<svelte:head>
    <title>NFT Gallery</title>
</svelte:head>

<main>
    <div class='text'>
        <h1>Welcome to this NFT Gallery !</h1>
        <div class='ten-founders'>
            <a href='{collectionLink}' target='_blank'><img src='{banner}' alt='Ten founders.'></a>
        </div>
        <Text textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequuntur corporis deleniti
            doloribus ducimus, earum facilis illo molestiae molestias, nihil nulla, officiis porro quam reiciendis sed
            sequi suscipit vitae?
        </Text>
        <div class='button'>
            <Button href={collectionLink} targetBlank>Collection</Button>
        </div>
    </div>

    <NFTGrid/>

    <div class='text'>
        <Text textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </Text>
    </div>
</main>

<style lang='scss'>
  main {
    margin: 50px var(--container-marge);

    .ten-founders {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 40px;

      @media (max-width: 750px) {
        margin: 40px -40px;


        img {
          width: 100%;
        }
      }
    }

    .text {
      margin-bottom: 50px;

      h1 {
        font-size: 3rem;
        text-align: center;
      }

      &:last-of-type {
        margin-top: 50px;
      }
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
