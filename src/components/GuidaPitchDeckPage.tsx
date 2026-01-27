import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GuidaPitchDeckPage = () => {
  useEffect(() => {
    document.title = 'Pitch Deck 2026: Guida e Tool AI per Startup | Derivant.ai';
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
            Pitch Deck 2026: La Guida Definitiva per Startup (e come l'AI sta cambiando le regole)
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
            Presentare una startup nel 2026 non è più solo una questione di "cosa" dici, ma di "come" lo proietti. Gli investitori vedono centinaia di deck ogni settimana; la tua unica possibilità è colpire nei primi 10 secondi con una chiarezza visiva e concettuale assoluta.
          </p>

          <h2>I 3 Pilastri di un Pitch Deck Vincente oggi</h2>

          <h3>1. Coerenza tra Visione e Grafica</h3>
          <p>
            Un errore comune è presentare un'idea rivoluzionaria con slide che sembrano un template standard del 2020. Nel 2026, l'estetica è parte integrante del tuo brand. Se la tua grafica è generica, la tua idea sembrerà generica. Derivant garantisce che ogni slide — dal "Problem" al "Financials" — mantenga lo stesso peso visivo e la stessa autorevolezza.
          </p>

          <h3>2. Narrazione non lineare, ma fluida</h3>
          <p>
            Il mazzo di slide deve scorrere come un unico organismo. Grazie al workflow di Derivant, puoi trasformare il tuo outline testuale in una struttura che mantiene il focus dell'investitore senza distrazioni, eliminando il rumore visivo tipico dei tool di vecchia generazione.
          </p>

          <h3>3. La Regola del "Designer-Thinking"</h3>
          <p>
            Il tempo in cui i fondatori passavano notti intere ad allineare box su PowerPoint è finito. L'intelligenza artificiale di Derivant agisce come un Art Director invisibile:
          </p>
          <ul>
            <li>Analizza il tuo testo per capire quali sono i punti chiave.</li>
            <li>Applica una gerarchia visiva corretta.</li>
            <li>Mantiene lo stile scelto (come il sofisticato stile "Aura") su tutto il deck.</li>
          </ul>

          <h2>La Struttura Suggerita per il 2026</h2>
          <p>
            Mentre il contenuto varia, la struttura vincente rimane snella:
          </p>
          <ul>
            <li><strong>The Hook:</strong> Il problema enorme che stai risolvendo.</li>
            <li><strong>The Solution:</strong> La tua magia tecnica (qui l'estetica "Aura" di Derivant brilla).</li>
            <li><strong>Market & Traction:</strong> Dati presentati con pulizia estrema.</li>
            <li><strong>The Ask:</strong> Cosa ti serve per scalare.</li>
          </ul>

          <h2>Perché usare Derivant per il tuo prossimo round?</h2>
          <p>
            Mentre altri generatori creano slide "giocattolo", Derivant è costruito per professionisti che non hanno tempo da perdere ma non possono permettersi di trascurare il design. È lo strumento per i fondatori che, pur non avendo competenze di codice o grafica, pretendono un risultato che sembri uscito da uno studio creativo di Milano o Londra.
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
              Pronto a creare il tuo pitch deck?
            </p>
            <Link
              to="/early-access"
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
              Inizia Gratis
            </Link>
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
        .article-content h3 {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 36px 0 16px 0;
          line-height: 1.4;
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

export default GuidaPitchDeckPage;
