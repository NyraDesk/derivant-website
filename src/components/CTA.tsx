import React from 'react';
import { Apple, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div>
      <section className="py-12 md:py-24" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-normal text-white mb-4 md:mb-6">
            Take back control with NYRA
          </h2>
          <p className="text-sm md:text-lg mb-8 md:mb-12 max-w-4xl mx-auto font-normal leading-relaxed" style={{ color: '#888888' }}>
            Download for macOS or Windows. Loved by 50K users. 100% private. Instant setup.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 mb-8 md:mb-16 animate-fade-in-up animation-delay-200">
          <Link 
            to="/early-access"
            className="group w-full md:w-auto text-white px-6 py-4 rounded-full font-medium hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3"
            style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A', boxShadow: '0 40px 80px -20px rgba(107, 115, 137, 0.24), 0 20px 40px -10px rgba(31, 32, 33, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(123, 155, 185, 0.66)';
                e.currentTarget.style.boxShadow = '0 50px 100px -25px rgba(123, 155, 185, 0.3), 0 25px 50px -12px rgba(33, 33, 34, 0.5), 0 15px 30px -8px rgba(67, 67, 69, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1A1A1A';
              e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(79, 80, 82, 0.49), 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)';
            }}
          >
            <Apple className="w-5 h-5" />
            <span>Get Early Access →</span>
          </Link>
          
          <Link 
            to="/early-access"
            className="group w-full md:w-auto text-white px-6 py-4 rounded-full font-medium hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3"
            style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A', boxShadow: '0 40px 80px -20px rgba(107, 115, 137, 0.24), 0 20px 40px -10px rgba(31, 32, 33, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(123, 155, 185, 0.66)';
                e.currentTarget.style.boxShadow = '0 50px 100px -25px rgba(123, 155, 185, 0.3), 0 25px 50px -12px rgba(33, 33, 34, 0.5), 0 15px 30px -8px rgba(67, 67, 69, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1A1A1A';
              e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(79, 80, 82, 0.49), 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)';
            }}
          >
            <Monitor className="w-5 h-5" />
            <span>Get Early Access →</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up animation-delay-400">
          <div>
            <div className="text-xl md:text-2xl font-normal text-white mb-1 md:mb-2">50K+</div>
            <div className="font-normal text-sm md:text-base" style={{ color: '#888888' }}>Active Users</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-normal text-white mb-1 md:mb-2">4.9★</div>
            <div className="font-normal text-sm md:text-base" style={{ color: '#888888' }}>Average Rating</div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-normal text-white mb-1 md:mb-2">100%</div>
            <div className="font-normal text-sm md:text-base" style={{ color: '#888888' }}>Privacy Protected</div>
          </div>
        </div>
      </div>
      </section>

    </div>
  );
};

export default CTA;