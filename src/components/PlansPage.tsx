import React, { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$50",
    period: "/month",
    description: "",
    features: [
      "3 Automated Workflows",
      "Basic AI Assistant Access",
      "Email + Slack Integration",
      "Monthly Performance Reports",
      "Email Support"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$90",
    period: "/month",
    description: "",
    features: [
      "10+ Automated Workflows",
      "Advanced AI Assistant Features",
      "Bi-Weekly Strategy Reviews",
      "CRM + Marketing Tool Integrations",
      "Priority Support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "",
    features: [
      "Unlimited Custom Workflows",
      "Dedicated AI Strategist",
      "API & Private Integrations",
      "Real-Time Performance Dashboards",
      "24/7 Premium Support + SLA"
    ],
    popular: false
  }
];

const PlansPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <div className="pt-32 pb-24 min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block rounded-full px-4 py-2 mb-8" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
            <span className="text-white text-sm font-medium tracking-wide uppercase">PRICING</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Flexible Plans for <span className="italic text-gray-300">Everyone</span>
          </h1>
          <p className="text-xl font-normal max-w-4xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
            Choose a plan that fits your goals and scale as you grow
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16 animate-fade-in-up animation-delay-200">
          <div className='rounded-full p-1 flex' style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
            <button
              onClick={() => setBillingPeriod('monthly')}
              className='px-6 py-3 rounded-full font-medium transition-all duration-300 text-white'
              style={{
                backgroundColor: billingPeriod === 'monthly' ? '#0066FF' : 'transparent'
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className='px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 text-white'
              style={{
                backgroundColor: billingPeriod === 'yearly' ? '#0066FF' : 'transparent'
              }}
            >
              <span>Yearly</span>
              <span className='text-sm text-white px-2 py-1 rounded-full' style={{ backgroundColor: '#0066FF' }}>Save 20%</span>
            </button>
          </div>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-300">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className='relative rounded-3xl p-8 border transition-all duration-500'
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
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className='rounded-full px-4 py-2 flex items-center space-x-2' style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className='w-2 h-2 rounded-full' style={{ backgroundColor: '#888888' }}></div>
                    <span className='text-white text-sm font-medium'>Popular</span>
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className='ml-2 text-lg' style={{ color: '#888888' }}>{plan.period}</span>}
                </div>
              </div>
              
              <button 
                className='w-full py-4 px-6 rounded-2xl font-medium transition-all duration-300 mb-8 flex items-center justify-center space-x-2 text-white'
                style={{
                  backgroundColor: plan.popular ? '#0066FF' : '#1A1A1A',
                  border: '1px solid #1A1A1A'
                }}
              >
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className='w-5 h-5 flex-shrink-0 mt-0.5' style={{ color: '#888888' }} />
                    <span className='font-normal leading-relaxed' style={{ color: '#888888' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansPage;