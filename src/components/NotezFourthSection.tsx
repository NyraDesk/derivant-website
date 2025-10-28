import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NotezFourthSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative bg-gray-50 pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Grid 2 Columns - Card sinistra + Video destra */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start justify-center">

          {/* Card Sinistra - AI NoteZ */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
            <div
              className="rounded-3xl p-8 h-[700px] flex flex-col justify-between shadow-xl text-gray-800 relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #5DADE2 0%, #7EC4E8 15%, #8BB3C9 35%, #6B8DA8 50%, #5A7A95 65%, #4A6A82 85%, #2C3E50 100%)'
              }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="24" stroke="#2C3E50" strokeWidth="3" fill="none"/>
                    <circle cx="28" cy="28" r="16" stroke="#5DADE2" strokeWidth="2" fill="none" opacity="0.7"/>
                    <circle cx="28" cy="28" r="8" fill="#2C3E50"/>
                  </svg>
                  <h3
                    className="text-4xl whitespace-nowrap"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif', fontWeight: 300 }}
                  >
                    NoteZ AI
                  </h3>
                </div>
                <div
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  <p className="font-semibold mb-2">Organizza ciò che conta</p>
                  <p className="mb-3">Trasforma un'idea in una nota strutturata, pronta per essere eseguita.</p>

                  <p className="font-semibold mb-2">Mette in agenda ciò che va fatto</p>
                  <p className="mb-3">Riconosce impegni e scadenze: li inserisce nel tuo calendario.</p>

                  <p className="font-semibold mb-2">Tiene le priorità in superficie</p>
                  <p className="mb-3">Evidenzia quello che non puoi permetterti di perdere.</p>

                  <p className="font-semibold mt-4 mb-4">L'azione parte da qui.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Card Destra - Video NoteZ AI */}
          <div className="w-full lg:w-[1100px] flex-shrink-0">
            <div className="bg-gray-100 rounded-3xl p-4 md:p-8 h-[400px] md:h-[700px] flex items-center justify-center shadow-xl border border-gray-200 overflow-hidden">
              <video
                className="w-full h-full object-contain rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://res.cloudinary.com/dvnjinxo4/video/upload/v1761469327/DEMO_AI_CHAT_htw8dq.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotezFourthSection;
