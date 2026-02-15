# CLAUDE.md — Derivant Website (derivant.ai)

## Progetto
- **Tipo:** Sito marketing/landing page per derivant.ai
- **Cartella:** `/Users/marcoconte/Desktop/Derivant/`
- **Stack:** React + TypeScript + Vite + Tailwind CSS
- **Deploy:** `npx vercel --prod` (da questa cartella!)
- **URL produzione:** https://derivant.ai

## ATTENZIONE CRITICA
- L'app (editor presentazioni) sta in `/Users/marcoconte/Desktop/NotezAI/`
- **NON toccare MAI file fuori da questa cartella**
- **NON aprire, leggere o modificare NULLA in NotezAI**
- Questo progetto contiene SOLO il sito pubblico: landing page, pricing, blog

## Regole
- Rispondere in italiano all'utente
- Testi del sito: italiano (mercato italiano principale)
- SEMPRE chiedere prima di modificare file
- Un fix alla volta → deploy → test → prossimo
- Mai riscrivere file interi — usare Edit per modifiche mirate
- Mai toccare codice funzionante non richiesto
- `lang="it"` — il sito è in italiano, NON cambiare in "en"

## Prodotto — Cos'è Derivant
Derivant è un **motore intelligente che genera presentazioni** con AI.
- L'utente descrive il suo obiettivo → l'AI ricerca dati reali dal web → genera slide complete e strutturate
- **Focus**: risparmio tempo, dati reali e aggiornati, coerenza col brand, presentazioni pronte quando servono
- **NON è un tool di design** — è un motore AI che automatizza la creazione di presentazioni
- **Competitor**: Gamma.app, Tome, Beautiful.ai
- **Target**: consulenti, startup, team corporate che perdono ore a fare slide

## SEO — Task Operativo

### STEP 1: Audit (SOLO lettura, zero modifiche)
1. Leggi `index.html` — analizza meta tag, title, description, OG tags esistenti
2. Leggi `vercel.json` — analizza routing, redirect, headers
3. Leggi struttura `src/` — identifica pagine, componenti, routes
4. Leggi `public/` — verifica se esistono sitemap.xml, robots.txt
5. Verifica su https://derivant.ai come appare il sito live
6. **Presenta un report completo ALL'UTENTE prima di toccare qualsiasi cosa**

### STEP 2: Fix Prioritari (uno alla volta, con approvazione)

**P0 — Pre-rendering SPA (CRITICO)**
- React SPA = Google vede `<div id="root">` vuoto → nessuna indicizzazione
- Opzioni da valutare: `vite-plugin-ssr`, `prerender-spa-plugin`, `vite-ssg`, o Vercel ISR
- Questo è IL problema principale — senza risolverlo, tutto il resto è inutile

**P1 — Meta Tag in index.html**
- Title: "Derivant AI — Presentazioni professionali generate dall'intelligenza artificiale"
- Description: focus su risparmio tempo + dati reali + automazione (NON design)
- Keywords: presentazioni AI, generare slide, presentazioni automatiche, AI presentation maker
- `lang="it"` (NON cambiare!)
- Canonical: `https://derivant.ai`

**P2 — Open Graph + Twitter Card**
- og:title, og:description, og:image, og:url, og:type
- twitter:card, twitter:title, twitter:description, twitter:image
- Creare un'immagine OG se non esiste (1200x630px)

**P3 — Schema.org / JSON-LD**
- SoftwareApplication schema
- FAQPage schema (se c'è una sezione FAQ)
- Organization schema

**P4 — Sitemap e Robots**
- Creare `public/sitemap.xml` con tutte le pagine
- Creare `public/robots.txt` con riferimento a sitemap
- Sottomettere sitemap a Google Search Console

**P5 — Video Indexing**
- Se ci sono video nel sito, aggiungere VideoObject schema
- Video sitemap separato se necessario

### STEP 3: Performance
- Core Web Vitals (LCP, FID, CLS)
- Lazy loading immagini
- Font loading optimization (preconnect, font-display: swap)

## Stile e Brand
- **Colori**: sfondo `#0d0d0f`, gradient `linear-gradient(90deg, #B8A4C9 0%, #E8B4A0 50%, #E8A4B8 100%)`
- **Font**: Syne (titoli), Space Mono (testo tecnico), Inter (body)
- **Tono**: professionale, diretto, focalizzato sul valore (risparmio tempo, automazione)
