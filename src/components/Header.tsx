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
        <nav className="hidden md:block bg-white/5 backdrop-blur-xl rounded-full px-8 py-4 shadow-lg w-full mx-auto border border-white/10" style={{ maxWidth: '100%' }}>
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="font-bold text-lg">
                <span className="text-gradient-nyra">●</span>
                <span className="text-white ml-1">DERIVANT AI</span>
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
              <Link 
                to="/" 
                className="flex items-center space-x-1 font-medium text-sm text-white hover:bg-white/10 hover:text-white transition-all duration-200 px-3 py-2 rounded-full"
              >
                <span className="text-white">●</span>
                <span>home</span>
              </Link>
              <a 
                href="#nyra" 
                className="text-white font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-200 px-3 py-2 rounded-full"
              >
                nyra
              </a>
              {isHomePage ? (
                <a 
                  href="#features" 
                  className="text-white font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-200 px-3 py-2 rounded-full"
                >
                  features
                </a>
              ) : (
                <Link 
                  to="/#features" 
                  className="text-white font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-200 px-3 py-2 rounded-full"
                >
                  features
                </Link>
              )}
              <Link 
                to="/plans" 
                className="text-white font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-200 px-3 py-2 rounded-full"
              >
                plans
              </Link>
              <Link 
                to="/blog" 
                className="text-white font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-200 px-3 py-2 rounded-full"
              >
                blog
              </Link>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link 
                to="/early-access"
                className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-7 py-4 rounded-full font-medium text-sm hover:bg-white/10 hover:scale-105 transition-all duration-200"
              >
                Get early access →
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden bg-white/5 backdrop-blur-xl rounded-full px-6 py-4 shadow-lg w-full mx-auto border border-white/10" style={{ maxWidth: '100%' }}>
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="font-bold text-lg">
                <span className="text-gradient-nyra">●</span>
                <span className="text-white ml-1">DERIVANT AI</span>
              </Link>
            </div>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-nyra-blue-dark transition-colors duration-200"
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
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-fade-in-up">
            <div className="py-6">
              <div className="flex flex-col space-y-1">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-6 py-4 font-medium text-base text-white hover:bg-white/10 transition-all duration-200"
                >
                  <span className="text-white">●</span>
                  <span>Home</span>
                </Link>
                
                <a 
                  href="#nyra" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-white font-medium text-base hover:bg-white/10 transition-all duration-200"
                >
                  NYRA
                </a>
                
                {isHomePage ? (
                  <a 
                    href="#features" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-4 text-white font-medium text-base hover:bg-white/10 transition-all duration-200"
                  >
                    Features
                  </a>
                ) : (
                  <Link 
                    to="/#features" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-4 text-white font-medium text-base hover:bg-white/10 transition-all duration-200"
                  >
                    Features
                  </Link>
                )}
                
                <Link 
                  to="/plans" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-white font-medium text-base hover:bg-white/10 transition-all duration-200"
                >
                  Plans
                </Link>
                
                <Link 
                  to="/blog" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-white font-medium text-base hover:bg-white/10 transition-all duration-200"
                >
                  Blog
                </Link>
                
                <div className="px-6 py-4">
                  <Link 
                    to="/early-access"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 text-white px-6 py-4 rounded-full font-medium text-base hover:bg-white/10 hover:scale-105 transition-all duration-200 block text-center"
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