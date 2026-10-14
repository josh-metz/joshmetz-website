---
title: Website joshuametzele.de
created: 2026-10-14
updated: 2026-10-14
tags: [orientierung, website]
---

# Website joshuametzele.de

Quellcode meiner Website, gebaut mit Astro und gehostet über Cloudflare Pages. Entstanden aus [[2026-10-14-website-entwurf]].

## Wo liegt was

- `src/components/`: eine Datei pro Section (Hero, Leistungen, Arbeitsweise, Notizbuch, Über mich, Kontakt, Kopf- und Fußzeile).
- `src/content/notizbuch/`: Blogartikel als Markdown, eine Datei pro Artikel.
- `src/styles/global.css`: Farben, Schriften, Layout.
- `src/site.config.mjs`: zentrale Einstellungen, u. a. `noindex` für die Testphase.
- `public/`: Logo, Browser-Symbol, Schriften.

## Artikel schreiben

Neue `.md`-Datei in `src/content/notizbuch/` anlegen, den Kopfbereich (`title`, `date`, `summary`, `minutes`, `draft`) aus dem Beispielartikel kopieren und darunter schreiben. Mit `draft: true` bleibt der Artikel unsichtbar.

## Online stellen

Cloudflare Pages baut die Seite automatisch aus dem GitHub-Repository: Build-Befehl `npm run build`, Ausgabeordner `dist`, Umgebungsvariable `NODE_VERSION` = `22`.
