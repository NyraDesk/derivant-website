import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotezHero = () => {

  return (
    <section id="notez-hero" className="relative bg-white overflow-hidden pt-24 md:pt-32 pb-0">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-96 h-96 rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.6) 0%, rgba(244, 114, 182, 0.4) 50%, transparent 100%)'
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-96 h-96 rounded-full opacity-40 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.6) 0%, rgba(147, 197, 253, 0.4) 50%, transparent 100%)'
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.5) 0%, rgba(251, 207, 232, 0.3) 50%, transparent 100%)'
          }}
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main Title - Apple Style */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl text-black mb-6 leading-tight tracking-tight"
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.04em'
            }}
          >
            <span
              style={{
                fontWeight: 300,
                background: 'linear-gradient(90deg, #C084FC 0%, #FB923C 25%, #F472B6 50%, #C084FC 75%, #FB923C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 100%',
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}
            >
              Meet
            </span> Notez
          </h1>

          <div className="leading-relaxed" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif', fontWeight: 400 }}>
            <p className="text-3xl md:text-4xl lg:text-5xl mb-4 text-black">NotezAI Dove crescono le tue idee.</p>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-500 mb-8">Trasforma note in mappe. Visualizza connessioni.<br />Pensa con l'AI al tuo fianco.</p>

            <div className="flex justify-center">
              <Link to="/early-access">
                <button
                  className="px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    fontSize: '18px',
                    background: 'linear-gradient(135deg, rgba(240, 240, 240, 0.9) 0%, rgba(230, 230, 230, 0.85) 100%)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    border: '2px solid rgba(200, 200, 200, 0.5)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <span style={{
                    background: 'linear-gradient(90deg, #C084FC 0%, #FB923C 25%, #F472B6 50%, #C084FC 75%, #FB923C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    backgroundSize: '200% 100%',
                    animation: 'gradient-shift 3s ease-in-out infinite'
                  }}>
                    Prova Gratis
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Video Tab - Apple Password Style */}
        <div className="max-w-7xl mx-auto animate-fade-in-up animation-delay-200 mb-0 px-4">
          <div className="bg-gray-100 rounded-3xl pt-8 md:pt-10 px-8 md:px-10 pb-8 md:pb-10 shadow-xl border border-gray-300 mb-0">

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-300">
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  display: 'block',
                  objectFit: 'contain'
                }}
              >
                <source src="/src/assets/DEMO FUNZIONALITA' NOTEZ hq.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default NotezHero;
