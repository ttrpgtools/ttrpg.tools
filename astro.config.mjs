import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
//import toml from './toml-content';

// import remarkFrontmatter from 'remark-frontmatter';
//import remarkTomlFrontmatter from './remark-astro-toml-frontmatter';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte(), tailwind()],
  markdown: {
    // remarkPlugins: [
    //   [remarkFrontmatter, 'toml'],
    //   remarkTomlFrontmatter,
    // ],
  },
  experimental: {
    assets: true
  },
});