import React from 'react';

const DemoSection = () => {
  return (
    <section className="py-8 md:py-32" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
            See NYRA in action
          </h2>
          <p className="text-sm md:text-lg font-normal max-w-4xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
            Watch how NYRA transforms your workflow with intelligent automation
          </p>
        </div>
        
        <div className="animate-slide-in-up animation-delay-300">
          <div className="bg-white rounded-t-2xl md:rounded-t-3xl max-w-5xl mx-auto overflow-hidden transform hover:scale-[1.02] transition-all duration-500" style={{ boxShadow: '0 40px 80px -20px rgba(107, 115, 137, 0.24), 0 20px 40px -10px rgba(31, 32, 33, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)' }}>
            {/* Browser Header */}
            <div className="px-4 md:px-6 py-3 md:py-4 flex items-center space-x-3 md:space-x-4" style={{ backgroundColor: '#1A1A1A', borderBottom: '1px solid #1A1A1A' }}>
              {/* Traffic Lights */}
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: '#888888' }}></div>
                <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: '#888888' }}></div>
                <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: '#888888' }}></div>
              </div>
              
              {/* Browser Tab */}
              <div className="flex-1 flex items-center">
                <div className="bg-white rounded-t-lg px-3 md:px-4 py-2 border-t border-l border-r flex items-center space-x-2 shadow-sm" style={{ borderColor: '#1A1A1A' }}>
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(123, 155, 185, 0.66)' }}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="font-medium text-sm md:text-base" style={{ color: '#888888' }}>NYRA</span>
                </div>
              </div>
              
              {/* URL Bar */}
              <div className="hidden md:flex flex-1 max-w-md">
                <div className="w-full bg-white rounded-full px-4 py-2 border text-sm" style={{ borderColor: '#1A1A1A', color: '#888888' }}>
                  https://app.nyra.ai
                </div>
              </div>
            </div>
            
            {/* Browser Content */}
            <div className="min-h-[300px] md:min-h-[500px] flex items-center justify-center p-6 md:p-12" style={{ backgroundColor: '#0A0A0A' }}>
              <div className="text-center space-y-4 md:space-y-6">
                {/* Placeholder for demo content */}
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#1A1A1A', boxShadow: '0 40px 80px -20px rgba(107, 115, 137, 0.24), 0 20px 40px -10px rgba(31, 32, 33, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)' }}>
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center">
                        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full" style={{ backgroundColor: 'rgba(123, 155, 185, 0.66)' }}></div>
                      </div>
                    </div>
                
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-lg md:text-2xl font-medium text-white">
                    Interactive Demo Coming Soon
                  </h3>
                  <p className="text-sm md:text-base max-w-md mx-auto" style={{ color: '#888888' }}>
                    Experience NYRA's powerful automation capabilities in a live, interactive environment
                  </p>
                </div>
                
                {/* Mock interface elements */}
                <div className="rounded-xl p-4 md:p-6 border max-w-md mx-auto" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A', boxShadow: '0 40px 80px -20px rgba(107, 115, 137, 0.24), 0 20px 40px -10px rgba(31, 32, 33, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)' }}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(123, 155, 185, 0.66)' }}>
                      <span className="text-white text-sm font-medium">N</span>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-white">NYRA Assistant</div>
                      <div className="text-xs" style={{ color: '#888888' }}>Ready to help</div>
                    </div>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="rounded-lg p-3 text-left" style={{ backgroundColor: '#0A0A0A' }}>
                      <div className="text-sm text-white">
                        "Create a presentation about Q4 results and schedule a team meeting for tomorrow at 2 PM"
                      </div>
                    </div>
                    <div className="rounded-lg p-3 text-left" style={{ backgroundColor: '#0A0A0A' }}>
                      <div className="text-sm" style={{ color: '#888888' }}>
                        ✓ Creating PowerPoint presentation...
                      </div>
                      <div className="text-sm" style={{ color: '#888888' }}>
                        ✓ Scheduling meeting for Dec 15, 2:00 PM
                      </div>
                      <div className="text-sm font-medium text-white">
                        Done! Presentation created and meeting scheduled.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements for extra visual appeal */}
          <div className="relative">
            <div className="absolute -top-8 -left-4 w-16 h-16 rounded-full blur-xl animate-pulse" style={{ backgroundColor: '#888888' }}></div>
            <div className="absolute -top-12 -right-8 w-24 h-24 rounded-full blur-2xl animate-pulse animation-delay-200" style={{ backgroundColor: '#888888' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;