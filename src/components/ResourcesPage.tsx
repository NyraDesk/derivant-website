import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ResourcesPage = () => {
  const articles = [
    {
      slug: 'guida-pitch-deck-2026',
      title: 'Pitch Deck 2026: La Guida Definitiva per Startup',
      description: 'Come l\'AI sta cambiando le regole del pitch. I 3 pilastri per un deck vincente.',
      date: '2026-01-27',
      isExternal: true,
    },
    {
      slug: 'ai-fashion-presentations',
      title: 'AI per il Fashion: Presentazioni di Alta Moda',
      description: 'Come creare lookbook e presentazioni luxury mantenendo un\'estetica d\'élite.',
      date: '2026-01-27',
      isExternal: true,
    },
    {
      slug: 'ai-agenzie-comunicazione',
      title: 'AI per Agenzie di Comunicazione',
      description: 'Scalare la creazione di Strategy Deck senza aumentare i costi.',
      date: '2026-01-27',
      isExternal: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Risorse | Derivant AI — Guide e Approfondimenti</title>
        <meta name="description" content="Guide pratiche su pitch deck, presentazioni per agenzie e strategie AI per la comunicazione professionale." />
        <link rel="canonical" href="https://www.derivant.ai/resources" />
        <meta property="og:title" content="Risorse | Derivant AI" />
        <meta property="og:description" content="Guide pratiche su pitch deck, presentazioni per agenzie e strategie AI per la comunicazione professionale." />
        <meta property="og:url" content="https://www.derivant.ai/resources" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Risorse | Derivant AI" />
        <meta name="twitter:description" content="Guide pratiche su pitch deck, presentazioni per agenzie e comunicazione professionale." />
      </Helmet>
    <div style={{
      minHeight: '100vh',
      background: '#000',
      paddingTop: '140px',
      paddingBottom: '100px',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Page Title */}
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '48px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          margin: 0,
          marginBottom: '16px',
        }}>
          Resources
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '18px',
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.6)',
          margin: 0,
          marginBottom: '60px',
          lineHeight: 1.6,
        }}>
          Insights, comparisons, and guides to help you create better presentations.
        </p>

        {/* Articles List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={article.isExternal ? `/${article.slug}` : `/resources/${article.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <article style={{
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.02)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
              >
                <time style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.4)',
                  display: 'block',
                  marginBottom: '12px',
                }}>
                  {article.date}
                </time>
                <h2 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: 0,
                  marginBottom: '12px',
                }}>
                  {article.title}
                </h2>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.6)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  {article.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ResourcesPage;
