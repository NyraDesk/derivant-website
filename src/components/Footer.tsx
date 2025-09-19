import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Left - Brand */}
          <div className="md:col-span-1">
            <div className="mb-3 md:mb-4 text-center md:text-left">
              <span className="font-bold text-lg">
                <span className="text-gradient-nyra">●</span>
                <span className="text-gradient-nyra ml-1">DERIVANT</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm text-sm md:text-base text-center md:text-left mx-auto md:mx-0">
              The AI assistant that gets things done, locally. Transform your productivity while keeping your privacy intact.
            </p>
          </div>
          
          {/* Center - Product */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4 md:mb-6 text-sm md:text-base">Product</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#features" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm md:text-base">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm md:text-base">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm md:text-base">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm md:text-base">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Right - Support */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4 md:mb-6 text-sm md:text-base">Support</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm md:text-base">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm md:text-base">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm md:text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200 text-sm md:text-base">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom row */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © 2025 NYRA. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            Made for productivity and privacy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;