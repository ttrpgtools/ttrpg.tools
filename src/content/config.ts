import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()),
    url: z.string().url(),
    code: z.string().url().optional(),
    icon: z.string().optional(),
  })
});

const gallery = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.date(),
    aicontent: z.boolean().default(false),
    autocaption: z.boolean().default(false),
    imageFolder: z.string().optional(),
    images: z.array(z.object({
      path: z.string(),
      caption: z.string().optional(),
    })).optional(),
  }).refine((s => s.imageFolder || s.images))
});

const blog = defineCollection({
  type: 'content',
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
  projects,
  gallery,
};
