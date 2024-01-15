import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import { remarkModifiedTime } from './remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  site:"https://ezekielenns.github.io/blog/",
  base:"blog/",
  integrations: [tailwind({
      configFile:"./tailwind.config.cjs"
  })],
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    shikiConfig :{
      theme:"dark-plus",
      wrap:true

    }
  }
});
