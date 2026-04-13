import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent-dismissed')) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem('cookie-consent-dismissed', '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: 'rgba(13, 13, 15, 0.95)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      flexWrap: 'wrap',
      fontFamily: "'Inter', sans-serif",
      fontSize: '14px',
      color: 'rgba(255,255,255,0.7)',
    }}>
      <span>
        Questo sito utilizza solo cookie tecnici essenziali per l'autenticazione.{' '}
        <Link to="/privacy" style={{ color: '#b0cfe0', textDecoration: 'underline' }}>
          Privacy Policy
        </Link>
      </span>
      <button
        onClick={dismiss}
        style={{
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px',
          color: '#fff',
          padding: '8px 20px',
          fontSize: '13px',
          fontFamily: "'Inter', sans-serif",
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
      >
        Ho capito
      </button>
    </div>
  );
};

export default CookieBanner;
