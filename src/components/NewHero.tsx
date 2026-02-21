import { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import VideoComponent from './VideoComponent';

const NewHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const [slide2Visible, setSlide2Visible] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const lastScrollY = useRef(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [counters, setCounters] = useState({ speed: 0, time: 0, brand: 0 });
  const posTitle = 'Presentation ';
  const posTitleFire = 'Operating System.';
  const fullPosTitle = posTitle + posTitleFire;
  const [typedCount, setTypedCount] = useState(0);
  const typingStarted = useRef(false);

  // Slide 2 visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSlide2Visible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setGalleryVisible(true);
            fadeObserver.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );

    if (galleryRef.current) {
      fadeObserver.observe(galleryRef.current);
    }

    return () => fadeObserver.disconnect();
  }, []);

  useEffect(() => {
    const slide2Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSlide2Visible(true);
            slide2Observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (slide2Ref.current) {
      slide2Observer.observe(slide2Ref.current);
    }

    return () => slide2Observer.disconnect();
  }, []);

  // Scroll direction detection for floating nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const isNotAtTop = currentScrollY > 400;

      setShowFloatingNav(isScrollingUp && isNotAtTop);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stats counter animation
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
            const duration = 1800;
            const steps = 60;
            const targets = { speed: 5, time: 80, brand: 100 };
            let step = 0;
            const interval = setInterval(() => {
              step++;
              const progress = step / steps;
              const ease = 1 - Math.pow(1 - progress, 3);
              setCounters({
                speed: Math.round(targets.speed * ease),
                time: Math.round(targets.time * ease),
                brand: Math.round(targets.brand * ease),
              });
              if (step >= steps) clearInterval(interval);
            }, duration / steps);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) statsObserver.observe(statsRef.current);
    return () => statsObserver.disconnect();
  }, [statsVisible]);

  // Divider grow animation
  useEffect(() => {
    const dividerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.divider-animate').forEach((el) => {
      dividerObserver.observe(el);
    });
    return () => dividerObserver.disconnect();
  }, []);

  // Typing effect for POS title
  useEffect(() => {
    if (slide2Visible && !typingStarted.current) {
      typingStarted.current = true;
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setTypedCount(i);
        if (i >= fullPosTitle.length) clearInterval(interval);
      }, 75);
      return () => clearInterval(interval);
    }
  }, [slide2Visible, fullPosTitle.length]);

  return (
    <>
      <Helmet>
        <title>Derivant AI — Accelera la produzione delle tue presentazioni</title>
        <meta name="description" content="Derivant trasforma testi, documenti e idee in presentazioni strutturate e pronte alla consegna. Un motore intelligente che automatizza la produzione e garantisce coerenza in ogni slide." />
        <meta name="keywords" content="presentazioni AI, generare slide, presentazioni automatiche, AI presentation maker, pitch deck AI, Derivant, presentation operating system" />
        <link rel="canonical" href="https://www.derivant.ai/" />
        <meta property="og:title" content="Derivant AI — Accelera la produzione delle tue presentazioni" />
        <meta property="og:description" content="Derivant trasforma testi, documenti e idee in presentazioni strutturate e pronte alla consegna. Automatizza la produzione e garantisce coerenza in ogni slide." />
        <meta property="og:url" content="https://www.derivant.ai/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Derivant AI — Accelera la produzione delle tue presentazioni" />
        <meta name="twitter:description" content="Derivant trasforma testi, documenti e idee in presentazioni strutturate e pronte alla consegna. Automatizza la produzione e garantisce coerenza in ogni slide." />
      </Helmet>

      {/* Floating Navigation */}
      <div
        className="glass-nav floating-nav"
        style={{
          position: 'fixed',
          bottom: showFloatingNav ? '24px' : '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          padding: '12px 24px',
          borderRadius: '100px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          transition: 'bottom 0.3s ease',
        }}
      >
        <a
          href="#enterprise"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '100px',
            transition: 'all 0.2s ease',
          }}
        >
          Enterprise
        </a>
        <a
          href="/plans"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '13px',
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '100px',
            transition: 'all 0.2s ease',
          }}
        >
          Piani
        </a>
        <a
          href="/early-access"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '13px',
            fontWeight: 600,
            color: '#ffffff',
            textDecoration: 'none',
            padding: '8px 20px',
            borderRadius: '100px',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.2s ease',
          }}
        >
          Prova gratis
        </a>
      </div>

      <div className="mobile-container" style={{
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '150px 40px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>

      {/* === HEADLINE === */}
      <div className="hero-headline-container" style={{
        textAlign: 'center',
        lineHeight: 1.05,
        position: 'relative',
        zIndex: 1,
        minHeight: 'calc(100vh - 420px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <h1 style={{ margin: 0, textAlign: 'center' }}>
          <span className="mobile-hero-main" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '72px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.05em',
            display: 'block',
            opacity: 0,
            animation: 'heroFadeUp 0.8s ease forwards',
            animationDelay: '0.1s',
          }}>
            Accelera la produzione
          </span>
          <span className="mobile-hero-sub" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '52px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            display: 'block',
            marginTop: '12px',
            opacity: 0,
            animation: 'heroFadeUp 0.8s ease forwards',
            animationDelay: '0.3s',
          }}>
            delle tue presentazioni.
          </span>
        </h1>
        <span className="mobile-hero-desc" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '24px',
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.82)',
          letterSpacing: '-0.01em',
          display: 'block',
          marginTop: '60px',
          opacity: 0,
          animation: 'heroFadeUp 0.8s ease forwards',
          animationDelay: '0.6s',
        }}>
          Derivant trasforma testi, documenti e idee<br />in presentazioni strutturate e pronte alla consegna.<br />Un motore intelligente che automatizza la produzione<br />e garantisce coerenza in ogni slide.
        </span>
        {/* CTA Button */}
        <a
          href="/early-access"
          className="glass-nav hero-cta"
          style={{
            opacity: 0,
            animation: 'heroFadeUp 0.8s ease forwards',
            animationDelay: '0.9s',
            marginTop: '40px',
            padding: '14px 36px',
            borderRadius: '100px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '15px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
          }}
        >
          Provalo gratis →
        </a>
      </div>

      {/* === VIDEO === */}
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        marginTop: '80px',
        opacity: 0,
        animation: 'heroVideoScale 1s ease forwards',
        animationDelay: '1.1s',
      }}>
        <div style={{
          borderRadius: '24px',
          overflow: 'hidden',
          border: '0.5px solid rgba(255, 255, 255, 0.12)',
          boxShadow: 'inset 0 0.5px 0 0 rgba(255, 255, 255, 0.08), 0 2px 12px rgba(0, 0, 0, 0.5)',
        }}>
          <div style={{
            width: '100%',
            aspectRatio: '16 / 9',
            background: '#0a0a0a',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <VideoComponent
              src="/VIDEO/derivant-demo.webm"
              title="Derivant AI - Presentation Builder Demo"
              description="Scopri come Derivant trasforma le tue idee in presentazioni professionali in pochi secondi. AI-powered presentation builder per pitch deck, moodboard e strategy deck."
              thumbnailUrl="/VIDEO/derivant-demo-thumbnail.png"
              duration="PT1M"
              uploadDate="2026-01-27T00:00:00+01:00"
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              lazyLoad={false}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>

      {/* === FRAMED SECTION === */}
      <div className="corner-frame" style={{
        width: '100%',
        maxWidth: '1200px',
        marginTop: '180px',
        padding: '10px 60px 80px',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Corner lines */}
        <div className="corner-line corner-tl" />
        <div className="corner-line corner-tr" />
        <div className="corner-line corner-bl" />
        <div className="corner-line corner-br" />

        {/* Rotating conic gradient border */}
        <div className="ambient-glow" style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '20px',
          overflow: 'hidden',
          zIndex: 0,
        }}>
          <div className="ambient-blob blob-teal" />
          <div className="ambient-blob blob-red" />
        </div>

      {/* === FEATURE SECTION === */}
      <div ref={(el) => { sectionRef.current = el; slide2Ref.current = el; }} className="mobile-section-spacing" style={{
        width: '100%',
        maxWidth: '1200px',
      }}>
        {/* Header Centrale */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          opacity: slide2Visible ? 1 : 0,
          transform: slide2Visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease 0s, transform 0.8s ease 0s',
        }}>
          <h3 className="mobile-section-title" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '60px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: 0,
            marginBottom: '24px',
            minHeight: '66px',
          }}>
            {typedCount <= posTitle.length ? (
              <>
                {fullPosTitle.slice(0, typedCount)}
                <span className="typing-cursor">|</span>
              </>
            ) : (
              <>
                {posTitle}<span className="fire-text">{posTitleFire.slice(0, typedCount - posTitle.length)}</span>
                {typedCount < fullPosTitle.length && <span className="typing-cursor">|</span>}
              </>
            )}
          </h3>
        </div>

        {/* Grid: Features + Video */}
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: '60px',
          alignItems: 'start',
        }}>
          {/* Colonna Sinistra: Features */}
          <div style={{
            opacity: slide2Visible ? 1 : 0,
            transform: slide2Visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', marginBottom: '48px' }}>
              <div>
                <p className="mobile-feature-title" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: 0,
                  marginBottom: '10px',
                }}>
                  Ricerche web automatiche
                </p>
                <p className="mobile-feature-desc" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.55)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  Incolli il brief. L'AI esplora il web, trova dati aggiornati, struttura slide intelligenti.
                </p>
              </div>
              <div>
                <p className="mobile-feature-title" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: 0,
                  marginBottom: '10px',
                }}>
                  Brand sempre perfetto
                </p>
                <p className="mobile-feature-desc" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.55)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  Il tuo kit — colori, font, stile — applicato istantaneamente. Ogni deck coerente.
                </p>
              </div>
              <div>
                <p className="mobile-feature-title" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: 0,
                  marginBottom: '10px',
                }}>
                  Pronto in un click
                </p>
                <p className="mobile-feature-desc" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.55)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  Esporta PowerPoint o PDF. Editabile. Professionale. Subito utilizzabile.
                </p>
              </div>
            </div>
            <div className="presentation-cta-wrapper" style={{ marginTop: '12px' }}>
              <a
                href="/early-access"
                className="glass-nav presentation-cta"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#ffffff',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  padding: '12px 28px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                Provalo gratis →
              </a>
            </div>
          </div>

          {/* Colonna Destra: Video */}
          <div className="presentation-video" style={{
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '16 / 9',
            background: '#0a0a0a',
            position: 'relative',
            border: '0.5px solid rgba(255, 255, 255, 0.08)',
            opacity: slide2Visible ? 1 : 0,
            transform: slide2Visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}>
            <VideoComponent
              src="/VIDEO/slide2-demo.webm"
              title="Derivant AI - Design Workflow Demo"
              description="Guarda come il workflow di Derivant mantiene la coerenza estetica su tutto il deck. Dallo stile Aura ai layout professionali, tutto automatizzato dall'AI."
              thumbnailUrl="/VIDEO/slide2-demo-thumbnail.png"
              duration="PT45S"
              uploadDate="2026-01-27T00:00:00+01:00"
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              lazyLoad={true}
              rootMargin="300px"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
      </div>{/* end corner-frame */}

      {/* === PER CHI È PENSATO === */}
      <div style={{ textAlign: 'center', marginTop: '72px', marginBottom: '32px' }}>
        <h3 className="mobile-section-title" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '36px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          margin: 0,
        }}>
          Per chi è pensato
        </h3>
      </div>
      <div className="cards-grid" style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
      }}>
        <div className="glass-card" style={{
          padding: '40px 36px',
        }}>
          <h3 className="mobile-feature-title" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: 0,
            marginBottom: '20px',
          }}>
            CONSULENTI E FREELANCE
          </h3>
          <p className="mobile-feature-desc" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Accelera la produzione dei deck per clienti senza perdere struttura, coerenza e qualità.
          </p>
        </div>

        <div className="glass-card" style={{
          padding: '40px 36px',
        }}>
          <h3 className="mobile-feature-title" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: 0,
            marginBottom: '20px',
          }}>
            PICCOLI TEAM E STARTUP
          </h3>
          <p className="mobile-feature-desc" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Mantieni coerenza visiva con il brand kit personalizzabile, anche con volumi medi di presentazioni.
          </p>
        </div>

        <div className="glass-card" style={{
          padding: '40px 36px',
        }}>
          <h3 className="mobile-feature-title" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            margin: 0,
            marginBottom: '20px',
          }}>
            TEAM MARKETING E CORPORATE
          </h3>
          <p className="mobile-feature-desc" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Standardizza template e riduci tempi di revisione, anche per grandi volumi di presentazioni.
          </p>
        </div>
      </div>

      {/* === STATS COUNTER === */}
      <div ref={statsRef} style={{
        width: '100%',
        maxWidth: '1000px',
        marginTop: '100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '40px',
        textAlign: 'center',
      }} className="cards-grid">
        <div style={{
          opacity: statsVisible ? 1 : 0,
          transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0s, transform 0.6s ease 0s',
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '64px',
            fontWeight: 700,
            color: '#ffffff',
            display: 'block',
            lineHeight: 1,
          }}>{counters.speed}x</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: '12px',
            display: 'block',
          }}>più veloce del processo manuale</span>
        </div>
        <div style={{
          opacity: statsVisible ? 1 : 0,
          transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '64px',
            fontWeight: 700,
            color: '#ffffff',
            display: 'block',
            lineHeight: 1,
          }}>{counters.time}%</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: '12px',
            display: 'block',
          }}>tempo risparmiato per deck</span>
        </div>
        <div style={{
          opacity: statsVisible ? 1 : 0,
          transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '64px',
            fontWeight: 700,
            color: '#ffffff',
            display: 'block',
            lineHeight: 1,
          }}>{counters.brand}%</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.5)',
            marginTop: '12px',
            display: 'block',
          }}>coerenza brand garantita</span>
        </div>
      </div>

      {/* === FEATURE PROCESSO === */}
      <div style={{
        width: '100%',
        maxWidth: '1000px',
        marginTop: '100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px 48px',
      }} className="cards-grid">
        {[
          { title: 'Brand kit personalizzabile', desc: 'Colori, font e loghi sempre coerenti su ogni deck.' },
          { title: 'Creazione slide da link', desc: 'Trasforma pagine web o documenti in presentazioni complete.' },
          { title: 'Generazione contenuti', desc: 'Testi, titoli e bullet pronti all\'uso, generati dall\'AI.' },
          { title: 'Mood visivi su misura', desc: 'Look & feel personalizzati per ogni progetto o cliente.' },
          { title: 'Editing completo', desc: 'Modifica manuale su ogni elemento, preview immediata.' },
          { title: 'Export pronto', desc: 'PowerPoint, PDF o formati aziendali standard.' },
        ].map((feat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px 0' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '14px', marginTop: '2px', flexShrink: 0 }}>✓</span>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                color: '#ffffff',
                margin: 0,
                marginBottom: '4px',
              }}>{feat.title}</p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.5)',
                margin: 0,
                lineHeight: 1.5,
              }}>{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* === SLIDE 3: GALLERY === */}
      <h2 className="mobile-section-title mobile-section-spacing" style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '48px',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '-0.03em',
        margin: 0,
        marginTop: '120px',
        marginBottom: '40px',
        textAlign: 'center',
      }}>
        Presentazioni AI pronte alla consegna, con i tuoi contenuti.
      </h2>

      <div ref={galleryRef} className="gallery-wrapper" style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        overflow: 'hidden',
      }}>
        <div className="gallery-scroll" style={{
          display: 'flex',
          gap: '16px',
          width: 'max-content',
        }}>
          {[
            { src: '/gallery/SLIDE 2.png', alt: 'Presentazione AI con layout professionale generata da Derivant' },
            { src: '/gallery/SLIDE 2 2.png', alt: 'Slide pitch deck creata con intelligenza artificiale' },
            { src: '/gallery/SLIDE 3.png', alt: 'Esempio di moodboard AI per brand strategy' },
            { src: '/gallery/5.png', alt: 'Slide aziendale con grafici e dati generati da AI' },
            { src: '/gallery/slide 5.png', alt: 'Presentazione automatica con design professionale Derivant' },
            { src: '/gallery/SLIDE 2.png', alt: 'Template presentazione AI per consulenti e startup' },
            { src: '/gallery/SLIDE 2 2.png', alt: 'Pitch deck AI con layout strutturato e coerente' },
            { src: '/gallery/SLIDE 3.png', alt: 'Moodboard generato automaticamente con Derivant AI' },
            { src: '/gallery/5.png', alt: 'Slide con dati reali e ricerca web automatica' },
            { src: '/gallery/slide 5.png', alt: 'Presentazione professionale generata in pochi secondi con AI' },
          ].map((item, i) => (
            <div key={i} style={{
              width: '720px',
              aspectRatio: '16 / 9',
              borderRadius: '16px',
              background: '#111',
              border: '0.5px solid rgba(255, 255, 255, 0.08)',
              flexShrink: 0,
              overflow: 'hidden',
              opacity: galleryVisible ? 1 : 0,
              transform: galleryVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.9s ease ${i * 0.12}s, transform 0.9s ease ${i * 0.12}s`,
            }}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-divider divider-animate" style={{ width: '100%', maxWidth: '1200px', height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginTop: '100px' }} />

      {/* === SLIDE 4: THE CANVAS === */}
      <h3 className="mobile-section-title mobile-section-spacing" style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '48px',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        margin: 0,
        marginTop: '120px',
        marginBottom: '48px',
        textAlign: 'center',
      }}>
        Il tuo canvas, le tue regole.
      </h3>
      <div className="canvas-grid" style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '380px 1fr',
        gap: '60px',
        alignItems: 'center',
        paddingLeft: '40px',
        maxWidth: '1200px',
      }}>
        <div>
          <p className="mobile-feature-desc" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '22px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1.7,
            margin: 0,
            marginBottom: '40px',
          }}>
            Ogni elemento è modificabile. Sposta blocchi, ridimensiona, cambia stili. Il risultato finale lo decidi tu.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <p className="mobile-feature-title" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                marginBottom: '8px',
              }}>
                Canvas pixel-perfect
              </p>
              <p className="mobile-feature-desc" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '17px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.6)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Sposta e organizza i contenuti con drag-and-drop naturale e senza frizioni.
              </p>
            </div>
            <div>
              <p className="mobile-feature-title" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0,
                marginBottom: '8px',
              }}>
                Personalizzazione totale
              </p>
              <p className="mobile-feature-desc" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '17px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.6)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Modifica stili, pesi visivi e asset grafici per rendere ogni singolo deck unico.
              </p>
            </div>
          </div>
        </div>

        <div className="mobile-canvas-video" style={{
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#0a0a0a',
          position: 'relative',
          border: '0.5px solid rgba(255, 255, 255, 0.08)',
        }}>
          <img
            src="/slide3-image.png"
            alt="Canvas preview"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* === SLIDE 5: ENTERPRISE === */}
      <div id="enterprise" className="glass-card" style={{
        width: '100%',
        maxWidth: '1000px',
        marginTop: '120px',
        textAlign: 'center',
        padding: '80px 60px',
      }}>
        <h3 className="mobile-enterprise-title" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '54px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          margin: 0,
          marginBottom: '32px',
        }}>
          Automatizza i processi. Scala i risultati.
        </h3>
        <p className="mobile-enterprise-desc" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '21px',
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.7)',
          lineHeight: 1.7,
          margin: '0 auto',
          marginBottom: '44px',
          maxWidth: '680px',
        }}>
          Web research automatica, brand kit integrato, generazione in pochi minuti. La tecnologia che serve al tuo team per produrre di più, in meno tempo.
        </p>
        <div className="enterprise-features" style={{ display: 'flex', justifyContent: 'center', gap: '60px', maxWidth: '700px', margin: '0 auto 48px' }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <p className="mobile-feature-title" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              marginBottom: '8px',
            }}>
              Riduzione tempi 80%
            </p>
            <p className="mobile-feature-desc" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              Da ore di lavoro a pochi minuti. Per ogni singola presentazione.
            </p>
          </div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <p className="mobile-feature-title" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              marginBottom: '8px',
            }}>
              100% on-brand
            </p>
            <p className="mobile-feature-desc" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              Ogni output rispetta colori, font e linee guida. Automaticamente.
            </p>
          </div>
        </div>
        <a
          href="https://calendly.com/derivant/new-meeting"
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
          PRENOTA UNA DEMO
        </a>
      </div>

      {/* === SLIDE 6: PLANS === */}
      <div style={{ width: '100%', marginTop: '120px', maxWidth: '1100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h3 className="mobile-section-title" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '60px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: 0,
            marginBottom: '16px',
          }}>
            Scegli il tuo piano
          </h3>
          <p className="mobile-section-subtitle" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '19px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
          }}>
            Sblocca tutta la potenza delle presentazioni AI
          </p>
        </div>

        <div className="plans-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          maxWidth: '800px',
          margin: '0 auto',
        }}>

          {/* Free Plan */}
          <div className="glass-card" style={{
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(255, 255, 255, 0.03)',
          }}>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '28px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              marginBottom: '8px',
            }}>
              Free
            </h4>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.5)',
              margin: 0,
              marginBottom: '32px',
              lineHeight: 1.5,
            }}>
              Perfetto per iniziare con le presentazioni AI
            </p>
            <div style={{ marginBottom: '32px' }}>
              <span className="mobile-price" style={{
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
                Piano attuale
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Prova le presentazioni AI</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Tutti i template</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Export PDF con watermark</span>
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
                Offerta Lancio
              </span>
            </div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '28px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              marginBottom: '8px',
            }}>
              Pro
            </h4>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.5)',
              margin: 0,
              marginBottom: '32px',
              lineHeight: 1.5,
            }}>
              Per professionisti che vogliono di più
            </p>
            <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '24px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.4)',
                textDecoration: 'line-through',
              }}>
                €9.99
              </span>
              <span className="mobile-price" style={{
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
              }}>
                / month
              </span>
            </div>
            <a href="/early-access" style={{
              textDecoration: 'none',
              marginBottom: '32px',
              display: 'block',
              background: '#3B82F6',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
              transition: 'all 0.2s ease',
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '15px',
                fontWeight: 700,
                color: '#ffffff',
              }}>
                Passa a Pro
              </span>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>500 crediti/mese</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Immagini AI avanzate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Export PDF senza watermark</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Supporto prioritario</span>
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
            * Le creazioni AI illimitate si riferiscono all'uso giornaliero entro il fair use. Le funzionalità premium (Agent, modelli avanzati) richiedono crediti.
          </p>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 0,
          }}>
            Cancella quando vuoi. Senza domande.
          </p>
          <a
            href="/early-access"
            style={{
              display: 'inline-block',
              marginTop: '32px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '14px',
              fontWeight: 400,
              color: '#ffffff',
              letterSpacing: '0.04em',
              textDecoration: 'none',
              padding: '14px 32px',
              borderRadius: '100px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              background: 'transparent',
              transition: 'all 0.2s ease',
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
            Inizia a creare →
          </a>
        </div>
      </div>

      {/* === DERIVANT OUTLINE TEXT === */}
      <div style={{
        width: '100%',
        marginTop: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 24px',
      }}>
        <div
          className="derivant-outline-text"
          aria-hidden="true"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(80px, 14vw, 200px)',
            fontWeight: 800,
            backgroundImage: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.25) 0%, transparent 50%), url(/sfondo.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            opacity: 0.7,
            letterSpacing: '-0.06em',
            margin: '0 auto',
            lineHeight: 1,
            cursor: 'default',
            userSelect: 'none',
            textTransform: 'uppercase',
            textAlign: 'center',
            transform: 'scaleX(0.92)',
          }}
        >
          DERIVANT
        </div>
      </div>

      {/* === SLIDE 7: FAQ === */}
      <div style={{ width: '100%', marginTop: '120px', maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h3 className="mobile-section-title" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '60px',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: 0,
            marginBottom: '16px',
          }}>
            FAQ
          </h3>
          <p className="mobile-section-subtitle" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '19px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
          }}>
            Trasparenza e controllo
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {[
            {
              q: 'Come funziona la generazione di presentazioni con Derivant?',
              a: 'Inserisci un brief o un documento — l\'AI analizza il contenuto, crea un outline logico, ricerca dati reali dal web e genera un design professionale rispettando le regole d\'oro della composizione grafica.',
            },
            {
              q: 'Cosa sono i crediti e come vengono consumati?',
              a: 'I crediti sono l\'unità di misura del sistema. Ogni azione (generare una slide, un testo o un\'immagine) consuma una quantità predeterminata di crediti inclusi nel tuo piano mensile.',
            },
            {
              q: 'I crediti scadono?',
              a: 'No. I crediti non utilizzati a fine mese non scadono — si accumulano nel tuo account per essere usati quando ne hai più bisogno.',
            },
            {
              q: 'Posso generare nuove immagini direttamente nei blocchi?',
              a: 'Sì. Nessun suggerimento automatico: chiedi all\'AI di creare visual unici inserendo un prompt testuale direttamente nel blocco immagine, senza uscire dall\'editor.',
            },
            {
              q: 'Come funziona l\'AI nei singoli blocchi di testo?',
              a: 'Puoi selezionare qualsiasi blocco per chiedere all\'AI di riassumere il contenuto, espanderlo, tradurlo o cambiarne il tono di voce istantaneamente.',
            },
            {
              q: 'Posso cancellare l\'abbonamento in qualsiasi momento?',
              a: 'Sì. Nessun vincolo o contratto a lungo termine. Puoi cancellare il piano Pro con un click dalle impostazioni, mantenendo l\'accesso fino alla fine del periodo pagato.',
            },
            {
              q: 'Posso tradurre le slide in altre lingue?',
              a: 'Assolutamente. Puoi tradurre intere slide o singoli blocchi mantenendo il layout e la formattazione originali.',
            },
          ].map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '24px 0',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span className="mobile-faq-question" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#ffffff',
                  paddingRight: '24px',
                }}>
                  {faq.q}
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px',
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.5)',
                  flexShrink: 0,
                  transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}>
                  +
                </span>
              </button>
              <div style={{
                maxHeight: openFaq === index ? '300px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.6)',
                  lineHeight: 1.7,
                  margin: 0,
                  paddingBottom: '24px',
                }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    </>
  );
};

export default NewHero;
