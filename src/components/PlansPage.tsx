import React from 'react';
import { Link } from 'react-router-dom';

const PlansPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <section style={{ paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '48px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: 0,
              marginBottom: '16px',
            }}>
              Choose your plan
            </h2>
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
            <div className="glass-card" style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255, 255, 255, 0.03)',
            }}>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '28px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                marginBottom: '8px',
              }}>
                Free
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
                marginBottom: '32px',
                lineHeight: 1.5,
              }}>
                Perfect for getting started with AI presentations
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
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginLeft: '8px',
                }}>
                  / month
                </span>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                marginBottom: '32px',
              }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '15px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.5)',
                }}>
                  Current Plan
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>400 credits/month</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Up to 10 presentations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Basic templates</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Export with watermark</span>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="glass-card" style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255, 255, 255, 0.03)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '100px',
                padding: '6px 14px',
              }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  Launch Offer
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '28px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                marginBottom: '8px',
              }}>
                Pro
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
                marginBottom: '32px',
                lineHeight: 1.5,
              }}>
                For professionals who need more power
              </p>

              <div style={{ marginBottom: '32px' }}>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#ffffff',
                }}>
                  €6.99
                </span>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginLeft: '8px',
                }}>
                  / month
                </span>
              </div>

              <Link to="/early-access" style={{ textDecoration: 'none', marginBottom: '32px' }}>
                <div style={{
                  background: '#3B82F6',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#ffffff',
                  }}>
                    Upgrade to Pro
                  </span>
                </div>
              </Link>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>2,400 credits/month</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Up to 60 presentations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>All templates</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>PDF export without watermark</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Priority support</span>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-card" style={{
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(255, 255, 255, 0.03)',
            }}>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '28px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                marginBottom: '8px',
              }}>
                Enterprise
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
                marginBottom: '32px',
                lineHeight: 1.5,
              }}>
                For teams and organizations at scale
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

              <Link to="/early-access" style={{ textDecoration: 'none', marginBottom: '32px' }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#ffffff',
                  }}>
                    Contact Sales
                  </span>
                </div>
              </Link>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Unlimited credits</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Unlimited presentations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Custom templates</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Team collaboration</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Dedicated support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>SSO & API access</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Notes */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.4)',
              margin: 0,
              marginBottom: '12px',
              fontStyle: 'italic',
            }}>
              * Unlimited AI creations refer to daily use within fair use. Premium features (Agent, advanced models) require credits.
            </p>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.5)',
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
