import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-6" style={{ maxWidth: '100%' }}>
        {/* Desktop Navigation */}
        <nav className="hidden md:block glass-nav rounded-full px-6 py-3 w-full mx-auto" style={{ maxWidth: '100%' }}>
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <img src="/icon/derivant-icon.png" alt="Derivant" style={{ width: '28px', height: '28px', borderRadius: '6px' }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '18px', letterSpacing: '-0.03em', color: '#fff', textTransform: 'uppercase' }}>
                  DERIVANT
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
              <Link
                to="/"
                className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 px-3 py-2 rounded-full"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', fontWeight: 400, letterSpacing: '0.04em' }}
              >
                home
              </Link>
              <a
                href="/#enterprise"
                className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 px-3 py-2 rounded-full"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', fontWeight: 400, letterSpacing: '0.04em' }}
              >
                enterprise
              </a>
              <Link
                to="/plans"
                className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 px-3 py-2 rounded-full"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', fontWeight: 400, letterSpacing: '0.04em' }}
              >
                plans
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link
                to="/early-access"
                className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-200 border border-white/20"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: '13px', fontWeight: 400, letterSpacing: '0.04em' }}
              >
                Get early access →
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden glass-nav rounded-full px-6 py-3 w-full mx-auto" style={{ maxWidth: '100%' }}>
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <img src="/icon/derivant-icon.png" alt="Derivant" style={{ width: '28px', height: '28px', borderRadius: '6px' }} />
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '18px', letterSpacing: '-0.03em', color: '#fff', textTransform: 'uppercase' }}>
                  DERIVANT
                </span>
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-1/2 transform -translate-x-1/2 z-40 w-full px-6" style={{ maxWidth: '100%' }}>
          <div className="glass-nav rounded-2xl overflow-hidden animate-fade-in-up">
            <div className="py-6">
              <div className="flex flex-col space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-6 py-4 font-medium text-base text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <span className="text-white/70">●</span>
                  <span>Home</span>
                </Link>

                <a
                  href="/#enterprise"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-white/70 font-medium text-base hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  Enterprise
                </a>

                <Link
                  to="/plans"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-white/70 font-medium text-base hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  Plans
                </Link>

                <div className="px-6 py-4">
                  <Link
                    to="/early-access"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-white/10 text-white px-6 py-4 rounded-full font-medium text-base hover:bg-white/20 transition-all duration-200 block text-center border border-white/20"
                  >
                    Get early access →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Header;