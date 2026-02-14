import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gray-50 pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-20">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8 text-black"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                fontWeight: 600,
                letterSpacing: '-0.04em'
              }}
            >
              DERIVANT AI
            </h1>
            <p
              className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                fontWeight: 300
              }}
            >
              Derivant AI costruisce strumenti AI che amplificano la produttività umana senza sostituirla.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20 text-center">
            <h2
              className="text-3xl md:text-4xl font-medium text-black mb-6"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              La nostra missione
            </h2>
            <p
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                fontWeight: 300
              }}
            >
              Creare software intelligenti che rispettano la tua privacy, funzionano offline e non ti costringono al cloud.
            </p>
            <div className="mt-8">
              <p
                className="text-xl text-gray-700 mb-4 font-medium"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                Crediamo in
              </p>
              <div
                className="space-y-3 text-xl text-gray-700"
                style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
              >
                <p>AI come assistente, non sostituto. Privacy-first, sempre. Semplicità over complessità. Open roadmap, user-driven.</p>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-20 text-center">
            <h2
              className="text-3xl md:text-4xl font-medium text-black mb-8"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              I nostri prodotti
            </h2>
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl font-medium text-black mb-2"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  Derivant Presentation Builder
                </h3>
                <p
                  className="text-xl text-gray-700"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  AI presentation builder per pitch deck, moodboard e presentazioni professionali
                </p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center mt-24">
            <p
              className="text-lg text-gray-600 mb-2"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              Founded in Milano, 2025
            </p>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
            >
              Building tools for makers
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
