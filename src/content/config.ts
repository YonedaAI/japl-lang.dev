import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['stable', 'preview', 'experimental', 'planned']).default('stable'),
    order: z.number().optional(),
    section: z.string(),
    prev: z.object({
      title: z.string(),
      slug: z.string(),
    }).optional(),
    next: z.object({
      title: z.string(),
      slug: z.string(),
    }).optional(),
  }),
});

export const collections = { docs };
