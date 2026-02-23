# CLAUDE.md — Derivant Website (derivant.ai)

## Progetto
- **Tipo:** Sito marketing/landing page per derivant.ai
- **Cartella:** `/Users/marcoconte/Desktop/Derivant/`
- **Stack:** React + TypeScript + Vite + Tailwind CSS
- **Deploy:** `git push origin main` → auto-deploy Vercel progetto `derivant-website`
- **ATTENZIONE:** `npx vercel --prod` deploya sul progetto SBAGLIATO (`derivant`). Usare SEMPRE git push.
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

## SEO — Stato Attuale (aggiornato 23 Feb 2026)

### COMPLETATI
- **Pre-rendering SPA**: funzionante con `scripts/prerender.mjs` + `entry-server.tsx`
- **H1 homepage**: `<h1>` con "Accelera la produzione delle tue presentazioni" (era un `<span>`)
- **H2 con keyword SEO**: "Presentazioni AI pronte alla consegna, con i tuoi contenuti." — H2 decorativo "DERIVANT" convertito in `<div aria-hidden>`
- **Alt text immagini**: tutte le 10 immagini gallery con alt descrittivo + keyword
- **Meta tag index.html**: title, description, keywords, canonical, OG, Twitter Card — tutti presenti
- **Schema.org**: Organization, SoftwareApplication, FAQPage in index.html
- **Schema Article blog**: datePublished dinamica, dateModified, mainEntityOfPage, logo corretto
- **Sitemap + Robots**: `public/sitemap.xml` con tutte le pagine e articoli blog, robots.txt presente
- **Immagini WebP**: tutte convertite da PNG (~10MB → ~680KB, -93%). Originali PNG restano per OG meta tag
- **Lazy loading**: attivo su immagini gallery
- **Font loading**: preconnect + `display=swap` su Google Fonts
- **Footer**: tutto in italiano, email corretta `info@derivant.ai`, link morti `href="#"` rimossi
- **Blog H1**: da "Latest News Articles" → "Blog — Guide e Approfondimenti sulle Presentazioni AI"

### DA FARE (bassa priorità)
- **Pagina /enterprise dedicata**: ora è solo anchor `/#enterprise` — keyword persa
- **VideoObject schema**: video presenti ma senza schema strutturato
- **Social media**: Instagram e TikTok quasi vuoti, LinkedIn da creare. Quando attivi → aggiungere a schema Organization `sameAs` e footer
- **Refactor componenti grandi**: NewHero.tsx (1533 righe), BlogArticlePage.tsx (1786 righe) — funzionano ma sono enormi

## Stile e Brand
- **Colori**: sfondo `#0d0d0f`, gradient `linear-gradient(90deg, #B8A4C9 0%, #E8B4A0 50%, #E8A4B8 100%)`
- **Font**: Syne (titoli), Space Mono (testo tecnico), Inter (body)
- **Tono**: professionale, diretto, focalizzato sul valore (risparmio tempo, automazione)
