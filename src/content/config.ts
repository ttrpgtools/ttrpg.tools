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

export const collections = {
  projects
};
