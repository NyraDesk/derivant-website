import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const serverDir = path.resolve(__dirname, '../dist/server');

// All routes to pre-render
const routes = [
  '/',
  '/plans',
  '/blog',
  '/blog/privacy-app-note-local-first',
  '/blog/derivant-vs-gamma-powerpoint-2026',
  '/blog/ai-assistants-operations',
  '/blog/automatizzare-presentazioni-aziendali-ai',
  '/blog/presentazioni-consulenti-ai-risparmio-tempo',
  '/blog/migliori-ai-presentazioni-2026',
  '/blog/creare-presentazioni-ai-guida',
  '/blog/generatore-presentazioni-ai-gratis',
  '/blog/automatizzare-presentazioni-azienda',
  '/blog/presentazioni-pharma-ai-compliant',
  '/blog/presentazioni-hr-onboarding-formazione',
  '/blog/presentazioni-formazione-aziendale-ai',
  '/blog/presentazioni-sales-team-ai',
  '/blog/pitch-deck-startup-ai-investitori',
  '/early-access',
  '/resources',
  '/guida-pitch-deck-2026',
  '/ai-agenzie-comunicazione',
];

async function prerender() {
  // Import the server-rendered app
  const { render } = await import(path.join(serverDir, 'entry-server.js'));

  // Read the base HTML template
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  console.log(`Pre-rendering ${routes.length} routes...\n`);

  for (const route of routes) {
    try {
      const { html, helmet } = render(route);

      // Build the full page HTML
      let page = template;

      // Inject rendered content into the root div
      page = page.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Inject helmet meta tags into <head> if available
      if (helmet) {
        // Replace existing <title> with helmet title if present
        const helmetTitle = helmet.title?.toString() || '';
        if (helmetTitle) {
          page = page.replace(/<title>[^<]*<\/title>/, helmetTitle);
        }

        // Replace existing meta description with helmet version
        const helmetMeta = helmet.meta?.toString() || '';
        if (helmetMeta) {
          // Remove existing meta description to avoid duplicates
          page = page.replace(/<meta\s+name="description"[^>]*\/?>/, '');
          // Remove existing OG tags that helmet will replace
          page = page.replace(/<meta\s+property="og:title"[^>]*\/?>/, '');
          page = page.replace(/<meta\s+property="og:description"[^>]*\/?>/, '');
          page = page.replace(/<meta\s+name="twitter:title"[^>]*\/?>/, '');
          page = page.replace(/<meta\s+name="twitter:description"[^>]*\/?>/, '');
        }

        const headTags = [
          helmetMeta,
          helmet.link?.toString() || '',
        ].filter(Boolean).join('\n    ');

        if (headTags) {
          page = page.replace('</head>', `    ${headTags}\n  </head>`);
        }
      }

      // Write to the correct path
      const filePath = route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route, 'index.html');

      const dir = path.dirname(filePath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(filePath, page);

      console.log(`  ✓ ${route}`);
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`);
    }
  }

  // Clean up server build (not needed in production)
  fs.rmSync(serverDir, { recursive: true, force: true });

  // Build Vercel output structure (bypasses Vite adapter's SPA catch-all)
  const vercelOutputDir = path.resolve(__dirname, '../.vercel/output');
  const vercelStaticDir = path.join(vercelOutputDir, 'static');

  // Clean previous output
  fs.rmSync(vercelOutputDir, { recursive: true, force: true });

  // Copy dist/ to .vercel/output/static/
  copyDirSync(distDir, vercelStaticDir);

  // Read vercel.json for redirects
  const vercelJsonPath = path.resolve(__dirname, '../vercel.json');
  const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'));

  // Create config.json with routing rules
  const config = {
    version: 3,
    routes: [
      // Redirects from vercel.json
      ...(vercelJson.redirects || []).map(r => ({
        src: r.source,
        headers: { Location: r.destination },
        status: r.permanent ? 308 : 307,
      })),
      // Serve static files (assets, images, etc.)
      { handle: 'filesystem' },
      // SPA fallback only for unknown routes
      { src: '/(.*)', dest: '/index.html', status: 200 },
    ],
  };

  fs.writeFileSync(
    path.join(vercelOutputDir, 'config.json'),
    JSON.stringify(config, null, 2)
  );

  console.log('Vercel output structure created.');
  console.log('\nPre-rendering complete!');
}

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

prerender().catch(console.error);
