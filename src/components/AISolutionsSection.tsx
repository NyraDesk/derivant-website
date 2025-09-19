import React from 'react';
import { CheckCircle, Users, Clock, AlertCircle, Search, TrendingUp, Code, BarChart3, Star, MessageSquare } from 'lucide-react';

const AISolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left Card - Automate repetitive tasks */}
          <div className="group relative">
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
              <div className="mb-8">
                {/* Task List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between rounded-xl p-4 border transition-all duration-300" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="w-5 h-5" style={{ color: '#888888' }} />
                      <span className="text-white">Social media post</span>
                    </div>
                    <CheckCircle className="w-5 h-5" style={{ color: '#888888' }} />
                  </div>
                  
                  <div className="flex items-center justify-between rounded-xl p-4 border transition-all duration-300" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5" style={{ color: '#888888' }} />
                      <span className="text-white">Employee Tracking</span>
                    </div>
                    <div className="relative">
                      <div className="w-5 h-5 border-2 border-blue-400 rounded-full animate-spin">
                        <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between rounded-xl p-4 border transition-all duration-300" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" style={{ color: '#888888' }} />
                      <span className="text-white">Payment reminder</span>
                    </div>
                    <CheckCircle className="w-5 h-5" style={{ color: '#888888' }} />
                  </div>
                  
                  <div className="flex items-center justify-between rounded-xl p-4 border transition-all duration-300" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5" style={{ color: '#888888' }} />
                      <span className="text-white">Deal Management</span>
                    </div>
                    <div className="relative">
                      <div className="w-5 h-5 border-2 border-blue-400 rounded-full animate-spin">
                        <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-0.5 left-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Automate repetitive tasks</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  We help you streamline internal operations by automating manual workflows
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Card - Automated Workflows */}
          <div className="group relative">
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
              <div className="mb-8 flex items-center justify-center min-h-[280px]">
                {/* Central Hub with Connected Icons */}
                <div className="relative">
                  {/* Central Star */}
                  <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <Star className="w-10 h-10" style={{ color: '#888888' }} />
                  </div>
                  
                  {/* Surrounding Icons */}
                  <div className="absolute -top-8 -left-8 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <MessageSquare className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                  
                  <div className="absolute -top-8 -right-8 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  
                  <div className="absolute -bottom-8 -left-8 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  
                  <div className="absolute -bottom-8 -right-8 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  
                  <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="text-white text-xl font-bold">N</div>
                  </div>
                  
                  <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <MessageSquare className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Automated Workflows</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  Boost efficiency across teams with smart automation Build intelligent workflows that automate multi-step processes across tools and platforms
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Real-Time Intelligence */}
          <div className="group relative">
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
              <div className="mb-8 min-h-[200px] flex flex-col justify-center">
                {/* Search Interface */}
                <div className="rounded-xl p-4 border mb-4" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                  <div className="flex items-center space-x-3">
                    <Search className="w-5 h-5" style={{ color: '#888888' }} />
                    <span className="text-white">Research anything...</span>
                    <button className="ml-auto px-3 py-1 rounded-lg text-white text-sm transition-all duration-200" style={{ backgroundColor: '#0066FF' }}>Research</button>
                  </div>
                </div>
                
                {/* Research Results */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg p-3 border transition-all duration-300" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" style={{ color: '#888888' }} />
                      <span className="text-white text-sm">Software & App Industry</span>
                    </div>
                    <TrendingUp className="w-4 h-4" style={{ color: '#888888' }} />
                  </div>
                  
                  <div className="flex items-center justify-between rounded-lg p-3 border transition-all duration-300" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" style={{ color: '#888888' }} />
                      <span className="text-white text-sm">UX & UI Design Industry</span>
                    </div>
                    <TrendingUp className="w-4 h-4" style={{ color: '#888888' }} />
                  </div>
                  
                  <div className="flex items-center justify-between rounded-lg p-3 border transition-all duration-300" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" style={{ color: '#888888' }} />
                      <span className="text-white text-sm">High Converting Customer</span>
                    </div>
                    <TrendingUp className="w-4 h-4" style={{ color: '#888888' }} />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-Time Intelligence</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  Make smarter decisions with live data insights Tap into real-time data
                </p>
              </div>
            </div>
          </div>
          
          {/* Custom AI Agent development */}
          <div className="group relative">
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
              <div className="mb-8 min-h-[200px] flex items-center justify-center">
                {/* Code Editor Interface */}
                <div className="rounded-xl p-4 border w-full" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Search className="w-4 h-4" style={{ color: '#888888' }} />
                      <Code className="w-4 h-4" style={{ color: '#888888' }} />
                    </div>
                  </div>
                  
                  <div className="font-mono text-sm space-y-1" style={{ color: '#888888' }}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                  </div>
                  
                  <div className="font-mono text-sm text-white mt-2 space-y-1">
                    <div><span style={{ color: '#888888' }}>def</span> <span style={{ color: '#888888' }}>__init__</span>(self, activation_limit):</div>
                    <div className="ml-4">self.activation_limit =</div>
                    <div className="ml-4">activation_limit</div>
                    <div className="ml-4">self.current_mode = <span style={{ color: '#888888' }}>"idle"</span></div>
                    <div></div>
                    <div><span style={{ color: '#888888' }}>def</span> <span style={{ color: '#888888' }}>evaluate_task</span>(self, workload_value):</div>
                    <div className="ml-4"><span style={{ color: '#888888' }}>if</span> workload_value &gt;</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom AI Agent development</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  We develop custom AI agents that integrate seamlessly with your tools
                </p>
              </div>
            </div>
          </div>
          
          {/* AI Strategy Consulting */}
          <div className="group relative">
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
              <div className="mb-8 min-h-[200px] flex items-center justify-center">
                {/* Analytics Dashboard */}
                <div className="relative w-full">
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <BarChart3 className="w-8 h-8" style={{ color: '#888888' }} />
                  </div>
                  
                  {/* Floating Analytics Elements */}
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <TrendingUp className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  
                  <div className="absolute bottom-0 right-1/4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
                    <Star className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Strategy Consulting</h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  Get expert guidance to implement AI solutions that drive business growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;