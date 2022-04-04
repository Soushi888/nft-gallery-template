import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
import * as path from "path";

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: netlify(),
    vite: {
      resolve: {
        alias: {
          $assets: path.resolve('./static/assets'),
        }
      }
    }
  }
};

export default config;

