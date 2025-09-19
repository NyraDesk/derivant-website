import React from 'react';
import { Shield, Server, Eye, Lock } from 'lucide-react';

const privacyFeatures = [
  {
    icon: Shield,
    title: "No Data Collection",
    description: "NYRA never collects, stores, or transmits your personal data. What happens on your device stays on your device."
  },
  {
    icon: Server,
    title: "Offline Processing",
    description: "All AI processing happens locally. No internet connection required for core functionality."
  },
  {
    icon: Eye,
    title: "No Tracking",
    description: "Zero analytics, no usage tracking, no behavioral monitoring. Your privacy is completely protected."
  },
  {
    icon: Lock,
    title: "Encrypted Storage",
    description: "Any preferences or learned patterns are encrypted and stored only on your local device."
  }
];

const Privacy = () => {
  return (
    <section id="privacy" className="py-20" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            Your Data Stays Yours
          </h2>
          <p className="text-lg font-normal max-w-2xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
            In a world of data breaches and privacy concerns, NYRA takes a different approach. Complete privacy by design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {privacyFeatures.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border transition-all duration-300"
              style={{ 
                backgroundColor: '#0A0A0A',
                border: '1px solid #1A1A1A',
                boxShadow: '0 40px 80px -20px rgba(107, 115, 137, 0.24), 0 20px 40px -10px rgba(31, 32, 33, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(123, 155, 185, 0.66)';
                e.currentTarget.style.boxShadow = '0 50px 100px -25px rgba(123, 155, 185, 0.3), 0 25px 50px -12px rgba(33, 33, 34, 0.5), 0 15px 30px -8px rgba(67, 67, 69, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1A1A1A';
                e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(79, 80, 82, 0.49), 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)';
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#1A1A1A' }}>
                <feature.icon className="w-6 h-6" style={{ color: '#888888' }} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
              <p className="leading-relaxed font-normal" style={{ color: '#888888' }}>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A', boxShadow: '0 40px 80px -20px rgba(107, 115, 137, 0.24), 0 20px 40px -10px rgba(31, 32, 33, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)' }}>
          <div className="text-center">
            <h3 className="text-xl font-medium text-white mb-8">Privacy Guarantee</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-normal text-white mb-2">0%</div>
                <div className="font-normal" style={{ color: '#888888' }}>Data sent to cloud</div>
              </div>
              <div>
                <div className="text-3xl font-normal text-white mb-2">100%</div>
                <div className="font-normal" style={{ color: '#888888' }}>Local processing</div>
              </div>
              <div>
                <div className="text-3xl font-normal text-white mb-2">∞</div>
                <div className="font-normal" style={{ color: '#888888' }}>Your privacy protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;