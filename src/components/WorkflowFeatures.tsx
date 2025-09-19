import React from 'react';
import { Network, Hourglass, Lightbulb } from 'lucide-react';

const WorkflowFeatures = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-meet-nyra mb-8 text-3d">
            Why Nyra?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          
          {/* Tab 1 - Connects with your world */}
          <div className="relative group h-full">
            <div className="rounded-3xl p-8 border transition-all duration-300 h-full flex flex-col"
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
                 }}>
              
              <div className="flex flex-col flex-grow">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 floating-element"
                     style={{
                       backgroundColor: '#1A1A1A',
                       border: '1px solid rgba(120, 127, 150, 0.6)',
                       boxShadow: '0 4px 8px -2px rgba(137, 146, 165, 0.4)'
                     }}>
                  <Network className="w-6 h-6" style={{ color: '#6B7280' }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Connects with your world</h3>
                <p className="text-lg leading-relaxed flex-grow" style={{ color: '#888888' }}>
                  Nyra links seamlessly with Gmail, Calendar, Excel, and documents — automating your daily workflows with a single command.
                </p>
              </div>
            </div>
          </div>
          
          {/* Tab 2 - Solves your bottlenecks */}
          <div className="relative group h-full">
            <div className="rounded-3xl p-8 border transition-all duration-300 h-full flex flex-col"
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
                 }}>
              
              <div className="flex flex-col flex-grow">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 floating-element"
                     style={{
                       backgroundColor: '#1A1A1A',
                       border: '1px solid rgba(120, 127, 150, 0.6)',
                       boxShadow: '0 4px 8px -2px rgba(137, 146, 165, 0.4)'
                     }}>
                  <Hourglass className="w-6 h-6" style={{ color: '#6B7280' }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Solves your bottlenecks</h3>
                <p className="text-lg leading-relaxed flex-grow" style={{ color: '#888888' }}>
                  From bulk emails to smart scheduling and instant data analysis, Nyra cuts through repetitive tasks so you focus on what matters.
                </p>
              </div>
            </div>
          </div>
          
          {/* Tab 3 - Amplifies your productivity */}
          <div className="relative group h-full">
            <div className="rounded-3xl p-8 border transition-all duration-300 h-full flex flex-col"
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
                 }}>
              
              <div className="flex flex-col flex-grow">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 floating-element"
                     style={{
                       backgroundColor: '#1A1A1A',
                       border: '1px solid rgba(120, 127, 150, 0.6)',
                       boxShadow: '0 4px 8px -2px rgba(137, 146, 165, 0.4)'
                     }}>
                  <Lightbulb className="w-6 h-6" style={{ color: '#6B7280' }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Amplifies your productivity</h3>
                <p className="text-lg leading-relaxed flex-grow" style={{ color: '#888888' }}>
                  Turn hours of manual work into minutes of AI-powered actions — always under your control, always secure.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkflowFeatures;