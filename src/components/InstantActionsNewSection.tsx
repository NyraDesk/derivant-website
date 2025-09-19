import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const InstantActionsNewSection = () => {
  const sectionRef = useRef(null);
  const chatRef = useRef(null);
  
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // GSAP Timeline triggered by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
      
      // Animate NYRA interface appearing
      tl.from(chatRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      // Animate chat messages in sequence
      .from(".chat-message", {
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: "power3.out"
      })
      // Animate button with elastic effect
      .from(".send-button", {
        scale: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)"
      });
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight whitespace-nowrap">
            Build, scale and manage entire AI workforce
          </h2>
          <p className="text-xl text-white leading-relaxed">
            NYRA helps you tackle data bottlenecks, streamline analysis, and make smarter decisions with ease.
          </p>
        </div>
        
        {/* Main Content Card */}
        <div className="relative group">
          <div className="relative rounded-3xl p-8 border transition-all duration-300"
               style={{ 
                 backgroundColor: 'rgb(12, 12, 12)',
                 backdropFilter: 'blur(15px)',
                 border: '1px solid rgba(175, 198, 236, 0.2)',
                 boxShadow: '0 40px 80px -20px rgba(59, 130, 246, 0.2), 0 20px 40px -10px rgba(0, 127, 254, 0.26), 0 10px 20px -5px rgba(0, 0, 0, 0.6)'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.borderColor = 'rgba(123, 155, 185, 0.66)';
                 e.currentTarget.style.boxShadow = '0 50px 100px -25px rgba(0, 0, 0, 1), 0 25px 50px -12px rgba(42, 42, 42, 0.9), 0 15px 30px -8px rgba(0, 0, 0, 0.7)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.borderColor = '#1A1A1A';
                 e.currentTarget.style.boxShadow = '0 40px 80px -20px rgba(0, 0, 0, 0.95), 0 20px 40px -10px rgba(0, 0, 0, 0.8), 0 10px 20px -5px rgba(0, 0, 0, 0.6)';
               }}>
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              
              {/* Left Column - Description */}
              <div className="space-y-8 lg:w-1/2">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ marginTop: '2rem' }}>
                    Work Smarter with NYRA
                  </h3>
                  <p className="text-xl text-white leading-relaxed mb-8">
                    Enterprise-grade automation that handles email automation from Excel, smart calendar management, and intelligent document processing — helping professionals save hours every day. Always under your control.
                  </p>
                </div>
                
                {/* Feature List */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 mt-1">
                      <svg className="w-full h-full" style={{ color: '#888888' }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-white">Send personalized emails to thousands from Excel</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 mt-1">
                      <svg className="w-full h-full" style={{ color: '#888888' }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-white">Process and analyze spreadsheet data instantly</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 mt-1">
                      <svg className="w-full h-full" style={{ color: '#888888' }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-white">Schedule meetings and manage your calendar</span>
                  </div>
                </div>
              </div>
              
              {/* NYRA Demo Interface - GSAP Animated */}
              <div className="w-full max-w-3xl mx-auto">
                <div ref={chatRef} className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  {/* Header stays static */}
                  <div className="border-b border-gray-100 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-medium text-gray-700">Nyra</span>
                        <span className="text-xs text-green-500 font-medium">● Online</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-gray-600">⚙</button>
                        <button className="text-gray-400 hover:text-gray-600">✕</button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat messages with GSAP classes */}
                  <div className="bg-gray-50 p-6 h-[450px] overflow-y-auto">
                    {/* Welcome message */}
                    <div className="chat-message text-center text-gray-500 mb-6">
                      Ciao Mark, sono NYRA il tuo assistente personale.
                    </div>
                    
                    {/* File upload */}
                    <div className="chat-message flex justify-end mb-4">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2">
                        📎 Progetti_Clienti_175708149050.xlsx
                      </div>
                    </div>
                    
                    {/* Typing indicator */}
                    <div className="chat-message flex justify-start mb-4">
                      <div className="bg-white px-4 py-2 rounded-lg inline-flex items-center gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      </div>
                    </div>
                    
                    {/* Analysis result */}
                    <div className="chat-message mb-4">
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="text-xs text-gray-500 mb-1">ANALISI RICHIESTA:</div>
                        <div className="text-sm">✓ Trovati 47 contatti con progetti in scadenza</div>
                      </div>
                    </div>
                    
                    {/* Email list */}
                    <div className="chat-message mb-4">
                      <div className="bg-white p-3 rounded-lg border border-gray-200 text-sm">
                        <div className="mb-2">Email 1: Marco Rossi - Follow-up progetto Alpha</div>
                        <div className="mb-2">Email 2: Lucia Bianchi - Proposta rinnovo contratto</div>
                        <div>Email 3: Andrea Verdi - Reminder scadenza Q4</div>
                      </div>
                    </div>
                    
                    {/* Send button */}
                    <div className="flex justify-center mb-4">
                      <button className="send-button bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Invia Tutte (47)
                      </button>
                    </div>
                    
                    {/* Success message */}
                    <div className="chat-message">
                      <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-sm">
                        ✓ 47 email personalizzate inviate con successo!
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom bar */}
                  <div className="border-t border-gray-100 px-4 py-3 bg-white flex items-center gap-2">
                    <button className="text-gray-400 hover:text-gray-600">➕</button>
                    <input 
                      className="flex-1 px-3 py-2 bg-gray-50 rounded-lg text-sm"
                      placeholder="Invia un messaggio a Nyra"
                      disabled
                    />
                    <div className="flex gap-2 text-xs">
                      <button className="px-3 py-1 hover:bg-gray-100 rounded">📧 Scrivi una mail</button>
                      <button className="px-3 py-1 hover:bg-gray-100 rounded">📅 Imposta calendario</button>
                      <button className="px-3 py-1 hover:bg-gray-100 rounded">📄 Apri un file</button>
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

export default InstantActionsNewSection;