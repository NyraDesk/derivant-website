import React, { useState } from 'react';

const EarlyAccessPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log('Email submitted:', email);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

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
            We'll reach out as soon as NYRA is ready for you.
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
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-full flex justify-center items-center">
            <h1 
              style={{ 
                fontFamily: 'Inter', 
                fontSize: '48px', 
                fontWeight: 700, 
                color: '#ffffff',
                textAlign: 'center',
                width: 'auto',
                margin: '0 auto',
                display: 'block',
                lineHeight: '1.2',
                whiteSpace: 'nowrap',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '30%',
                marginTop: '-24px'
              }}
            >
              Work faster with Nyra AI for data, files and emails
            </h1>
          </div>
          <div className="w-full flex justify-center" style={{ marginTop: '120px', marginBottom: '60px' }}>
            <p 
              style={{ 
                fontFamily: 'Inter', 
                fontWeight: 500, 
                fontSize: '17px', 
                color: '#9CA3AF',
                textAlign: 'center',
                width: '100%',
                margin: '0 auto',
                display: 'block',
                whiteSpace: 'nowrap'
              }}
            >
              Analyze content, generate files, extract insights and send multi-emails all in one place
            </p>
          </div>
        </div>

        <div className="flex justify-center" style={{ marginTop: '40px' }}>
          <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-md">
            <div className="text-center">
              <p 
                style={{ 
                  fontFamily: 'Inter', 
                  fontSize: '17px',
                  fontWeight: 500,
                  color: '#9CA3AF',
                  marginBottom: '30px'
                }}
              >
                Secure your spot now, early access is limited!
              </p>
            </div>
            <div className="relative" style={{ marginTop: '80px' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
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
            
            <div className="flex items-center justify-center space-x-4 w-full" style={{ marginTop: '40px' }}>
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
  );
};

export default EarlyAccessPage;