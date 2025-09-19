import { Star, MessageSquare, Users, Calendar, AlertCircle } from 'lucide-react';

const AIWorkforceSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Build, scale and manage<br />
            entire AI workforce
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
            NYRA helps you tackle data bottlenecks, streamline analysis, and make smarter decisions with ease.
          </p>
        </div>

        {/* Main Content Card */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Instant, One-Command Actions
                  </h3>
                  <p className="text-lg mb-8 leading-relaxed" style={{ color: '#888888' }}>
                    Type an action once—NYRA executes it across Slack, WhatsApp, HubSpot, Calendar, and more.
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#1A1A1A' }}>
                      <Star className="w-3 h-3" style={{ color: '#888888' }} />
                    </div>
                    <span className="text-white text-lg">Draft & send multi-channel messages</span>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#1A1A1A' }}>
                      <Star className="w-3 h-3" style={{ color: '#888888' }} />
                    </div>
                    <span className="text-white text-lg">Create CRM contacts on the fly</span>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#1A1A1A' }}>
                      <Star className="w-3 h-3" style={{ color: '#888888' }} />
                    </div>
                    <span className="text-white text-lg">Cancel meetings or raise issues instantly</span>
                  </div>
                </div>
              </div>

              {/* Right Visual - Actions Panel */}
              <div className="relative">
                <div className="rounded-2xl p-6 border" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                  {/* Search Bar */}
                  <div className="rounded-xl p-4 mb-6 border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                      <span className="text-lg" style={{ color: '#888888' }}>Actions</span>
                    </div>
                  </div>

                  {/* Action Items */}
                  <div className="space-y-3">
                    <div className="rounded-xl p-4 border transition-all duration-300" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                          <MessageSquare className="w-4 h-4" style={{ color: '#888888' }} />
                        </div>
                        <span className="text-white text-lg">Create Email Draft</span>
                      </div>
                    </div>

                    <div className="rounded-xl p-4 border transition-all duration-300" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                          <MessageSquare className="w-4 h-4" style={{ color: '#888888' }} />
                        </div>
                        <span className="text-white text-lg">Send WhatsApp</span>
                      </div>
                    </div>

                    <div className="rounded-xl p-4 border transition-all duration-300" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                          <Users className="w-4 h-4" style={{ color: '#888888' }} />
                        </div>
                        <span className="text-white text-lg">Create Hubspot Contact</span>
                      </div>
                    </div>

                    <div className="rounded-xl p-4 border transition-all duration-300" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                          <Calendar className="w-4 h-4" style={{ color: '#888888' }} />
                        </div>
                        <span className="text-white text-lg">Cancel Meeting</span>
                      </div>
                    </div>

                    <div className="rounded-xl p-4 border transition-all duration-300" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1A1A1A' }}>
                          <AlertCircle className="w-4 h-4" style={{ color: '#888888' }} />
                        </div>
                        <span className="text-white text-lg">Create Issue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkforceSection;