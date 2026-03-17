import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLocale } from '../i18n/useLocale';

const PlansPage = () => {
  const { t, locale, localePath } = useLocale();
  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <Helmet>
        <title>{t.meta.plansTitle}</title>
        <meta name="description" content={t.meta.plansDesc} />
        <link rel="canonical" href={locale === 'en' ? 'https://www.sliderun.ai/en/plans' : 'https://www.sliderun.ai/plans'} />
        <meta property="og:title" content={t.meta.plansTitle} />
        <meta property="og:description" content={t.meta.plansDesc} />
        <meta property="og:url" content={locale === 'en' ? 'https://www.sliderun.ai/en/plans' : 'https://www.sliderun.ai/plans'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.plansTitle} />
        <meta name="twitter:description" content={t.meta.plansDesc} />
      </Helmet>
      <section style={{ paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '48px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: 0,
              marginBottom: '16px',
            }}>
              {t.plans.title}
            </h1>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
            }}>
              {t.plans.subtitle}
            </p>
          </div>

          {/* Plans Grid */}
          <div className="plans-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}>

            {/* Free Plan */}
            <div className="pricing-card-free" style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h2 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '28px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                marginBottom: '8px',
              }}>
                Free
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
                marginBottom: '32px',
                lineHeight: 1.5,
              }}>
                {t.plans.freeDesc}
              </p>

              <div style={{ marginBottom: '32px' }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#ffffff',
                }}>
                  €0
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginLeft: '8px',
                }}>
                  {t.plans.month}
                </span>
              </div>

              <a href="https://app.sliderun.ai" style={{
                textDecoration: 'none',
                marginBottom: '32px',
                display: 'block',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                transition: 'all 0.2s ease',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.5)',
                }}>
                  {t.plans.freeCta}
                </span>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {t.plans.freeFeatures.map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontSize: '16px' }}>✓</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card-pro" style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h2 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '28px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                marginBottom: '8px',
              }}>
                Pro
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
                marginBottom: '32px',
                lineHeight: 1.5,
              }}>
                {t.plans.proDesc}
              </p>

              <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#ffffff',
                }}>
                  €9.99
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.4)',
                  textDecoration: 'line-through',
                }}>
                  €12.99
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.5)',
                }}>
                  {t.plans.month}
                </span>
              </div>

              <a href="https://app.sliderun.ai" style={{ textDecoration: 'none', marginBottom: '32px', display: 'block' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #4ecdc4 0%, #7dd3d8 50%, #b0cfe0 100%)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#0d0d0f',
                  }}>
                    {t.plans.proCta}
                  </span>
                </div>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {t.plans.proFeatures.map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#b0cfe0', fontSize: '16px' }}>✓</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card-enterprise" style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h2 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '28px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                marginBottom: '8px',
              }}>
                Enterprise
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
                marginBottom: '32px',
                lineHeight: 1.5,
              }}>
                {t.plans.entDesc}
              </p>

              <div style={{ marginBottom: '32px' }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#ffffff',
                }}>
                  Custom
                </span>
              </div>

              <a href="mailto:info@sliderun.ai?subject=Enterprise%20Demo%20Request" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginBottom: '32px', display: 'block' }}>
                <div style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#ffffff',
                  }}>
                    {t.plans.entCta}
                  </span>
                </div>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {t.plans.entFeaturesLong.map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontSize: '16px' }}>✓</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Notes */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.45)',
              margin: 0,
            }}>
              {t.plans.footer}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PlansPage;
