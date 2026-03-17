import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocale } from '../i18n/useLocale';

const EnterprisePage = () => {
  const { t, locale, localePath } = useLocale();
  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <Helmet>
        <title>{t.meta.enterpriseTitle}</title>
        <meta name="description" content={t.meta.enterpriseDesc} />
        <link rel="canonical" href={locale === 'en' ? 'https://www.sliderun.ai/en/enterprise' : 'https://www.sliderun.ai/enterprise'} />
        <meta property="og:title" content={t.meta.enterpriseTitle} />
        <meta property="og:description" content={t.meta.enterpriseDesc} />
        <meta property="og:url" content={locale === 'en' ? 'https://www.sliderun.ai/en/enterprise' : 'https://www.sliderun.ai/enterprise'} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '0', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="mobile-section-title" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(32px, 7vw, 60px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: 0,
            marginBottom: '32px',
          }}>
            {t.enterprise.title}
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
            {t.enterprise.desc}
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
              {t.enterprise.stat1Title}
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              {t.enterprise.stat1Desc}
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
              {t.enterprise.stat2Title}
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              {t.enterprise.stat2Desc}
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
            {t.enterprise.ctaDemo}
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '36px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            textAlign: 'center',
            margin: 0,
            marginBottom: '60px',
          }}>
            {t.enterprisePage.featuresTitle}
          </h2>

          <div className="plans-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}>
            {t.enterprisePage.features.map((feat) => (
              <div key={feat.title} style={{
                padding: '40px 32px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0,
                  marginBottom: '12px',
                }}>
                  {feat.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.6)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '36px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: 0,
            marginBottom: '48px',
          }}>
            {t.enterprisePage.useCasesTitle}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
            {t.enterprisePage.useCases.map((uc) => (
              <div key={uc.label} style={{
                padding: '32px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: 0,
                  marginBottom: '8px',
                }}>
                  {uc.label}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.6)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
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
          {t.enterprisePage.bottomTitle}
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
          {t.enterprisePage.bottomDesc}
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
          {t.enterprise.ctaDemo}
        </a>
      </section>
    </div>
  );
};

export default EnterprisePage;
