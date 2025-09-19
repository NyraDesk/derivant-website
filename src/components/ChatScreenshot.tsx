import React from 'react';

const ChatScreenshot = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-block bg-nyra-blue/10 text-nyra-blue-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
            How it looks in action
          </div>
        </div>
        
        <div className="animate-fade-in-up animation-delay-200">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
              alt="NYRA chat interface showing a real conversation"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl border border-nyra-gray-dark"
              style={{ aspectRatio: '16/10' }}
            />
            
            {/* Overlay to simulate chat interface */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
            
            {/* Mock chat overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-nyra-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">N</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-nyra-blue/10 rounded-lg p-3 text-sm text-gray-800">
                      I've opened Spotify and started playing your "Focus Music" playlist. Also created a reminder to call Sarah at 3 PM today.
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-block bg-nyra-blue text-white rounded-lg p-3 text-sm">
                    Perfect! Can you also dim the lights to 30%?
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

export default ChatScreenshot;