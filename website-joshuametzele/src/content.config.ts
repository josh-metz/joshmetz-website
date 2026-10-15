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

// Fallbeispiele: jede .md-Datei in src/content/fallbeispiele ist eine Kachel unter „Aus der Praxis“.
// Später wird daraus auch die eigene Landingpage (landingpage: true schaltet sie frei).
const fallbeispiele = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/fallbeispiele' }),
  schema: z.object({
    title: z.string(),
    kategorie: z.string(),
    teaser: z.string(),
    ergebnis: z.string().optional(),
    reihenfolge: z.number(),
    platzhalter: z.boolean().default(false),
    landingpage: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notizbuch, fallbeispiele };
