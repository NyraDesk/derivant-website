import React from 'react';

const NotezPrivacySection = () => {
  return (
    <section className="relative bg-gray-50 pt-12 md:pt-20 pb-20 md:pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Card Centrale Privacy */}
        <div className="bg-[#E8DCC8] rounded-3xl p-16 md:p-20 shadow-xl flex flex-col items-center text-center">

          {/* Simbolo Privacy */}
          <div className="mb-8">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Shield outline */}
              <path
                d="M40 8L15 18V35C15 50 25 62 40 72C55 62 65 50 65 35V18L40 8Z"
                stroke="#2C3E50"
                strokeWidth="3"
                fill="none"
                strokeLinejoin="round"
              />
              {/* Shield fill */}
              <path
                d="M40 8L15 18V35C15 50 25 62 40 72C55 62 65 50 65 35V18L40 8Z"
                fill="#5A7A95"
                opacity="0.3"
              />
              {/* Lock */}
              <rect x="32" y="38" width="16" height="16" rx="2" fill="#2C3E50"/>
              <path
                d="M35 38V33C35 30.2 37.2 28 40 28C42.8 28 45 30.2 45 33V38"
                stroke="#2C3E50"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="40" cy="46" r="2" fill="#E8DCC8"/>
            </svg>
          </div>

          {/* Testo */}
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 text-black"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.02em'
              }}
            >
              Ciò che organizza la tua vita, non deve invaderla.
            </h2>
            <p
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                fontWeight: 300
              }}
            >
              La tua privacy è parte dell'esperienza: discreta, protetta, inviolabile.
            </p>
            <p
              className="text-xl md:text-2xl text-gray-700 font-medium"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
              }}
            >
              I tuoi dati sono al sicuro.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotezPrivacySection;
