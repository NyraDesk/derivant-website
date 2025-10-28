import React from 'react';
import { Link } from 'react-router-dom';

const NotezPlansSection = () => {
  return (
    <section className="relative bg-white pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Testo Centrale */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4"
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.04em'
            }}
          >
            Flexible Plans for Everyone
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-700"
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: 300
            }}
          >
            Choose a plan that fits your goals and scale as you grow
          </p>
        </div>

        {/* Grid 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Card 1 - Free */}
          <div className="bg-[#E8DCC8] rounded-3xl p-8 shadow-xl flex flex-col">
            <h3
              className="text-3xl font-medium text-black mb-2"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              Free
            </h3>
            <div className="mb-6">
              <span
                className="text-5xl font-semibold text-black"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                €0
              </span>
              <span
                className="text-xl text-gray-700 ml-2"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                /month
              </span>
            </div>
            <ul
              className="space-y-3 mb-8 flex-grow"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              <li className="text-gray-700">✓ Core features complete</li>
              <li className="text-gray-700">✓ Local storage unlimited</li>
              <li className="text-gray-700">✓ AI 5,000 token/mese</li>
            </ul>
            <Link to="/early-access" className="w-full">
              <button
                className="w-full bg-black text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Card 2 - Starter */}
          <div className="bg-[#E8DCC8] rounded-3xl p-8 shadow-xl flex flex-col">
            <h3
              className="text-3xl font-medium text-black mb-2"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              Starter
            </h3>
            <div className="mb-6">
              <span
                className="text-5xl font-semibold text-black"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                €5.99
              </span>
              <span
                className="text-xl text-gray-700 ml-2"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                /month
              </span>
              <div className="mt-2">
                <span
                  className="text-lg text-gray-500 line-through"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  €9.00
                </span>
              </div>
            </div>
            <ul
              className="space-y-3 mb-8 flex-grow"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              <li className="text-gray-700">✓ Tutto del FREE</li>
              <li className="text-gray-700">✓ AI: 300,000 token/mese</li>
              <li className="text-gray-700">✓ Voice transcription 30 min/mese</li>
              <li className="text-gray-700">✓ CANVAS 20 immagini/mese</li>
              <li className="text-gray-700">✓ Canvas AI automation</li>
            </ul>
            <Link to="/early-access" className="w-full">
              <button
                className="w-full bg-black text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Card 3 - All Access */}
          <div className="bg-[#E8DCC8] rounded-3xl p-8 shadow-xl flex flex-col">
            <h3
              className="text-3xl font-medium text-black mb-2"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              All Access
            </h3>
            <div className="mb-6">
              <span
                className="text-5xl font-semibold text-black"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                €20
              </span>
              <span
                className="text-xl text-gray-700 ml-2"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                /month
              </span>
            </div>
            <ul
              className="space-y-3 mb-8 flex-grow"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              <li className="text-gray-700">✓ Tutto del PRO</li>
              <li className="text-gray-700">✓ AI: 1,000,000 token/mese</li>
              <li className="text-gray-700">✓ Voice transcription 2h/mese</li>
              <li className="text-gray-700">✓ DALL-E 50</li>
            </ul>
            <Link to="/early-access" className="w-full">
              <button
                className="w-full bg-black text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                Get Started
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotezPlansSection;
