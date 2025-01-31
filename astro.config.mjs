import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte()],
  vite: {
    plugins: [tailwind()],
  }
});