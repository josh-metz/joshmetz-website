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
    coverBild: z.string().optional(),      // Titelbild unter der Überschrift, z. B. /images/notiz-datei.webp
    coverAlt: z.string().optional(),       // Bildbeschreibung (für Google und Screenreader)
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
    // Felder für die eigene Unterseite (nur nötig, wenn landingpage: true)
    headline: z.string().optional(),       // Überschrift auf der Unterseite
    untertitel: z.string().optional(),     // Zeile unter der Überschrift
    date: z.coerce.date().optional(),      // Veröffentlichungsdatum
    seoTitel: z.string().optional(),       // Titel bei Google (ideal unter 60 Zeichen)
    beschreibung: z.string().optional(),   // Text bei Google unter dem Titel (120–155 Zeichen)
    zusammenfassung: z.string().optional(),// Ergebnis-Kasten oben auf der Unterseite
    coverBild: z.string().optional(),      // Titelbild unter der Überschrift, z. B. /images/datei.webp
    coverAlt: z.string().optional(),       // Bildbeschreibung (für Google und Screenreader)
    kennzahlen: z.array(z.object({ wert: z.string(), text: z.string() })).optional(),
    ctaTitel: z.string().optional(),       // Überschrift im schwarzen Banner unten
    ctaText: z.string().optional(),        // Text im schwarzen Banner unten
  }),
});

export const collections = { notizbuch, fallbeispiele };
