# SLIDERUN REBRAND — Piano Completo

## Brand
- **Vecchio nome**: Derivant / Derivant AI
- **Nuovo nome**: SlideRun / SlideRun AI
- **Vecchio dominio**: derivant.ai / app.derivant.ai / www.derivant.ai
- **Nuovo dominio**: sliderun.ai / app.sliderun.ai / www.sliderun.ai
- **Dominio comprato**: 15 Mar 2026, Namecheap, 2 anni, ordine #197109777
- **Formato brand**: "SlideRun" (camelCase) per il logo/brand, "SlideRun AI" per il nome completo

---

## Architettura Progetti

| Progetto | Cartella | Deploy | Dominio attuale | Dominio nuovo |
|----------|---------|--------|-----------------|---------------|
| **APP** (editor) | `~/Desktop/NotezAI` | `npx vercel --prod` | app.derivant.ai | app.sliderun.ai |
| **SITO** (marketing) | `~/Desktop/Derivant` | `git push origin main` (auto-deploy) | www.derivant.ai | www.sliderun.ai / sliderun.ai |

---

## FASI DI ESECUZIONE

### FASE 1 — CORS + API URLs (codice, no rischio)
**Obiettivo**: aggiungere `app.sliderun.ai` agli allowedOrigins di TUTTE le API, SENZA rimuovere `app.derivant.ai`. Entrambi i domini funzionano.

**File da modificare (15+ API):**

| File | Cosa cambiare |
|------|--------------|
| `api/search-images.js` | allowedOrigins + referer |
| `api/generate-ai-presentation.js` | allowedOrigins |
| `api/generate-slides.js` | allowedOrigins |
| `api/generate-outline.js` | allowedOrigins |
| `api/generate-html-slides.js` | allowedOrigins |
| `api/generate-slide.js` | allowedOrigins + referer |
| `api/generate-pptx.js` | allowedOrigins |
| `api/generate-toc-slide.js` | allowedOrigins (se presente) |
| `api/chat.js` | allowedOrigins + referer |
| `api/fill-template.js` | allowedOrigins + referer |
| `api/improve-slide.js` | allowedOrigins + referer |
| `api/dalle.js` | allowedOrigins |
| `api/image-proxy.js` | allowedOrigins |
| `api/ai-edit-block.js` | allowedOrigins |
| `api/upload-web-image.js` | allowedOrigins |
| `api/serpapi-images.js` | allowedOrigins |
| `api/web-research.js` | allowedOrigins |
| `api/export-pdf.js` | callback URL (Doppio) |
| `api/create-checkout.js` | Stripe success/cancel fallback URL |
| `api/agent.js` | API_BASE constant |
| `api/stripe-webhook.js` | verificare se ha URL hardcoded |
| `api/export-data.js` | verificare se ha allowedOrigins |
| `api/shared/verifyCredits.js` | verificare |
| `api/shared/pptxHelpers.js` | verificare |

**Regola**: AGGIUNGERE `'https://app.sliderun.ai'` alla lista, NON sostituire.

**Deploy**: `npx vercel --prod` dalla cartella NotezAI

---

### FASE 2 — DNS + Vercel (manuale, Marco)
**Obiettivo**: far funzionare i nuovi domini.

**Namecheap → Advanced DNS:**

| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |
| CNAME | app | cname.vercel-dns.com |

Cancellare eventuali record di default (parking page).

**Vercel Dashboard:**
1. Progetto `derivant-website` (sito) → Settings → Domains → aggiungere `sliderun.ai` + `www.sliderun.ai`
2. Progetto `notezai` (app) → Settings → Domains → aggiungere `app.sliderun.ai`

Aspettare check verde su entrambi.

---

### FASE 3 — Servizi Esterni (manuale, Marco)
**Obiettivo**: i servizi esterni accettano il nuovo dominio.

**Supabase** (dashboard → Authentication → URL Configuration):
- Site URL: cambiare da `https://app.derivant.ai` a `https://app.sliderun.ai`
- Redirect URLs: AGGIUNGERE `https://app.sliderun.ai/**` (tenere anche il vecchio)

**Stripe** (dashboard → Developers → Webhooks):
- Aggiornare endpoint webhook da `https://app.derivant.ai/api/stripe-webhook` a `https://app.sliderun.ai/api/stripe-webhook`
- Verificare Customer Portal → Settings → redirect URL

**Calendly**:
- `calendly.com/derivant/new-meeting` → creare `calendly.com/sliderun/new-meeting` O aggiornare il nome account

**Email** (opzionale ma consigliato):
- Setup `info@sliderun.ai` — Cloudflare Email Routing (gratuito) o Google Workspace

---

### FASE 4 — Rebrand UI App (codice, parallelizzabile)
**Obiettivo**: l'utente vede "SlideRun" ovunque nell'app.

**File da modificare:**

| File | Cosa cambiare |
|------|--------------|
| `index.html` | `<title>`, meta description, meta keywords, OG tags, messaggio mobile, favicon ref |
| `src/components/Footer.tsx` | Nome brand, link |
| `src/components/Auth/AuthScreen.tsx` | Email contatto → info@sliderun.ai |
| `src/components/Auth/SupabaseAuthScreen.tsx` | Email contatto |
| `src/components/TermsOfService.tsx` | Nome brand, email, URL |
| `src/components/RateLimitModal/RateLimitModal.tsx` | Email contatto |
| `src/components/Presentation/ProjectsDashboard.tsx` | Logo text "DERIVANT AI" → "SLIDERUN" |
| `src/components/SlideEditor2025/SlideEditor.tsx` | document.title |
| `src/components/SlideEditor2025/GammaSlide.tsx` | Logo watermark |
| `src/components/Presentation/AIPresentationDemo.tsx` | Email whitelist (info@derivant.ai → info@sliderun.ai), link plans |
| `public/manifest.json` | name, short_name, id |

**Asset da rinominare:**
- `public/icon/derivant-icon.png` → `public/icon/sliderun-icon.png` (+ aggiornare tutti i riferimenti)
- Eventualmente creare nuovo logo/icona

**Plugin (non urgenti, solo se si pubblicano):**

| File | Cosa |
|------|------|
| `figma-plugin/manifest.json` | id, name, networkAccess domains |
| `figma-plugin/package.json` | name |
| `figma-plugin/code.js` + `code.ts` | Commenti header, email |
| `chrome-extension/manifest.json` | name, short_name |
| `chrome-extension/background.js` | URL app |
| `chrome-extension/popup.html` + `sidepanel.html` | Testi |
| `chrome-extension/content.js` + `content.css` | CSS IDs (derivant-floating-btn) |
| `google-addon/appsscript.json` | Logo URL |
| `google-addon/SlideGenerator.gs` | Brand text |
| `google-addon/sidebar.html` | Testi |
| `powerpoint-addin/manifest.xml` | IconUrl, SupportUrl, tutti i nomi |
| `powerpoint-addin/taskpane.js` | API_BASE, localStorage keys |
| `powerpoint-addin/package.json` | name |

**Deploy**: `npx vercel --prod`

---

### FASE 5 — Rebrand Sito Marketing (codice, parallelizzabile con Fase 4)
**Obiettivo**: il sito mostra "SlideRun" e punta ai nuovi domini.

**File da modificare:**

| File | Cosa cambiare |
|------|--------------|
| `index.html` | title, meta, OG, JSON-LD Organization, JSON-LD SoftwareApplication, JSON-LD FAQ, favicon |
| `vercel.json` | Redirect early-access → app.sliderun.ai |
| `public/manifest.json` | name, short_name, id, icon paths |
| `public/robots.txt` | Sitemap URL, Host |
| `public/sitemap.xml` | TUTTI i 43 URL (www.derivant.ai → www.sliderun.ai) |
| `public/sitemap-video.xml` | Video URLs |
| `src/App.tsx` | Redirect URL |
| `src/components/Header.tsx` | Logo text, alt, CTA link |
| `src/components/Footer.tsx` | Brand name, descrizione, email, copyright |
| `src/components/NewHero.tsx` | Titolo, meta, canonical, OG, CTA links, video src, Calendly link |
| `src/components/PlansPage.tsx` | Meta tags, CTA |
| `src/components/BlogPage.tsx` | Canonical, OG |
| `src/components/BlogArticlePage.tsx` | Canonical, OG, JSON-LD, CTA links, slug articolo derivant-vs-gamma |
| `src/components/ResourcesPage.tsx` | Canonical, OG |
| `src/components/ResourceArticlePage.tsx` | Article ID derivant-vs-competitors |
| `src/components/GuidaPitchDeckPage.tsx` | Canonical, OG, CTA |
| `src/components/AiAgenzieComunicazionePage.tsx` | Canonical, OG, CTA |
| `src/components/AiFashionPresentationsPage.tsx` | CTA |
| `src/components/PrivacyPage.tsx` | Titolo, canonical, testo legale, email, URL |
| `src/components/TermsPage.tsx` | Titolo, canonical, testo legale, email, URL |
| `src/components/SupportPage.tsx` | Titolo, canonical, email, link app |
| `src/components/InsightsPage.tsx` | Canonical, OG |
| `src/components/InsightArticlePage.tsx` | Canonical, OG, JSON-LD, CTA |
| `src/components/EarlyAccessPage.tsx` | Canonical, OG, redirect URL |
| `src/components/VideoComponent.tsx` | URL construction (derivant.ai → sliderun.ai) |
| `src/index.css` | Classe .derivant-outline-text |

**Asset da rinominare:**
- `public/icon/derivant-icon.png` → `public/icon/sliderun-icon.png`
- `public/VIDEO/derivant-demo.webm` → `public/VIDEO/sliderun-demo.webm`
- `public/VIDEO/derivant-demo-thumbnail.png` → `public/VIDEO/sliderun-demo-thumbnail.png`
- `public/VIDEO/derivant-linkedin.webm` → `public/VIDEO/sliderun-linkedin.webm`

**Deploy**: `git push origin main` (auto-deploy Vercel progetto derivant-website)

---

### FASE 6 — Cleanup (dopo che tutto funziona)
**Obiettivo**: rimuovere i vecchi riferimenti e impostare redirect.

1. **Rimuovere** `app.derivant.ai` e `notezai.vercel.app` dagli allowedOrigins di tutte le API
2. **Redirect 301**: configurare `derivant.ai` → `sliderun.ai` (Namecheap o Vercel)
3. **Supabase**: rimuovere vecchio redirect URL
4. **localStorage**: i vecchi key (`notezai_*`, `derivant_*`) continueranno a funzionare — gli utenti esistenti non perdono dati. Rinominarli in una futura release.
5. **Aggiornare** CLAUDE.md e MEMORY.md con i nuovi riferimenti

---

## COSE CHE NON CAMBIANO

- **Supabase URL** (`zkldtrerefgdddshtyfv.supabase.co`) — ID progetto, non legato al brand
- **API keys** (OpenRouter, Tavily, SerpAPI, Unsplash, Stripe keys, Google keys) — non legate al dominio
- **Google Service Account** (`derivant-imagen@...`) — funziona comunque, e un ID interno GCP
- **Vercel Project ID** (`prj_34LEFjba4NhCWA9LNI0A0grznQdZ`) — invariato
- **Beta codes** in Supabase (`PROMOPHARMA`, `DERIVANT-*`) — funzionano, sono stringhe nel DB
- **Office Store / Chrome Store / Figma Store** — non ancora pubblicati, si aggiornano alla submission

---

## RISCHI E MITIGAZIONI

| Rischio | Mitigazione |
|---------|------------|
| CORS blocca le API sul nuovo dominio | Fase 1 aggiunge il dominio PRIMA del DNS switch |
| Login Supabase non funziona | Fase 3 aggiunge redirect URL PRIMA di usare il nuovo dominio |
| Stripe webhook non arriva | Aggiornare endpoint Stripe in Fase 3 |
| PDF export fallisce (Doppio) | Fase 1 aggiorna callback URL |
| Utenti esistenti perdono sessione | No — Supabase auth è su supabase.co, non sul dominio app |
| SEO drop per cambio dominio sito | Redirect 301 da derivant.ai → sliderun.ai preserva il ranking |
| Link esterni rotti | Redirect 301 copre tutto |

---

## CHECKLIST VERIFICA POST-REBRAND

- [ ] `app.sliderun.ai` carica l'app
- [ ] Login/signup funziona
- [ ] Generazione presentazione funziona (CORS ok)
- [ ] Immagini si caricano (search-images CORS ok)
- [ ] Web research funziona
- [ ] PDF export funziona
- [ ] Stripe checkout funziona (redirect corretto)
- [ ] `sliderun.ai` carica il sito marketing
- [ ] Bottoni CTA sul sito puntano a `app.sliderun.ai`
- [ ] Meta tags / OG corretti (test con https://metatags.io)
- [ ] `derivant.ai` redirect 301 a `sliderun.ai`
- [ ] `app.derivant.ai` redirect 301 a `app.sliderun.ai`
- [ ] Email `info@sliderun.ai` funziona (se configurata)
