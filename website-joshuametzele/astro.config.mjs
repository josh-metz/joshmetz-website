import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://joshuametzele.de',
  // Sitemap: Liste aller Unterseiten für Google, wird bei jedem Build automatisch erzeugt (/sitemap-index.xml)
  integrations: [sitemap()],
});
