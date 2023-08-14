import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()),
    url: z.string().url(),
    code: z.string().url().optional(),
    icon: z.string().optional(),
  })
});

const blog = defineCollection({
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
  })
});

export const collections = {
  blog,
  projects
};
