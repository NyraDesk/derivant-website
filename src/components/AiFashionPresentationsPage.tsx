import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AiFashionPresentationsPage = () => {
  useEffect(() => {
    document.title = 'AI per il Fashion: Creare Presentazioni Luxury | Derivant.ai';
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      paddingTop: '140px',
      paddingBottom: '100px',
    }}>
      <article style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Back Link */}
        <Link
          to="/resources"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.5)',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '40px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
        >
          ← Back to Resources
        </Link>

        {/* Article Header */}
        <header style={{ marginBottom: '48px' }}>
          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '42px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            margin: 0,
          }}>
            AI per il Fashion: Come creare Presentazioni di Alta Moda in pochi secondi
          </h1>
        </header>

        {/* Article Content */}
        <div className="article-content" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '18px',
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: 1.8,
        }}>
          <p>
            Nel settore del lusso, l'immagine è tutto. Una presentazione commerciale o un lookbook non possono permettersi di sembrare "prodotti in serie". Il rischio dell'AI generica è quello di appiattire la creatività, ma con il giusto approccio è possibile scalare la produzione mantenendo un'estetica d'élite.
          </p>

          <h2>L'Estetica "Aura": Il nuovo standard editoriale</h2>
          <p>
            Derivant ha sviluppato lo stile Aura proprio per rispondere alle esigenze del settore moda. Non si tratta solo di scegliere un font elegante, ma di gestire gli spazi bianchi e le gerarchie visive come farebbe un art director di una rivista patinata.
          </p>
          <ul>
            <li><strong>Minimalismo Sofisticato:</strong> Meno rumore, più impatto.</li>
            <li><strong>Focus sull'Immagine:</strong> Layout pensati per dare respiro ai contenuti visuali, senza distrazioni.</li>
          </ul>

          <h2>Casi d'uso nel Fashion & Luxury</h2>
          <ul>
            <li><strong>Trend Forecasting:</strong> Presentare le tendenze della prossima stagione con una coerenza cromatica assoluta.</li>
            <li><strong>Brand Deck per Retailer:</strong> Mostrare l'identità del marchio a potenziali partner con un design che riflette il posizionamento di prezzo.</li>
            <li><strong>Internal Moodboards:</strong> Allineare il team creativo su una visione estetica unica, generata in pochi minuti anziché ore.</li>
          </ul>

          <h2>Perché la Coerenza è l'unico parametro che conta</h2>
          <p>
            Un brand di lusso si riconosce dalla costanza. Se le tue slide cambiano stile ogni tre pagine, il tuo brand perde forza. Il motore di Derivant è stato istruito per mantenere un "filo rosso" estetico che lega ogni singola slide, garantendo che l'output finale sia pronto per essere mostrato in un ufficio di Via della Spiga o Avenue Montaigne.
          </p>

          {/* CTA */}
          <div style={{
            marginTop: '60px',
            padding: '32px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(255, 255, 255, 0.02)',
            textAlign: 'center',
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#ffffff',
              margin: 0,
              marginBottom: '16px',
            }}>
              Pronto a elevare le tue presentazioni?
            </p>
            <a
              href="https://app.derivant.ai"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#ffffff',
                color: '#000000',
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Prova gratis
            </a>
          </div>
        </div>
      </article>

      {/* Article Styles */}
      <style>{`
        .article-content h2 {
          font-family: 'Inter', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin: 48px 0 24px 0;
          line-height: 1.3;
        }
        .article-content p {
          margin: 0 0 24px 0;
        }
        .article-content ul, .article-content ol {
          margin: 0 0 24px 0;
          padding-left: 24px;
        }
        .article-content li {
          margin-bottom: 12px;
        }
        .article-content strong {
          color: #ffffff;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default AiFashionPresentationsPage;
