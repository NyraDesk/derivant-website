import React, { useEffect } from 'react';
import { ArrowLeft, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Articles data
const articles = {
  'privacy-app-note-local-first': {
    date: 'January 27, 2026',
    category: 'Privacy',
    title: 'Privacy nelle Presentazioni AI: Come Derivant Protegge i Tuoi Dati',
    description: 'Scopri come funziona la privacy nelle piattaforme AI per presentazioni e perché Derivant è costruito con un approccio privacy-first.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    image2: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=600&q=80',
    image3: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=600&q=80',
    author: 'Marco Conte',
    content: `Quando crei una presentazione con l'AI, dove vanno a finire i tuoi dati? Pitch deck con proiezioni finanziarie, moodboard con idee creative non pubblicate, presentazioni commerciali con informazioni riservate.

La risposta dipende dalla piattaforma che usi.


Il Problema delle Piattaforme AI Generiche

Molte piattaforme di presentazione AI:

1. Salvano tutto sui loro server - Le tue slide, i tuoi testi, le tue immagini
2. Usano i tuoi contenuti per training - I tuoi pitch deck potrebbero "ispirare" altri utenti
3. Non garantiscono cancellazione - I dati possono restare anche dopo che elimini il progetto
4. Condividono con terze parti - Analytics, advertising, partner commerciali

Per un'agenzia o una startup, questo è un rischio concreto.

[IMG2]

Come Derivant Gestisce i Tuoi Dati

Derivant è costruito con un approccio privacy-conscious:

Dati Minimi:
- Salviamo solo ciò che serve per il funzionamento
- Le tue presentazioni sono tue
- Nessun training AI sui tuoi contenuti

Elaborazione Sicura:
- L'AI elabora le richieste senza memorizzare il contesto
- Le tue idee creative restano protette
- Zero condivisione con terze parti per scopi commerciali

Controllo Totale:
- Esporta le tue presentazioni in qualsiasi momento
- Elimina i tuoi progetti quando vuoi
- Trasparenza completa su cosa facciamo con i dati

[IMG3]

Perché la Privacy è Cruciale per i Professionisti

Startup:
- Pitch deck con valutazioni e proiezioni finanziarie
- Strategie go-to-market non pubbliche
- Round di investimento confidenziali

Agenzie:
- Proposte creative per clienti
- Strategy deck con dati sensibili
- Moodboard per progetti in sviluppo

Fashion & Luxury:
- Collezioni non ancora lanciate
- Trend forecasting proprietari
- Brand deck per partner esclusivi


Il Nostro Impegno

Derivant non è solo un tool per creare presentazioni belle velocemente. È uno strumento costruito per professionisti che lavorano con informazioni sensibili.

Non vendiamo i tuoi dati. Non usiamo i tuoi contenuti per training. Non condividiamo con terze parti.

La tua creatività resta tua.


Conclusione

In un mondo dove i dati sono il nuovo petrolio, scegliere strumenti che rispettano la tua privacy non è paranoia. È buon senso professionale.

Con Derivant, puoi creare presentazioni di livello elite senza compromettere la sicurezza delle tue idee.

Scopri i [piani disponibili](/plans) o inizia subito con [Early Access](/early-access).`
  },
  'derivant-vs-gamma-powerpoint-2026': {
    date: 'January 27, 2026',
    category: 'Comparison',
    title: 'Derivant vs Gamma vs PowerPoint: Perché l\'AI Generativa non basta più nel 2026',
    description: 'Scopri perché Derivant è l\'alternativa professionale a Gamma e PowerPoint per chi cerca un design d\'elite e risultati da studio creativo.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600&q=80',
    author: 'Marco Conte',
    content: `Il mercato dei software per presentazioni è saturo. Da un lato abbiamo il "vecchio" PowerPoint, potente ma manuale e frustrante; dall'altro la prima ondata di AI (come Gamma o Tome), che crea slide velocemente ma spesso con un design generico, caotico e poco professionale.

Derivant nasce nel vuoto lasciato da questi strumenti: l'unione tra la velocità dell'AI e la precisione del Designer-Thinking.


I 3 Punti di Svolta

[COMPARISON_TABLE]


Perché Derivant vince sulla "Aura" delle Slide

Mentre gli altri strumenti si limitano a riempire dei box con del testo generato, Derivant ragiona sulla gerarchia visiva.


Non solo testo

L'AI di Derivant capisce l'obiettivo della slide (è un Pitch? Una demo prodotto?) e adatta il layout di conseguenza. Non genera contenuto a caso: costruisce una narrazione visiva.


Design-Thinking Integrato

Ogni slide segue i principi del design moderno:
- Spazio bianco calibrato
- Contrasto e leggibilità
- Tipografia d'eccellenza
- Coerenza estetica dall'inizio alla fine


Il problema di Gamma e Tome

Le prime AI per presentazioni hanno risolto un problema: la velocità. Ma ne hanno creato un altro: l'omogeneità.

Tutte le presentazioni create con questi tool sembrano uguali. Lo stesso layout, gli stessi colori, lo stesso "sapore" generico. Quando un investitore vede centinaia di pitch deck, riconosce immediatamente un deck "fatto con l'AI".

Derivant è diverso. Il nostro motore è stato addestrato per produrre risultati che sembrano usciti da uno studio creativo, non da un template.


PowerPoint: Potente ma Obsoleto

PowerPoint rimane uno strumento incredibilmente potente. Il problema? Richiede ore di lavoro manuale per ottenere risultati professionali.

Nel 2026, nessun founder o creative director ha tempo di allineare box per ore. La competizione si gioca sulla velocità di esecuzione, non sulla capacità di usare uno strumento complesso.


La scelta per chi non accetta compromessi

Se hai bisogno di una presentazione "giusta per finire il lavoro", qualunque AI va bene.

Se hai bisogno di una presentazione che chiuda il deal, che incanti gli investitori e che trasmetta un'immagine d'eccellenza, la scelta è Derivant.

Non è questione di funzionalità. È questione di standard.

Scopri i [piani disponibili](/plans) o [inizia gratis oggi](/early-access).`
  },
  'ai-assistants-operations': {
    date: 'January 10, 2026',
    category: 'Resources',
    title: '5 Modi in cui l\'AI sta Trasformando le Presentazioni Professionali',
    description: 'Dall\'ideazione alla delivery, come l\'intelligenza artificiale sta rivoluzionando il modo in cui creiamo e presentiamo.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    author: 'Marco Conte',
    content: `L'intelligenza artificiale non sta solo automatizzando la creazione di slide. Sta ridefinendo completamente il workflow delle presentazioni professionali.

Ecco 5 modi concreti in cui l'AI sta cambiando le regole del gioco.


1. Dalla Pagina Bianca al Primo Draft in Secondi

Il blocco creativo è reale. Fissare una slide vuota può paralizzare anche i professionisti più esperti.

L'AI elimina questo problema. Dai un outline testuale e ottieni una struttura visiva professionale istantaneamente. Non è magia: è un punto di partenza solido su cui costruire.


2. Coerenza Estetica Automatica

Il problema più comune nelle presentazioni? Slide che sembrano fatte da persone diverse.

L'AI mantiene un "filo rosso" estetico su tutto il deck. Stessi font, stessi colori, stessa gerarchia visiva. Dall'inizio alla fine.


3. Design Professionale Senza Designer

Non tutti hanno un team grafico. Non tutti possono permettersi uno studio creativo per ogni pitch.

L'AI democratizza il design di livello elite. Risultati da agenzia, accessibili a tutti.


4. Iterazioni Rapide

Devi cambiare tono? Passare da "corporate" a "startup"? Adattare per un pubblico diverso?

Con l'AI, le iterazioni che richiedevano ore ora richiedono minuti.


5. Focus sulla Strategia, Non sull'Esecuzione

Il vero valore di una presentazione non è nelle slide. È nel messaggio, nella strategia, nella storia che racconti.

L'AI si occupa dell'esecuzione tecnica. Tu ti concentri su ciò che conta davvero.


Il Futuro è Già Qui

Derivant incarna questa visione. Un tool che combina la velocità dell'AI con l'estetica di uno studio creativo.

Non rimpiazza la tua creatività. La amplifica.

Scopri come su [derivant.ai](/).`
  }
};

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const articleSlug = slug || 'privacy-app-note-local-first';

  const article = articles[articleSlug as keyof typeof articles] || articles['privacy-app-note-local-first'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleSlug]);

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
                alt="Sicurezza dati presentazioni AI"
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
                alt="Privacy e sicurezza Derivant"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        );
      }

      // Comparison Table for competitor article
      if (paragraph.trim() === '[COMPARISON_TABLE]') {
        return (
          <div key={index} className="my-12 overflow-x-auto">
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '15px',
              minWidth: '600px',
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                  <th style={{ padding: '16px 12px', textAlign: 'left', fontWeight: 700, color: '#111' }}>Caratteristica</th>
                  <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 600, color: '#6b7280' }}>PowerPoint</th>
                  <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 600, color: '#6b7280' }}>AI Tradizionale<br/><span style={{ fontSize: '12px', fontWeight: 400 }}>(Gamma/Tome)</span></th>
                  <th style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 700, color: '#000', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '8px 8px 0 0' }}>Derivant AI</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 500, color: '#374151' }}>Velocità</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#ef4444' }}>Bassa<br/><span style={{ fontSize: '12px', color: '#9ca3af' }}>Ore di lavoro</span></td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#22c55e' }}>Alta<br/><span style={{ fontSize: '12px', color: '#9ca3af' }}>Secondi</span></td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#22c55e', background: '#f0f9ff', fontWeight: 600 }}>Alta<br/><span style={{ fontSize: '12px', color: '#0ea5e9' }}>Secondi</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 500, color: '#374151' }}>Qualità Design</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#f59e0b' }}>Variabile<br/><span style={{ fontSize: '12px', color: '#9ca3af' }}>Dipende dall'utente</span></td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#f59e0b' }}>Generica<br/><span style={{ fontSize: '12px', color: '#9ca3af' }}>AI-look</span></td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#000', background: '#f0f9ff', fontWeight: 600 }}>Studio-Quality<br/><span style={{ fontSize: '12px', color: '#0ea5e9' }}>Elite</span></td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 500, color: '#374151' }}>Controllo</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#f59e0b' }}>Totale<br/><span style={{ fontSize: '12px', color: '#9ca3af' }}>Ma complesso</span></td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#ef4444' }}>Limitato<br/><span style={{ fontSize: '12px', color: '#9ca3af' }}>Rigido</span></td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#000', background: '#f0f9ff', fontWeight: 600 }}>Intelligente<br/><span style={{ fontSize: '12px', color: '#0ea5e9' }}>Intuitivo</span></td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 12px', fontWeight: 500, color: '#374151' }}>Focus</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#6b7280' }}>Generico<br/><span style={{ fontSize: '12px', color: '#9ca3af' }}>Strumento universale</span></td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#6b7280' }}>Velocità<br/><span style={{ fontSize: '12px', color: '#9ca3af' }}>"Basta che sia fatto"</span></td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#000', background: '#f0f9ff', fontWeight: 600, borderRadius: '0 0 8px 8px' }}>Strategy<br/><span style={{ fontSize: '12px', color: '#0ea5e9' }}>Brand & Pitch</span></td>
                </tr>
              </tbody>
            </table>
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
        <title>{article.title} | Derivant.ai</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content="AI presentazioni, privacy presentazioni, pitch deck AI, Derivant, presentazioni professionali" />
        <link rel="canonical" href={`https://www.derivant.ai/blog/${articleSlug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://www.derivant.ai/blog/${articleSlug}`} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.image} />

        {/* Schema.org Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "image": article.image,
            "datePublished": "2026-01-27T00:00:00+01:00",
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Derivant",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.derivant.ai/logo.png"
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
                  Pronto a Creare Presentazioni Elite?
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Inizia con Derivant oggi. AI potente, design professionale, privacy garantita.
                </p>
                <Link
                  to="/early-access"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Inizia Gratis
                </Link>
              </div>
            </div>

            {/* Author */}
            <div className="mt-16 p-6 bg-gray-100 backdrop-blur-xl border border-gray-200 rounded-2xl">
              <p className="text-gray-600 text-sm mb-2">Scritto da</p>
              <p className="text-black text-lg font-medium">{article.author}, Founder di Derivant</p>
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
