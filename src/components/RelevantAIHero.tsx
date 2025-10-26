import React from 'react';
import { Link } from 'react-router-dom';

const RelevantAIHero = () => {

  const scrollToNyra = () => {
    const nyraSection = document.getElementById('nyra');
    if (nyraSection) {
      nyraSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" style={{ width: '100%', maxWidth: '100%' }}>
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-start justify-center pt-32 md:pt-40" style={{ width: '100%', maxWidth: '100%' }}>
        <div className="w-full" style={{ width: '100%', maxWidth: '100%', padding: '0 20px', overflow: 'visible' }}>
        {/* Main Hero Content */}
        <div className="text-center w-full" style={{ width: '100%', maxWidth: '100%', overflow: 'visible' }}>
        <div className="animate-fade-in-up">
          <div className="logo-animation">
            <div className="logo-mark">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gradient-nyra leading-tight tracking-tight" style={{ fontFamily: 'Inter', fontWeight: 800 }}>
              <span className="text-gradient-meet-nyra">MEET NOTEZ</span>
            </h1>
          </div>
        </div>
        
        <div className="animate-fade-in-up animation-delay-200 mb-6 md:mb-8">
          <div className="mt-8 md:mt-12">
            <h3 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 leading-tight text-white font-bold text-center whitespace-nowrap" style={{ fontFamily: 'Inter', width: '100%', maxWidth: '100%', overflow: 'visible' }}>
              Pensa, crea, organizza. Il tuo tempo potenziato
            </h3>
          </div>
          
          {/* Buttons moved here between text and video */}
          <div className="mt-8 md:mt-12">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center max-w-md md:max-w-none mx-auto">
              <Link 
                to="/early-access"
                className="w-full md:w-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white px-6 md:px-8 py-4 rounded-full font-medium text-sm md:text-base hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Get Early Access
              </Link>
              <button className="w-full md:w-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white px-6 md:px-8 py-4 rounded-full font-medium text-sm md:text-base hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="demo-preview relative" style={{ marginTop: '60px' }}>
            <div className="video-border-effect">
              <div className="browser-mockup" style={{ 
                width: '100%', 
                maxWidth: '100%'
              }}>
                <div className="browser-content">
                  <video 
                    width="100%" 
                    height="100%" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    style={{ 
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '0 0 8px 8px'
                    }}
                  >
                    <source src="src/assets/nyrademo1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
        </div>
      </div>

    </section>
  );
};

export default RelevantAIHero;