import { z, defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()),
    url: z.string().url(),
    code: z.string().url().optional(),
    icon: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/gallery" }),
  schema: z
    .object({
      title: z.string(),
      excerpt: z.string().optional(),
      date: z.date(),
      aicontent: z.boolean().default(false),
      autocaption: z.boolean().default(false),
      imageFolder: z.string().optional(),
      captions: z.record(z.string(), z.string()).optional(),
      images: z
        .array(
          z.object({
            path: z.string(),
            caption: z.string().optional(),
          }),
        )
        .optional(),
    })
    .refine((s) => s.imageFolder || s.images),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    date: z.date(),
    banner: z.object({
      src: z.string(),
      alt: z.string(),
      position: z.string().optional(),
    }),
  }),
});

const resources = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/resources",
  }),
  schema: z.object({
    title: z.string(),
    created: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()).default([]),
    aliases: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    description: z.string().optional(),
    banner: z
      .object({
        src: z.string(),
        alt: z.string(),
        position: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  blog,
  projects,
  gallery,
  resources,
};
