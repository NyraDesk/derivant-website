import { useRef, useEffect, useState } from 'react';
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

  return (
    <>
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
          Plans
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
          Try Free
        </a>
      </div>

      <div className="mobile-container" style={{
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '110px 40px 100px',
      }}>

      {/* === HEADLINE === */}
      <div style={{
        textAlign: 'center',
        lineHeight: 1.05,
      }}>
        <span className="mobile-hero-main" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '56px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.05em',
          display: 'block',
        }}>
          <span className="hide-mobile">Derivant AI turns your ideas and briefs</span>
          <span className="show-mobile">Derivant AI turns<br />your ideas and briefs</span>
        </span>
        <span className="mobile-hero-sub" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '40px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          display: 'block',
          marginTop: '12px',
        }}>
          <span className="hide-mobile">into professional design-driven presentations.</span>
          <span className="show-mobile">into professional<br />design-driven presentations.</span>
        </span>
        <span className="mobile-hero-small" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '36px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.03em',
          display: 'block',
          marginTop: '12px',
        }}>
          Instantly ready to present.
        </span>
        <span className="mobile-hero-desc" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '20px',
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.7)',
          letterSpacing: '-0.01em',
          display: 'block',
          marginTop: '48px',
        }}>
          The AI editor that thinks like a designer.<br />Fully customizable.
        </span>
      </div>

      {/* CTA Button */}
      <a
        href="/early-access"
        className="glass-nav"
        style={{
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
        Try free →
      </a>

      {/* === VIDEO === */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        marginTop: '40px',
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

      <div className="mobile-divider" style={{ width: '100%', maxWidth: '1200px', height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginTop: '100px' }} />

      {/* === FEATURE SECTION === */}
      <div ref={(el) => { sectionRef.current = el; slide2Ref.current = el; }} className="mobile-section-spacing" style={{
        width: '100%',
        maxWidth: '1200px',
        marginTop: '120px',
      }}>
        {/* Header Centrale */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px',
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
          }}>
            Elite design, AI speed.
          </h3>
          <p className="mobile-section-subtitle" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '19px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1.7,
            margin: '0 auto',
            maxWidth: '800px',
          }}>
            Generate presentations with the same aesthetic care as a Senior Graphic Designer. A coherent, balanced visual narrative ready for the most demanding stages.
          </p>
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
                  AI Text Mastering
                </p>
                <p className="mobile-feature-desc" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.55)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  Select any text block to summarize, expand, change tone, or rewrite content instantly.
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
                  Contextual Image AI
                </p>
                <p className="mobile-feature-desc" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.55)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  AI analyzes your text and in one click to replace them or generate alternatives consistent with your message.
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
                  Instant Translation
                </p>
                <p className="mobile-feature-desc" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '17px',
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.55)',
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  Translate entire slides or individual paragraphs into any language, keeping the layout intact.
                </p>
              </div>
            </div>
            <a
              href="/early-access"
              className="glass-nav"
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
              }}
            >
              Discover the editor →
            </a>
          </div>

          {/* Colonna Destra: Video */}
          <div style={{
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

      {/* === 3-COLUMN GRID === */}
      <div className="cards-grid" style={{
        width: '100%',
        maxWidth: '1200px',
        marginTop: '72px',
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
            STUDIO AESTHETICS
          </h3>
          <p className="mobile-feature-desc" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Every slide follows the golden rules of design: typographic grids, visual weights and chromatic harmony. The result is indistinguishable from handcrafted excellence.
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
            ZERO FRICTION
          </h3>
          <p className="mobile-feature-desc" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Go from brief to complete deck in seconds. Eliminate hours lost in micro-tasking and focus only on strategy and creative vision.
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
            FULL-POWER EDITOR
          </h3>
          <p className="mobile-feature-desc" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Nothing is set in stone. AI-editable text and a fully customizable editor let you refine every detail to perfection.
          </p>
        </div>
      </div>

      <div className="mobile-divider" style={{ width: '100%', maxWidth: '1200px', height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginTop: '100px' }} />

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
        Your content, our elite layouts.
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
            '/gallery/SLIDE 2.png',
            '/gallery/SLIDE 2 2.png',
            '/gallery/SLIDE 3.png',
            '/gallery/5.png',
            '/gallery/slide 5.png',
            '/gallery/SLIDE 2.png',
            '/gallery/SLIDE 2 2.png',
            '/gallery/SLIDE 3.png',
            '/gallery/5.png',
            '/gallery/slide 5.png',
          ].map((src, i) => (
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
                src={src}
                alt=""
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

      <div className="mobile-divider" style={{ width: '100%', maxWidth: '1200px', height: '1px', background: 'rgba(255, 255, 255, 0.08)', marginTop: '100px' }} />

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
        Your Canvas, Your Rules.
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
            A professional editor with no constraints, where every element is fluid. From millimetric spacing control to radical layout customization, the final control is always in your hands.
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
                Pixel-Perfect Canvas
              </p>
              <p className="mobile-feature-desc" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '17px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.6)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Move and organize content with natural, frictionless drag-and-drop.
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
                Deep Customization
              </p>
              <p className="mobile-feature-desc" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '17px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.6)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                Edit styles, visual weights, and graphic assets to make every single deck unique.
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
          Scale Excellence. Automate the Workflow.
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
          Tailored solutions for agencies and teams that need to produce elite presentations at industrial scale.
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
              Custom Template Engine
            </p>
            <p className="mobile-feature-desc" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              AI will only populate layouts defined by your brand.
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
              Brand Governance
            </p>
            <p className="mobile-feature-desc" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              lineHeight: 1.6,
            }}>
              Ensures every deck strictly follows your aesthetic guidelines.
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
          BOOK A DEMO
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
            Choose your plan
          </h3>
          <p className="mobile-section-subtitle" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '19px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.6)',
            margin: 0,
          }}>
            Unlock the full power of AI presentations
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
              Perfect for getting started with AI presentations
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
                Current Plan
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Try AI presentations</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>All templates</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>PDF export with watermark</span>
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
              For professionals who need more power
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
                Upgrade to Pro
              </span>
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>500 credits/month</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#3B82F6', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>Advanced AI images</span>
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
            Start creating →
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
        <h2
          className="derivant-outline-text"
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
        </h2>
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
            Transparency and control
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {[
            {
              q: 'How does presentation generation work with Derivant?',
              a: 'The user enters a brief or a document; the AI analyzes the content, creates a logical outline, and then generates an elite design respecting the golden rules of graphic composition.',
            },
            {
              q: 'What are credits and how are they consumed?',
              a: 'Credits are the unit of measurement of the system. Each action (generating a slide, text, or image) consumes a predetermined amount of credits included in your monthly plan.',
            },
            {
              q: 'Do credits expire?',
              a: 'No. Unused credits at the end of the month do not expire — they accumulate in your account to be used when you need them most.',
            },
            {
              q: 'Can I generate new images directly in blocks?',
              a: 'Yes. There are no automatic suggestions: you ask the AI to create unique visuals by entering a text prompt directly in the image block, without leaving the editor.',
            },
            {
              q: 'How does AI work in individual text blocks?',
              a: 'You can select any block to ask the AI to summarize content, expand it, translate it, or change its tone of voice instantly.',
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. There are no commitments or long-term contracts. You can cancel your Pro plan with one click from settings, keeping access until the end of the paid period.',
            },
            {
              q: 'Can I translate slides into other languages?',
              a: 'Absolutely. You can translate entire slides or individual blocks while keeping the original layout and formatting intact.',
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
