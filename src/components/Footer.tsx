import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: '18px',
              letterSpacing: '-0.03em',
              color: '#fff',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: '16px',
            }}>
              DERIVANT
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.5)',
              lineHeight: 1.7,
              margin: 0,
            }}>
              The AI Presentation Builder that combines strategy and design. Transform your ideas into professional presentations, pitch decks, and moodboards in minutes.
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
              Product
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="/#enterprise" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Enterprise
              </a>
              <Link to="/plans" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Pricing
              </Link>
              <Link to="/blog" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Blog
              </Link>
              <Link to="/resources" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Resources
              </Link>
              <Link to="/guida-pitch-deck-2026" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Guida Pitch Deck 2026
              </Link>
              <Link to="/ai-agenzie-comunicazione" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                AI per Agenzie
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
              <a href="#" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                What is Derivant?
              </a>
              <a href="#" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Do credits expire?
              </a>
              <a href="#" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Can I cancel anytime?
              </a>
              <a href="#" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                How does AI work in blocks?
              </a>
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
              Support
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="#" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Help Center
              </a>
              <a href="mailto:info@derivant.it" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Contact Us
              </a>
              <a href="#" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Privacy Policy
              </a>
              <a href="#" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}>
                Terms of Service
              </a>
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
            &copy; 2026 Derivant AI. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.35)',
            margin: 0,
          }}>
            Made for strategy and design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
