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

        {/* Grid 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">

          {/* Card 1 - Free */}
          <div className="bg-[#E8DCC8] rounded-3xl p-8 shadow-xl flex flex-col">
            <h3
              className="text-3xl font-medium text-black mb-2"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              Free
            </h3>
            <p
              className="text-gray-600 mb-6"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              Perfect for getting started with AI presentations
            </p>
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
            <div className="mb-8">
              <div
                className="w-full bg-gray-400 text-white py-3 px-6 rounded-xl font-medium text-center"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                Current Plan
              </div>
            </div>
            <ul
              className="space-y-3 flex-grow"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              <li className="text-gray-700">✓ Try AI presentations</li>
              <li className="text-gray-700">✓ All templates</li>
              <li className="text-gray-700">✓ PDF export with watermark</li>
            </ul>
          </div>

          {/* Card 2 - Pro */}
          <div className="bg-[#E8DCC8] rounded-3xl p-8 shadow-xl flex flex-col relative">
            <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Launch Offer
            </div>
            <h3
              className="text-3xl font-medium text-black mb-2"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              Pro
            </h3>
            <p
              className="text-gray-600 mb-6"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              For professionals who need more power
            </p>
            <div className="mb-6 flex items-baseline gap-3">
              <span
                className="text-2xl text-gray-500 line-through"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                €9.99
              </span>
              <span
                className="text-5xl font-semibold text-black"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                €6.99
              </span>
              <span
                className="text-xl text-gray-700"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                /month
              </span>
            </div>
            <Link to="/early-access" className="w-full mb-8">
              <button
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-600 transition"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                Upgrade to Pro
              </button>
            </Link>
            <ul
              className="space-y-3 flex-grow"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              <li className="text-gray-700">✓ 500 credits/month</li>
              <li className="text-gray-700">✓ Advanced AI images</li>
              <li className="text-gray-700">✓ PDF export without watermark</li>
              <li className="text-gray-700">✓ Priority support</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotezPlansSection;
