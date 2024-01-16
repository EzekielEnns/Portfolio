import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { remarkModifiedTime } from './remark-modified-time.mjs';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://ezekielenns.github.io/Portfolio/",
  base: "Portfolio/",
  integrations: [tailwind({
    configFile: "./tailwind.config.cjs"
  }), mdx()],
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    shikiConfig: {
      theme: "dark-plus",
      wrap: true
    }
  }
});
