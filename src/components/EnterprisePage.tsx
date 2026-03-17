import React from 'react';
import { Helmet } from 'react-helmet-async';

const EnterprisePage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <Helmet>
        <title>Enterprise | SlideRun AI — Presentazioni AI per Aziende e Agenzie</title>
        <meta name="description" content="SlideRun AI per team aziendali e agenzie. Web research automatica, brand kit integrato, generazione in pochi minuti. Prenota una demo." />
        <link rel="canonical" href="https://www.sliderun.ai/enterprise" />
        <meta property="og:title" content="Enterprise | SlideRun AI" />
        <meta property="og:description" content="Automatizza la produzione di presentazioni per il tuo team. Brand kit, web research, AI avanzata." />
        <meta property="og:url" content="https://www.sliderun.ai/enterprise" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '0', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '60px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: 0,
            marginBottom: '32px',
          }}>
            Automatizza i processi. Scala i risultati.
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '21px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1.7,
            margin: '0 auto',
            marginBottom: '60px',
            maxWidth: '680px',
          }}>
            Web research automatica, brand kit integrato, generazione in pochi minuti. La tecnologia che serve al tuo team per produrre di più, in meno tempo.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="enterprise-features" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '60px',
          maxWidth: '700px',
          margin: '0 auto 60px',
        }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              marginBottom: '8px',
            }}>
              Riduzione tempi 80%
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              Da ore di lavoro a pochi minuti. Per ogni singola presentazione.
            </p>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              marginBottom: '8px',
            }}>
              100% on-brand
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              Ogni output rispetta colori, font e linee guida. Automaticamente.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="mailto:info@sliderun.ai?subject=Enterprise%20Demo%20Request"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '15px',
              fontWeight: 400,
              color: '#ffffff',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '16px 36px',
              borderRadius: '100px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.2s ease',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            }}
          >
            Prenota una demo
          </a>
        </div>
      </section>


      {/* Bottom CTA */}
      <section style={{ padding: '80px 24px 120px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '36px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          margin: 0,
          marginBottom: '16px',
        }}>
          Pronto a scalare la produzione?
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '18px',
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.6)',
          margin: '0 auto',
          marginBottom: '40px',
          maxWidth: '500px',
          lineHeight: 1.6,
        }}>
          Parla con il nostro team per una demo personalizzata sulle esigenze del tuo business.
        </p>
        <a
          href="mailto:info@sliderun.ai?subject=Enterprise%20Demo%20Request"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '15px',
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            padding: '16px 36px',
            borderRadius: '100px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.2s ease',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          }}
        >
          Prenota una demo
        </a>
      </section>
    </div>
  );
};

export default EnterprisePage;
