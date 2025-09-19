import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content Card */}
        <div className="relative group">
          {/* 3D shadow layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-800/20 rounded-3xl transform translate-x-2 translate-y-2 blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-slate-700/10 rounded-3xl transform translate-x-1 translate-y-1 blur-lg"></div>
          
          <div className="relative bg-gradient-to-br from-blue-900/40 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-blue-500/20 hover:border-blue-400/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    See NYRA in Action
                  </h3>
                  <p className="text-lg text-white/80 mb-8 leading-relaxed">
                    Watch how NYRA transforms your workflow with intelligent automation and seamless integration across all your tools.
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-blue-400/30">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-white text-lg">Real-time workflow automation</span>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-blue-400/30">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-white text-lg">Multi-platform integration</span>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-blue-400/30">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-white text-lg">Intelligent task execution</span>
                  </div>
                </div>
              </div>

              {/* Right Visual - Video Player */}
              <div className="relative">
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 shadow-2xl">
                  {/* Video Container */}
                  <div className="relative bg-black/80 rounded-xl overflow-hidden border border-slate-700/40 aspect-video">
                    {/* Video Element */}
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      poster="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                    >
                      <source src="src/assets/nyra-demo.mp4" type="video/mp4" />
                      <source src="src/assets/test nyra sito.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Play Button Overlay (optional) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="w-16 h-16 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/40 hover:bg-blue-500/80 transition-all duration-300 transform hover:scale-110">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">NYRA Demo</h4>
                      <p className="text-white/60 text-sm">See the future of AI automation</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/60 text-sm">Live Demo</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-slate-500/10 rounded-full blur-2xl animate-pulse animation-delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;