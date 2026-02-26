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
        .insight-card-link:hover .insight-card { padding-left: 16px; }
        .insight-card-link:hover .insight-card-title { color: rgba(255,255,255,0.7) !important; }
        .insight-card-link:hover .insight-card-arrow { opacity: 1 !important; }
        .insight-card-link:hover .insight-card-arrow svg { transform: translateX(4px); }
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

          {/* Articles List */}
          <div style={{ maxWidth: '768px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {insightsArticles.map((article, index) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                className="insight-card-link"
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <article
                  className="insight-card"
                  style={{
                    padding: '40px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    transition: 'padding-left 0.3s ease',
                    ...(index === 0 ? { borderTop: '1px solid rgba(255,255,255,0.08)' } : {}),
                  }}
                >
                  {/* Date + Reading time + Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}
                    >
                      {article.dateFormatted}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}
                    >
                      {article.readingTime} di lettura
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}
                    >
                      {article.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="insight-card-title"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      fontSize: 'clamp(24px, 3vw, 30px)',
                      color: '#ffffff',
                      marginBottom: '12px',
                      lineHeight: 1.25,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Read arrow */}
                  <div
                    className="insight-card-arrow"
                    style={{
                      marginTop: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#B8A4C9',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <span
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 500 }}
                    >
                      Leggi
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transition: 'transform 0.3s ease' }}>
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightsPage;
