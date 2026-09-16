import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().or(z.string().transform((val) => new Date(val))),
    category: z.string().transform((val) => val.toLowerCase().trim()),
    lang: z.enum(['es', 'en']),
    translation_id: z.string(),
    author_comment: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    readTimeMinutes: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
