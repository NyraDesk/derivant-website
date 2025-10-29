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
        <nav className="hidden md:block bg-gray-100/80 backdrop-blur-2xl rounded-full px-6 py-3 shadow-sm w-full mx-auto border border-gray-200/50" style={{ maxWidth: '100%' }}>
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="font-bold text-lg">
                <span className="text-gradient-nyra">●</span>
                <span className="text-gray-900 ml-1">DERIVANT AI</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
              <Link
                to="/"
                className="flex items-center space-x-1 font-medium text-sm text-gray-800 hover:bg-gray-100 hover:text-black transition-all duration-200 px-3 py-2 rounded-full"
              >
                <span className="text-gray-800">●</span>
                <span>home</span>
              </Link>
              <Link
                to="/features"
                className="text-gray-800 font-medium text-sm hover:bg-gray-100 hover:text-black transition-all duration-200 px-3 py-2 rounded-full"
              >
                features
              </Link>
              <Link
                to="/plans"
                className="text-gray-800 font-medium text-sm hover:bg-gray-100 hover:text-black transition-all duration-200 px-3 py-2 rounded-full"
              >
                plans
              </Link>
              <Link
                to="/blog"
                className="text-gray-800 font-medium text-sm hover:bg-gray-100 hover:text-black transition-all duration-200 px-3 py-2 rounded-full"
              >
                blog
              </Link>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link
                to="/early-access"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-sm"
              >
                Get early access →
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="md:hidden bg-gray-100/80 backdrop-blur-2xl rounded-full px-6 py-3 shadow-sm w-full mx-auto border border-gray-200/50" style={{ maxWidth: '100%' }}>
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="font-bold text-lg">
                <span className="text-gradient-nyra">●</span>
                <span className="text-gray-900 ml-1">DERIVANT AI</span>
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-800 hover:text-black transition-colors duration-200"
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
          <div className="bg-gray-200 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-300 overflow-hidden animate-fade-in-up">
            <div className="py-6">
              <div className="flex flex-col space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-6 py-4 font-medium text-base text-black hover:bg-gray-300 transition-all duration-200"
                >
                  <span className="text-black">●</span>
                  <span>Home</span>
                </Link>

                <Link
                  to="/features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-black font-medium text-base hover:bg-gray-300 transition-all duration-200"
                >
                  Features
                </Link>

                <Link
                  to="/plans"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-black font-medium text-base hover:bg-gray-300 transition-all duration-200"
                >
                  Plans
                </Link>

                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-4 text-black font-medium text-base hover:bg-gray-300 transition-all duration-200"
                >
                  Blog
                </Link>

                <div className="px-6 py-4">
                  <Link
                    to="/early-access"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-full font-medium text-base hover:bg-blue-700 hover:scale-105 transition-all duration-200 block text-center shadow-sm"
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