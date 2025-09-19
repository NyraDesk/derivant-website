import React from 'react';
import { MessageSquare, Cpu, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Speak Naturally",
    description: "Tell NYRA what you need in plain English. No commands to memorize, no syntax to learn."
  },
  {
    icon: Cpu,
    title: "Process Locally",
    description: "NYRA understands your request and processes it entirely on your device - no internet required."
  },
  {
    icon: CheckCircle,
    title: "Action Completed",
    description: "Watch as NYRA opens apps, creates files, schedules meetings, or completes any task you need."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            How NYRA Works
          </h2>
          <p className="text-lg font-normal max-w-2xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
            Three simple steps to transform your productivity. No setup, no configuration - just install and start talking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A' }}>
                  <step.icon className="w-8 h-8" style={{ color: '#888888' }} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium" style={{ backgroundColor: '#1A1A1A' }}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>
                )}
              </div>
              <h3 className="text-xl font-medium text-white mb-3">{step.title}</h3>
              <p className="leading-relaxed font-normal max-w-sm mx-auto" style={{ color: '#888888' }}>{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 rounded-2xl p-8" style={{ backgroundColor: '#0A0A0A', border: '1px solid #1A1A1A', boxShadow: '0 40px 80px -20px rgba(107, 115, 137, 0.24), 0 20px 40px -10px rgba(31, 32, 33, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-medium text-white mb-6">See NYRA in Action</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#888888' }}></div>
                  <div>
                    <div className="font-medium text-white">"Create a new document for the Johnson project"</div>
                    <div className="text-sm font-normal" style={{ color: '#888888' }}>Opens your word processor and creates a new file</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#888888' }}></div>
                  <div>
                    <div className="font-medium text-white">"Remind me to call mom at 6pm today"</div>
                    <div className="text-sm font-normal" style={{ color: '#888888' }}>Sets up a notification with your preferred reminder app</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#888888' }}></div>
                  <div>
                    <div className="font-medium text-white">"Schedule a team meeting for next Wednesday at 3pm"</div>
                    <div className="text-sm font-normal" style={{ color: '#888888' }}>Creates calendar event and sends invitations</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 font-mono text-sm" style={{ backgroundColor: '#1A1A1A', border: '1px solid #1A1A1A' }}>
              <div className="mb-3" style={{ color: '#888888' }}>NYRA Command Interface</div>
              <div className="space-y-2">
                <div className="text-white">$ nyra "Open Spotify and play jazz music"</div>
                <div style={{ color: '#888888' }}>✓ Opening Spotify...</div>
                <div style={{ color: '#888888' }}>✓ Searching for jazz playlists...</div>
                <div style={{ color: '#888888' }}>✓ Playing "Smooth Jazz Classics"</div>
                <div className="text-white mt-3">Ready for next command...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;