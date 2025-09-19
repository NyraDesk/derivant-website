import { Zap, Circle, Edit3, Palette, Database, Smartphone, Globe, Calendar, CheckSquare } from 'lucide-react';

const AutomateWorkflowsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-6 py-2 mb-8" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
            <span className="text-white text-sm font-medium tracking-wide uppercase">AI-DRIVEN FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Automate workflows in<br />
            three simple steps
          </h2>
        </div>

        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1: Select a trigger */}
          <div className="relative group">
            <div className="relative rounded-3xl p-8 border transition-all duration-300"
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
              {/* Visual Card */}
              <div className="rounded-2xl p-6 mb-8 min-h-[280px] flex flex-col justify-center space-y-6 border" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                {/* When this happen */}
                <div className="rounded-xl p-4 border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5" style={{ color: '#888888' }} />
                    <span className="text-white text-lg font-medium">When this happen</span>
                  </div>
                </div>
                
                {/* Connecting line */}
                <div className="flex justify-center">
                  <div className="w-px h-8" style={{ backgroundColor: '#888888' }}></div>
                </div>
                
                {/* Do this */}
                <div className="rounded-xl p-4 border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                  <div className="flex items-center space-x-3">
                    <Circle className="w-5 h-5 fill-current" style={{ color: '#888888' }} />
                    <span className="text-white text-lg font-medium">Do this</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Select a trigger</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  Choose an event or schedule that kicks off your workflow.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 2: Connect your apps */}
          <div className="relative group">
            <div className="relative rounded-3xl p-8 border transition-all duration-300"
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
              {/* Visual Card */}
              <div className="rounded-2xl p-6 mb-8 min-h-[280px] flex flex-col justify-center border" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                {/* App Icons Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Row 1 */}
                  <div className="w-12 h-12 rounded-xl border flex items-center justify-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <Edit3 className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                  <div className="w-12 h-12 rounded-xl border flex items-center justify-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <Palette className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                  <div className="w-12 h-12 rounded-xl border flex items-center justify-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <Database className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                  
                  {/* Row 2 */}
                  <div className="w-12 h-12 rounded-xl border flex items-center justify-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <Smartphone className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                  <div className="w-12 h-12 rounded-xl border flex items-center justify-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <Globe className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                  <div className="w-12 h-12 rounded-xl border flex items-center justify-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <Calendar className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Connect your apps</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  Sync NYRA with your tools—CRM, email, Slack, and more.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 3: Let AI do the work */}
          <div className="relative group">
            <div className="relative rounded-3xl p-8 border transition-all duration-300"
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
              {/* Visual Card */}
              <div className="rounded-2xl p-6 mb-8 min-h-[280px] flex items-center justify-center border" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                {/* Large Check Icon */}
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                  <CheckSquare className="w-10 h-10" style={{ color: '#888888' }} />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Let AI do the work</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  Lets NYRA execute tasks automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomateWorkflowsSection;