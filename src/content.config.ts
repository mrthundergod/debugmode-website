import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
                              schema: z.object({
                                title: z.string(),
                                               date: z.string(),
                                               tag: z.enum(['linux', 'gaming', 'retro', 'hardware', 'software', 'random']),
                                               type: z.enum(['debug', 'buildlog']),
                                               broke: z.string().optional(),
                                               tried: z.string().optional(),
                                               fixed: z.string().optional(),
                                               description: z.string().optional(),
                                               readTime: z.string().optional(),
                              }),
});

export const collections = { blog };
