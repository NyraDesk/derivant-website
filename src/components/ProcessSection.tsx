import { Search } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-3d">
            The process
          </h2>
        </div>
        
        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 - Analyze */}
          <div className="relative group">
            <div className="rounded-3xl p-8 border transition-all duration-300"
                 style={{ 
                   backgroundColor: '#0A0A0A',
                   border: '1px solid #1A1A1A',
                   boxShadow: '0 40px 80px -20px rgba(37, 37, 37, 0.95), 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = 'rgba(123, 155, 185, 0.66)';
                   e.currentTarget.style.boxShadow = '0 50px 100px -25px rgba(0, 0, 0, 1), 0 25px 50px -12px rgba(42, 42, 42, 0.9), 0 15px 30px -8px rgba(0, 0, 0, 0.7)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = '#1A1A1A';
                   e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(0, 0, 0, 0.95), 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)';
                 }}>
              {/* Visual Content Area */}
              <div className="mb-8 h-64 rounded-2xl border flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A', boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.4)' }}>
                {/* App Icons Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <Search className="w-6 h-6" style={{ color: '#888888' }} />
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <span className="text-lg font-bold" style={{ color: '#888888' }}>M</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <span className="text-lg font-bold" style={{ color: '#888888' }}>N</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: '#888888' }}></div>
                  </div>
                </div>
                
                {/* Floating dot indicator */}
                <div className="absolute top-4 left-4 w-3 h-3 rounded-full" style={{ backgroundColor: '#888888' }}></div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span style={{ color: 'rgba(123, 155, 185, 0.66)' }}>01</span> Analyze
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  We start with a thorough analysis of your current workflows to see how AI could improve your processes.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 2 - Build & Implement */}
          <div className="relative group">
            <div className="rounded-3xl p-8 border transition-all duration-300"
                 style={{ 
                   backgroundColor: '#0A0A0A',
                   border: '1px solid #1A1A1A',
                   boxShadow: '0 40px 80px -20px rgba(30, 30, 30, 0.95), 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = 'rgba(123, 155, 185, 0.66)';
                   e.currentTarget.style.boxShadow = '0 50px 100px -25px rgba(0, 0, 0, 1), 0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 15px 30px -8px rgba(0, 0, 0, 0.7)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = '#1A1A1A';
                   e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(0, 0, 0, 0.95), 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)';
                 }}>
              {/* Visual Content Area */}
              <div className="mb-8 h-64 rounded-2xl border flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A', boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.4)' }}>
                {/* Code Editor Interface */}
                <div className="w-full h-full p-4">
                  {/* Editor Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#888888' }}></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm rounded px-2 py-1" style={{ color: 'rgba(123, 155, 185, 0.66)', backgroundColor: '#0A0A0A', border: '1px solid rgba(123, 155, 185, 0.66)' }}>HTML</span>
                      <span className="text-sm" style={{ color: '#888888' }}>React</span>
                      <span className="text-sm" style={{ color: '#888888' }}>CSS</span>
                    </div>
                  </div>
                  
                  {/* Code Lines */}
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="w-4" style={{ color: '#888888' }}>1</span>
                      <span style={{ color: '#888888' }}>&lt;html lang="en"&gt;</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-4" style={{ color: '#888888' }}>2</span>
                      <span style={{ color: '#888888' }}>&lt;head&gt;</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-4" style={{ color: '#888888' }}>3</span>
                      <span style={{ color: '#888888' }}>&lt;meta <span className="text-white">charset</span>="UTF-8"&gt;</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-4" style={{ color: '#888888' }}>4</span>
                      <span style={{ color: '#888888' }}>&lt;meta <span className="text-white">name</span>="viewport"</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-4" style={{ color: '#888888' }}>5</span>
                      <span className="ml-8" style={{ color: '#888888' }}><span className="text-white">content</span>="width=device-width"&gt;</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-4" style={{ color: '#888888' }}>6</span>
                      <span className="ml-4" style={{ color: '#888888' }}><span className="text-white">width</span>: initial;</span>
                    </div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-4 right-4 rounded-lg px-3 py-2 border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                    <span className="text-sm" style={{ color: '#888888' }}>Tibor</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span style={{ color: 'rgba(123, 155, 185, 0.66)' }}>02</span> Build & Implement
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  Then, our developers will start crafting custom AI solutions for your company, continuously prioritising quality and safety.
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 3 - Maintain & Improve */}
          <div className="relative group">
            <div className="rounded-3xl p-8 border transition-all duration-300"
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
              {/* Visual Content Area */}
              <div className="mb-8 h-64 rounded-2xl border flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A', boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.4)' }}>
                {/* Metrics Dashboard */}
                <div className="w-full h-full p-6">
                  {/* Metrics List */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg p-3 border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                      <span className="text-white">Software speed</span>
                      <span className="text-white font-medium">+38%</span>
                    </div>
                    
                    <div className="flex items-center justify-between rounded-lg p-3 border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                      <span className="text-white">Workflow efficiency</span>
                      <span className="text-white font-medium">+25%</span>
                    </div>
                    
                    <div className="flex items-center justify-between rounded-lg p-3 border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                      <span className="text-white">Operational cost</span>
                      <span className="text-white font-medium">-11%</span>
                    </div>
                    
                    <div className="flex items-center justify-between rounded-lg p-3 border" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                      <span className="text-white">Update available</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white">Update</span>
                        <div className="w-4 h-4 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span style={{ color: 'rgba(123, 155, 185, 0.66)' }}>03</span> Maintain & Improve
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#888888' }}>
                  After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;