import React, { useState, useEffect } from 'react';

const EarlyAccessPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if we're returning from Formspree redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-medium text-white mb-4" style={{ fontFamily: 'Inter' }}>
            You're on the list!
          </h1>
          <p className="text-lg text-gray-300 mb-8" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
            We'll reach out as soon as NotezAI is ready for you.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-blue-600 to-slate-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-lg"
            style={{ fontFamily: 'Inter', fontWeight: 500 }}
          >
            Back to site
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .responsive-title-ea {
          font-family: Inter;
          font-size: 1.875rem !important;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          line-height: 1.3;
          max-width: 100%;
          padding: 0 1rem;
          margin: 0 auto;
        }
        .responsive-title-ea span {
          display: block;
          font-size: 1.5rem !important;
        }
        .responsive-title-ea span:first-child {
          white-space: nowrap;
        }
        @media (min-width: 768px) {
          .responsive-title-ea {
            font-size: 48px !important;
            white-space: nowrap;
            padding: 0;
            max-width: none;
            width: auto;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 30%;
            margin-top: -24px;
          }
          .responsive-title-ea span {
            display: inline;
            font-size: 48px !important;
          }
        }
        .responsive-subtitle-ea {
          font-family: Inter;
          font-size: 1rem !important;
          font-weight: 500;
          color: #9CA3AF;
          text-align: center;
          margin: 0 auto;
          max-width: 90%;
          padding: 0 1rem;
        }
        @media (min-width: 768px) {
          .responsive-subtitle-ea {
            font-size: 17px !important;
            white-space: nowrap;
            padding: 0;
            max-width: none;
            width: 100%;
          }
        }
        .responsive-cta-ea {
          font-family: Inter;
          font-size: 1rem !important;
          font-weight: 500;
          color: #9CA3AF;
          margin-bottom: 30px;
          padding: 0 1rem;
        }
        @media (min-width: 768px) {
          .responsive-cta-ea {
            font-size: 17px !important;
            padding: 0;
          }
        }
      `}} />
      <div className="min-h-screen bg-black flex items-center justify-center px-6 pt-24 md:pt-0">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="w-full flex justify-center items-center mb-8 md:mb-0">
              <h1 className="responsive-title-ea">
                <span className="block md:inline">Work smarter with NotezAI</span>
                <span className="block md:inline"> for notes, tasks and calendar</span>
              </h1>
            </div>
          <div className="w-full flex justify-center mb-8 md:mb-0" style={{ marginTop: '0', marginBottom: '0' }}>
            <p className="responsive-subtitle-ea">
              Workspace unificato con AI integrata. Tutto connesso. Sempre veloce. Privacy-first.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-10">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6 md:space-y-8 w-full max-w-md"
          >
            <input type="hidden" name="access_key" value="9f92b39f-70b2-4573-9b46-eb036376a2c8" />
            <input type="hidden" name="redirect" value="https://derivant.ai/early-access?submitted=true" />
            <input type="hidden" name="subject" value="New NotezAI Waitlist Signup" />

            <div className="text-center mb-6 md:mb-8">
              <p className="responsive-cta-ea">
                Secure your spot now, early access is limited!
              </p>
            </div>
            <div className="relative mt-6 md:mt-8">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full px-4 py-3 text-center bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-0 transition-colors"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '16px'
                }}
              />
            </div>

            <div className="flex items-center justify-center space-x-4 w-full mt-6 md:mt-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-slate-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '16px',
                  padding: '12px 24px'
                }}
              >
                Join the Waitlist
              </button>
              <span
                className="text-gray-400 text-sm"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400
                }}
              >
                press Enter ↵
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default EarlyAccessPage;