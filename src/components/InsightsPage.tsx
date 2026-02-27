import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { insightsArticles } from '../data/insightsArticles';

const InsightsPage = () => {
  return (
    <>
      <Helmet>
        <title>Insights | Marco Conte — Idee pratiche sull'intelligenza artificiale</title>
        <meta name="description" content="Idee pratiche sull'intelligenza artificiale. Sistemi, strategie e metodi concreti per usare l'AI nel lavoro. Di Marco Conte." />
        <link rel="canonical" href="https://www.derivant.ai/insights" />
        <meta property="og:title" content="Insights | Marco Conte" />
        <meta property="og:description" content="Idee pratiche sull'intelligenza artificiale. Sistemi, strategie e metodi concreti per usare l'AI nel lavoro." />
        <meta property="og:url" content="https://www.derivant.ai/insights" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insights | Marco Conte" />
        <meta name="twitter:description" content="Idee pratiche sull'intelligenza artificiale. Di Marco Conte." />
      </Helmet>

      <style>{`
        .insight-blog-card { transition: transform 0.5s ease, box-shadow 0.5s ease; }
        .insight-blog-card:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
        .insight-blog-card:hover .insight-card-image { transform: scale(1.05); }
      `}</style>
      <div style={{ paddingTop: '160px', paddingBottom: '96px', backgroundColor: '#0d0d0f', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(36px, 5vw, 64px)',
                color: '#ffffff',
                marginBottom: '24px',
                lineHeight: 1.1,
              }}
            >
              Insights
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '20px',
                color: 'rgba(255,255,255,0.5)',
                maxWidth: '640px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Idee pratiche sull'intelligenza artificiale.
              <br />
              <span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>Di Marco Conte.</span>
            </p>
          </div>

          {/* Articles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 500px), 1fr))', gap: '32px', maxWidth: '1100px', margin: '0 auto' }}>
            {insightsArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  className="insight-blog-card"
                  style={{
                    background: '#E8DCC8',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)',
                  }}
                >
                  <div style={{ padding: '32px 32px 0' }}>
                    {/* Meta */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'rgba(0,0,0,0.5)',
                        background: 'rgba(0,0,0,0.08)',
                        padding: '6px 14px',
                        borderRadius: '100px',
                      }}>
                        {article.author}
                      </span>
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '13px',
                        color: 'rgba(0,0,0,0.4)',
                      }}>
                        {article.readingTime} di lettura
                      </span>
                    </div>

                    {/* Title */}
                    <h2 style={{
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: 'clamp(26px, 4vw, 36px)',
                      color: '#1a1a1a',
                      lineHeight: 1.2,
                      letterSpacing: '-0.03em',
                      marginBottom: '16px',
                    }}>
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p style={{
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
                      fontWeight: 400,
                      fontSize: '17px',
                      lineHeight: 1.65,
                      color: '#4a4a4a',
                      marginBottom: '24px',
                    }}>
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Image */}
                  {article.image ? (
                    <div style={{ overflow: 'hidden', margin: '0 32px 32px', borderRadius: '16px' }}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="insight-card-image"
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{
                      margin: '0 32px 32px',
                      borderRadius: '16px',
                      height: '200px',
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.12) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightsPage;
