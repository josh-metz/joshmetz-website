import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog („Notizbuch“): jede .md-Datei in src/content/notizbuch ist ein Artikel.
const notizbuch = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notizbuch' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    minutes: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notizbuch };
