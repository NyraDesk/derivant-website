import React, { useEffect } from 'react';
import { ArrowLeft, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Articles data
const articles = {
  'privacy-app-note-local-first': {
    date: 'October 29, 2025',
    category: 'Privacy',
    title: 'Privacy nelle App Note: Perché i Tuoi Dati Dovrebbero Restare Sul Tuo Dispositivo',
    description: 'Scopri perché le app note cloud-based mettono a rischio i tuoi dati. Come funziona il local-first storage e perché è più sicuro per studenti e creativi.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    image2: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=600&q=80',
    image3: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=600&q=80',
    author: 'Marco Conte',
    content: `Quando prendi appunti, progetti creativi, idee personali o note di lavoro, dove vanno a finire questi dati? Se usi app popolari come Notion, Evernote o Google Keep, la risposta è semplice: sui loro server cloud.

E questo è un problema.


Il Rischio Nascosto delle App Cloud-Based

Ogni volta che scrivi una nota in un'app cloud:

1. I tuoi dati attraversano internet - Possono essere intercettati
2. Vengono salvati su server di terze parti - Non hai controllo
3. Possono essere analizzati - Per advertising, training AI, o altri scopi
4. Sono vulnerabili a breach - Hacker, leak, violazioni dati

Esempio reale: Nel 2023, Evernote ha modificato la sua privacy policy permettendo ai dipendenti di leggere le note degli utenti "per migliorare il servizio".

[IMG2]

Cosa Significa "Local-First"?

Local-first è un approccio diverso alla gestione dati:

- I tuoi dati vivono sul tuo dispositivo (computer, telefono)
- Niente cloud obbligatorio - Funziona offline
- Tu hai il controllo - Nessuno può accedere senza tuo permesso
- Zero raccolta dati - Le tue note non lasciano mai il tuo dispositivo

[IMG3]

I Vantaggi del Local-First Storage

1. Privacy Totale
Le tue note, progetti, idee personali restano solo tue. Nessuna azienda può leggerle, analizzarle o usarle per training AI.

2. Funziona Sempre
Senza internet? Nessun problema. Le tue note sono sempre accessibili perché sono sul tuo dispositivo.

3. Velocità
Non devi aspettare sync cloud. Tutto è istantaneo perché locale.

4. Zero Costi Nascosti
Niente abbonamenti cloud, limiti di storage, o upgrade forzati.

5. Controllo Completo
Vuoi fare backup? Esporta i dati. Vuoi cambiare app? I tuoi dati sono tuoi.


Come Funziona NotezAI con Local-First

NotezAI è costruito con privacy-first approach:

Storage Locale:
- Tutte le note sono salvate in IndexedDB nel tuo browser
- Zero server esterni - I dati non lasciano mai il tuo dispositivo
- Offline-first - L'app funziona completamente senza internet

AI Privacy-Conscious:
- L'AI elabora richieste tramite API sicure
- Solo il testo della richiesta va all'AI (per generare risposta)
- Il contesto delle note resta locale
- Nessuno storico salvato su server esterni

Esempio pratico:
Quando chiedi all'AI "Riassumi le mie note di biologia":
1. NotezAI legge le note dal tuo dispositivo (locale)
2. Manda solo "Riassumi: [testo note]" all'AI
3. Riceve il riassunto
4. Lo salva sul tuo dispositivo (locale)

Risultato: L'AI ti aiuta, ma le tue note originali non lasciano mai il tuo computer.


Local-First vs Cloud: Confronto

Privacy:
- Cloud App: Dati su server terzi
- NotezAI: Dati solo sul tuo dispositivo

Funziona offline:
- Cloud App: No
- NotezAI: Sì

Velocità:
- Cloud App: Dipende da internet
- NotezAI: Istantanea

Controllo dati:
- Cloud App: Limitato
- NotezAI: Totale

Costo storage:
- Cloud App: Abbonamento
- NotezAI: Gratis (illimitato locale)


Chi Dovrebbe Usare App Local-First?

Studenti:
- Note sensibili, esami, progetti personali
- Lavoro offline in biblioteca/treno

Creativi:
- Progetti in sviluppo, idee non pubbliche
- Portfolio work-in-progress

Professionisti:
- Dati clienti, strategie business
- Note confidenziali

Chiunque valorizzi privacy:
- Journal personale
- Idee imprenditoriali
- Ricerche sensibili


Il Futuro è Local-First

Sempre più persone si stanno rendendo conto che i dati personali dovrebbero restare personali.

Il movimento local-first sta crescendo perché offre:
- Privacy reale
- Controllo totale
- Velocità superiore
- Nessuna dipendenza da aziende tech

NotezAI è parte di questo movimento. Un'app che ti aiuta con l'intelligenza artificiale, ma senza compromettere la tua privacy.


Conclusione

Le tue note contengono idee, progetti, pensieri personali. Meritano di restare privati.

Con app local-first come [NotezAI](https://derivant.ai), non devi scegliere tra funzionalità moderne (come AI) e privacy. Puoi avere entrambe.

Scopri tutte le [funzionalità di NotezAI](/features) o esplora i [piani disponibili](/plans).

Note illimitate. AI integrata. Privacy garantita. Sul tuo dispositivo.`
  },
  'ai-assistants-operations': {
    date: 'January 10, 2025',
    category: 'Resources',
    title: '5 Ways AI Assistants Are Transforming Operations',
    description: 'From handling support queries to managing schedules, see how AI assistants are streamlining internal workflows.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    author: 'Marco Conte',
    content: 'Article content coming soon...'
  }
};

const BlogArticlePage = () => {
  const params = useParams();
  const slug = params['*'] || 'privacy-app-note-local-first';

  const article = articles[slug as keyof typeof articles] || articles['privacy-app-note-local-first'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Format content with proper HTML
  const formatContent = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => {
      // Check for image placeholders
      if (paragraph.trim() === '[IMG2]') {
        return (
          <div key={index} className="my-12">
            <div className="relative bg-gradient-to-br from-gray-100 via-blue-50 to-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
              <img
                src={article.image2}
                alt="Rischi privacy app note cloud - server data center"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        );
      }

      if (paragraph.trim() === '[IMG3]') {
        return (
          <div key={index} className="my-12">
            <div className="relative bg-gradient-to-br from-gray-100 via-blue-50 to-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
              <img
                src={article.image3}
                alt="Local-first storage sicuro - privacy lock security"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        );
      }

      // Check if it's a heading
      if (paragraph.trim().length > 0 && paragraph.trim().length < 100 && !paragraph.includes('-') && !paragraph.match(/^\d\./) && !paragraph.includes('[')) {
        return (
          <h2 key={index} className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight mt-16">
            {paragraph.trim()}
          </h2>
        );
      }

      // Check if it's a list
      if (paragraph.includes('\n-') || paragraph.includes('\n•')) {
        const lines = paragraph.split('\n');
        const title = lines[0];
        const items = lines.slice(1).filter(line => line.trim().startsWith('-') || line.trim().startsWith('•'));

        return (
          <div key={index} className="mb-8">
            {title && <p className="text-gray-700 text-lg leading-relaxed mb-4">{title}</p>}
            <ul className="list-none space-y-3 ml-4">
              {items.map((item, i) => (
                <li key={i} className="text-gray-700 text-lg leading-relaxed flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>{item.replace(/^[-•]\s*/, '')}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }

      // Check if it's numbered list
      if (paragraph.match(/^\d\./m)) {
        const lines = paragraph.split('\n');
        return (
          <div key={index} className="mb-8">
            {lines.map((line, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed mb-3">
                {line}
              </p>
            ))}
          </div>
        );
      }

      // Check for markdown links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      if (linkRegex.test(paragraph)) {
        const parts = [];
        let lastIndex = 0;
        let match;
        const regex = /\[([^\]]+)\]\(([^)]+)\)/g;

        while ((match = regex.exec(paragraph)) !== null) {
          // Add text before link
          if (match.index > lastIndex) {
            parts.push(paragraph.substring(lastIndex, match.index));
          }
          // Add link
          parts.push(
            <Link
              key={match.index}
              to={match[2]}
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              {match[1]}
            </Link>
          );
          lastIndex = match.index + match[0].length;
        }
        // Add remaining text
        if (lastIndex < paragraph.length) {
          parts.push(paragraph.substring(lastIndex));
        }

        return (
          <p key={index} className="text-gray-700 text-lg leading-relaxed mb-8">
            {parts}
          </p>
        );
      }

      // Regular paragraph
      return (
        <p key={index} className="text-gray-700 text-lg leading-relaxed mb-8">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Privacy nelle App Note: Perché i Tuoi Dati Dovrebbero Restare Sul Tuo Dispositivo</title>
        <meta name="description" content="Scopri perché le app note cloud-based mettono a rischio i tuoi dati. Come funziona il local-first storage e perché è più sicuro per studenti e creativi." />
        <meta name="keywords" content="privacy app note, local first, storage locale, sicurezza dati, app note offline, note privacy, IndexedDB, app note studenti" />
        <link rel="canonical" href="https://derivant.ai/blog/privacy-app-note-local-first" />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy nelle App Note: Local-First Storage" />
        <meta property="og:description" content="Perché i tuoi dati dovrebbero restare sul tuo dispositivo. Guida privacy app note." />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content="https://derivant.ai/blog/privacy-app-note-local-first" />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy nelle App Note: Local-First Storage" />
        <meta name="twitter:description" content="Perché i tuoi dati dovrebbero restare sul tuo dispositivo. Guida privacy app note." />
        <meta name="twitter:image" content={article.image} />

        {/* Schema.org Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "image": article.image,
            "datePublished": "2025-10-29",
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "NotezAI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://derivant.ai/logo.png"
              }
            },
            "description": article.description
          })}
        </script>
      </Helmet>

      <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header with Back Button */}
          <div className="mb-12 animate-fade-in-up">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-3 text-black hover:text-black/70 transition-colors group bg-gray-100 backdrop-blur-xl border border-gray-300 rounded-full px-6 py-3 mb-8"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back To All Blogs</span>
            </Link>

            <div className="flex items-center space-x-4 mb-8">
              <span className="text-gray-600 text-lg">{article.date}</span>
              <div
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  border: '1px solid rgba(0, 0, 0, 0.2)'
                }}
              >
                {article.category}
              </div>
            </div>
          </div>

          {/* Article Title */}
          <div className="mb-12 animate-fade-in-up animation-delay-200">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
              {article.description}
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-16 animate-fade-in-up animation-delay-300">
            <div className="relative bg-gradient-to-br from-gray-100 via-blue-50 to-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-blue-100/30 rounded-3xl transform translate-x-2 translate-y-2 blur-xl -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-200/20 rounded-3xl transform translate-x-1 translate-y-1 blur-lg -z-10"></div>

              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="animate-fade-in-up animation-delay-400">
            <div className="prose prose-lg max-w-none">
              {formatContent(article.content)}
            </div>

            {/* CTA Section */}
            <div className="mt-16 mb-12">
              <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  Pronto a Proteggere i Tuoi Dati?
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Inizia con NotezAI oggi. Note illimitate, AI integrata, privacy garantita.
                </p>
                <Link
                  to="/early-access"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Inizia con NotezAI
                </Link>
              </div>
            </div>

            {/* Author */}
            <div className="mt-16 p-6 bg-gray-100 backdrop-blur-xl border border-gray-200 rounded-2xl">
              <p className="text-gray-600 text-sm mb-2">Scritto da</p>
              <p className="text-black text-lg font-medium">{article.author}, Founder di NotezAI</p>
            </div>

            {/* Share Section */}
            <div className="mt-16 animate-fade-in-up animation-delay-500">
              <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-gray-50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-blue-100/30 rounded-3xl transform translate-x-2 translate-y-2 blur-xl -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-200/20 rounded-3xl transform translate-x-1 translate-y-1 blur-lg -z-10"></div>

                <div className="flex flex-col md:flex-row items-center justify-between">
                  <h3 className="text-2xl font-bold text-black mb-6 md:mb-0">Share Blog</h3>

                  <div className="flex items-center space-x-4">
                    {/* Facebook */}
                    <button className="group w-12 h-12 bg-gray-200 backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Facebook className="w-5 h-5 text-gray-700 group-hover:text-white drop-shadow-lg" />
                    </button>

                    {/* Twitter */}
                    <button className="group w-12 h-12 bg-gray-200 backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center hover:bg-sky-500 hover:border-sky-400 transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Twitter className="w-5 h-5 text-gray-700 group-hover:text-white drop-shadow-lg" />
                    </button>

                    {/* LinkedIn */}
                    <button className="group w-12 h-12 bg-gray-200 backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-700 hover:border-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-white drop-shadow-lg" />
                    </button>

                    {/* WhatsApp */}
                    <button className="group w-12 h-12 bg-gray-200 backdrop-blur-sm border border-gray-300 rounded-full flex items-center justify-center hover:bg-green-600 hover:border-green-500 transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <MessageCircle className="w-5 h-5 text-gray-700 group-hover:text-white drop-shadow-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticlePage;
