import React from 'react';
import { Shield, Cpu, Lock, Zap, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "No Data Collection",
    description: "NYRA never collects, stores, or transmits your personal data. What happens on your device stays on your device."
  },
  {
    icon: Cpu,
    title: "Offline Processing",
    description: "All AI processing happens locally. No internet connection required for core functionality."
  },
  {
    icon: Lock,
    title: "Encrypted Storage",
    description: "Any preferences or learned patterns are encrypted and stored only on your local device."
  },
  {
    icon: Zap,
    title: "Email Automation from Excel",
    description: "Automatically process Excel data and send personalized emails to multiple recipients with intelligent templates and scheduling."
  },
  {
    icon: Clock,
    title: "Smart Calendar Management",
    description: "Intelligent calendar coordination, meeting scheduling, and automatic conflict resolution across multiple calendars."
  },
  {
    icon: Users,
    title: "Document Processing",
    description: "Automatically extract, analyze, and process documents with AI-powered understanding and intelligent data extraction."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            Built for Privacy, Designed for Power
          </h2>
          <p className="text-lg font-normal max-w-2xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
            Experience the future of AI assistance without compromising your privacy. Every feature is designed with your data protection in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl transition-all duration-300"
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
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: '#1A1A1A' }}>
                <feature.icon className="w-6 h-6" style={{ color: '#888888' }} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">{feature.title}</h3>
              <p className="leading-relaxed font-normal" style={{ color: '#888888' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;