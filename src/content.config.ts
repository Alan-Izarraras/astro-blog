// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ 
    base: './src/content/blog', 
    pattern: '**/*.{md,mdx}' 
  }),
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]),   // Accept both string and Date object
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };