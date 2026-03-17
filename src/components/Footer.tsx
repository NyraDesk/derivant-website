import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/useLocale';

const Footer = () => {
  const { t, localePath } = useLocale();
  return (
    <footer style={{
      background: '#000',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '80px 24px 40px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '48px',
          marginBottom: '60px',
        }}>

          {/* Column 1: Brand & Vision */}
          <div>
            <p style={{ margin: 0, marginBottom: '16px' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '18px', letterSpacing: '-0.01em' }}>
                <span style={{ color: '#ffffff' }}>Slide</span>
                <span style={{ color: '#b0cfe0' }}>Run</span>
                <span style={{ color: 'rgba(255,255,255,0.82)', fontWeight: 400 }}>.ai</span>
              </span>
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.5)',
              lineHeight: 1.7,
              margin: 0,
            }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#ffffff',
              margin: 0,
              marginBottom: '20px',
            }}>
              {t.footer.product}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href={localePath('/enterprise')} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Enterprise
              </a>
              <Link to={localePath('/plans')} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                {t.header.plans}
              </Link>
              <Link to={localePath('/blog')} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Blog
              </Link>
              <Link to={localePath('/resources')} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Risorse
              </Link>
              <Link to={localePath('/guida-pitch-deck-2026')} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Guida Pitch Deck 2026
              </Link>
              <Link to={localePath('/ai-agenzie-comunicazione')} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                AI per Agenzie
              </Link>
              <Link to={localePath('/insights')} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Insights
              </Link>
            </div>
          </div>

          {/* Column 3: FAQ */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#ffffff',
              margin: 0,
              marginBottom: '20px',
            }}>
              FAQ
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
              }}>
                Cos'è SlideRun?
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
              }}>
                I crediti scadono?
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
              }}>
                Posso cancellare quando voglio?
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
              }}>
                Come funziona l'AI?
              </span>
            </div>
          </div>

          {/* Column 4: Support */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              color: '#ffffff',
              margin: 0,
              marginBottom: '20px',
            }}>
              {t.footer.contacts}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="mailto:info@sliderun.ai" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                info@sliderun.ai
              </a>
              <Link to={localePath('/support')} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Support
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.35)',
            margin: 0,
          }}>
            &copy; 2026 <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, letterSpacing: '-0.01em' }}><span style={{ color: '#ffffff' }}>Slide</span><span style={{ color: '#b0cfe0' }}>Run</span><span style={{ color: 'rgba(255,255,255,0.82)', fontWeight: 400 }}>.ai</span></span>. {t.footer.copyright}
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}>
            <Link to={localePath('/privacy')} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}>
              Privacy Policy
            </Link>
            <Link to={localePath('/terms')} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.35)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}>
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
