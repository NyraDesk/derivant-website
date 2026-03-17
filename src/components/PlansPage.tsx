import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PlansPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <Helmet>
        <title>Piani e Prezzi | SlideRun AI — Presentazioni Professionali</title>
        <meta name="description" content="Scegli il piano SlideRun perfetto per te. Genera presentazioni professionali con AI: brand kit, web research, esportazione PPTX e PDF." />
        <link rel="canonical" href="https://www.sliderun.ai/plans" />
        <meta property="og:title" content="Piani e Prezzi | SlideRun AI" />
        <meta property="og:description" content="Scegli il piano SlideRun perfetto per te. Genera presentazioni professionali con AI." />
        <meta property="og:url" content="https://www.sliderun.ai/plans" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Piani e Prezzi | SlideRun AI" />
        <meta name="twitter:description" content="Scegli il piano SlideRun perfetto per te. Genera presentazioni professionali con AI." />
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
              Choose your plan
            </h1>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
            }}>
              Unlock the full power of AI presentations
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
            <div style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              background: 'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
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
                To try AI presentations
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
                  / month
                </span>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                marginBottom: '32px',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.45)',
                }}>
                  Current plan
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['100 credits — 2 full presentations', 'All templates', 'PDF export with watermark'].map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontSize: '16px' }}>✓</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(255, 255, 255, 0.7)' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Plan */}
            <div style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              background: 'linear-gradient(160deg, rgba(176,207,224,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(176,207,224,0.3)',
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
                For professionals who create regularly
              </p>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ marginBottom: '4px' }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.4)',
                    textDecoration: 'line-through',
                  }}>
                    €12.99
                  </span>
                </div>
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
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginLeft: '8px',
                }}>
                  / month
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
                    Upgrade to Pro
                  </span>
                </div>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  '400 credits / month — 10 full presentations',
                  'Advanced AI models — Opus 4.5',
                  'All premium templates',
                  'Brand Kit — logo, colors, fonts',
                  'Editable PowerPoint export',
                  'PDF export without watermark',
                  'Priority support',
                ].map((feat) => (
                  <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#b0cfe0', fontSize: '16px' }}>✓</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Plan */}
            <div style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              background: 'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
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
                For teams that present every day
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

              <a href="https://calendly.com/sliderun/new-meeting" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginBottom: '32px', display: 'block' }}>
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
                    Talk to Sales
                  </span>
                </div>
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Everything in Pro, plus:',
                  'Custom design templates — your brand, your layouts',
                  'Team workspace — shared folders, collaboration, asset library',
                  'White-label export — no SlideRun branding',
                  'SSO & admin controls',
                  'API access — integrate with your existing workflow',
                  'Dedicated account manager',
                  'Custom integrations (Slack, Notion, Google Drive)',
                ].map((feat) => (
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
              Cancel anytime. No questions asked.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PlansPage;
