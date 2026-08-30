import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import tailwind from "@tailwindcss/vite";
import remarkWikiLink from "@braindb/remark-wiki-link";
import gardenDB from "./src/lib/util/garden-db.ts";
import remarkResourceProfiles from "./src/lib/util/remark-resource-profiles.ts";
import { slugify } from "./src/lib/util/slugify.ts";
import { unified } from "@astrojs/markdown-remark";

// Initialize the database
await gardenDB.init();

export default defineConfig({
  markdown: {
    drafts: true,
    processor: unified({
      remarkPlugins: [
        [
          remarkWikiLink,
          {
            linkTemplate: ({ slug, alias }) => {
              const [slugWithoutAnchor, anchor] = slug.split("#");

              if (slugWithoutAnchor) {
                const doc = gardenDB.getDocument(slugWithoutAnchor);

                if (doc) {
                  return {
                    hName: "a",
                    hProperties: {
                      href: anchor ? `${doc.url}#${anchor}` : doc.url,
                      class: "wikilink",
                    },
                    hChildren: [
                      {
                        type: "text",
                        value: alias || doc.frontmatter.title || slug,
                      },
                    ],
                  };
                }
              }

              // Non-existent link - create with your API
              return {
                hName: "span",
                hProperties: {
                  class: "wikilink-new",
                  "data-slug": slugify(slugWithoutAnchor || slug),
                  title: `Create ${alias || slug}`,
                },
                hChildren: [{ type: "text", value: `${alias || slug}` }],
              };
            },
          },
        ],
        remarkResourceProfiles,
      ],
    }),
    shikiConfig: { theme: "css-variables" },
  },
  integrations: [mdx(), svelte()],
  vite: {
    plugins: [tailwind()],
  },
});
