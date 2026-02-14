import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const EarlyAccessPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  if (isSubmitted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
          }}>
            <svg style={{ width: '32px', height: '32px', color: '#3B82F6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '36px',
            fontWeight: 700,
            color: '#ffffff',
            margin: 0,
            marginBottom: '16px',
          }}>
            You're in the circle.
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
            marginBottom: '32px',
            lineHeight: 1.6,
          }}>
            We'll reach out as soon as Derivant is ready for you.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '14px',
              fontWeight: 400,
              color: '#ffffff',
              letterSpacing: '0.04em',
              padding: '14px 32px',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Back to site
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Early Access | Derivant AI — Accedi in Anteprima</title>
        <meta name="description" content="Registrati per accedere in anteprima a Derivant AI. Genera presentazioni professionali con intelligenza artificiale, brand kit e web research integrati." />
        <link rel="canonical" href="https://www.derivant.ai/early-access" />
        <meta property="og:title" content="Early Access | Derivant AI" />
        <meta property="og:description" content="Registrati per accedere in anteprima a Derivant AI. Presentazioni professionali generate dall'AI." />
        <meta property="og:url" content="https://www.derivant.ai/early-access" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Early Access | Derivant AI" />
        <meta name="twitter:description" content="Registrati per accedere in anteprima a Derivant AI." />
      </Helmet>
    <div style={{
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      paddingTop: '120px',
    }}>
      <div style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(36px, 6vw, 56px)',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          margin: 0,
          marginBottom: '24px',
        }}>
          High-End Presentations<br />at the speed of thought.
        </h1>

        {/* Sub-headline */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '18px',
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.6)',
          lineHeight: 1.7,
          margin: '0 auto',
          marginBottom: '60px',
          maxWidth: '600px',
        }}>
          Stop building slides. Start architecting narratives. Derivant combines elite editorial design with generative intelligence to deliver studio-quality decks in seconds.
        </p>

        {/* Waitlist Section */}
        <div style={{
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 0,
            marginBottom: '32px',
          }}>
            The Beta is currently private. Join the elite circle of early adopters to start creating.
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            style={{ width: '100%' }}
          >
            <input type="hidden" name="access_key" value="9f92b39f-70b2-4573-9b46-eb036376a2c8" />
            <input type="hidden" name="redirect" value="https://derivant.ai/early-access?submitted=true" />
            <input type="hidden" name="subject" value="New Derivant Waitlist Signup" />

            <div style={{ marginBottom: '24px' }}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                style={{
                  width: '100%',
                  padding: '16px 0',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#ffffff',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => e.currentTarget.style.borderBottomColor = 'rgba(255, 255, 255, 0.5)'}
                onBlur={(e) => e.currentTarget.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)'}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <button
                type="submit"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.04em',
                  padding: '14px 32px',
                  borderRadius: '100px',
                  border: 'none',
                  background: '#3B82F6',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Join the Waitlist
              </button>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.35)',
              }}>
                press Enter ↵
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default EarlyAccessPage;
