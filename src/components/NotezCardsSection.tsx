import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NotezCardsSection = () => {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  // Nessuna animazione - cards statiche

  return (
    <section ref={sectionRef} className="relative bg-gray-50 pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Grid 2 Columns - Card sinistra + Video destra */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">

          {/* Card Sinistra - Canvas (larghezza fissa) */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
            <div
              className="rounded-3xl p-8 h-[700px] flex flex-col justify-between shadow-xl text-black relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 25%, #fbc2eb 50%, #ffeaa7 75%, #fdcb6e 100%)'
              }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl text-gray-900 inline-block">∞</span>
                  <h3
                    className="text-5xl text-gray-900"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif', fontWeight: 300 }}
                  >
                    Canvas
                  </h3>
                </div>
                <div
                  className="text-base leading-relaxed text-gray-800"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  <p className="font-semibold mb-3">Organizza, crea e pensa visivamente</p>
                  <p className="mb-3">Trasforma i tuoi appunti in mappe chiare e azioni concrete:</p>
                  <ul className="list-none space-y-2 mb-4 pl-4">
                    <li className="relative pl-2">
                      <span className="absolute left-0 top-0">•</span>
                      <span className="ml-2">Crea nodi collegati dai tuoi appunti in automatico</span>
                    </li>
                    <li className="relative pl-2">
                      <span className="absolute left-0 top-0">•</span>
                      <span className="ml-2">Genera immagini che rendono visibili concetti e idee</span>
                    </li>
                    <li className="relative pl-2">
                      <span className="absolute left-0 top-0">•</span>
                      <span className="ml-2">Converte spunti in task pronti da seguire</span>
                    </li>
                  </ul>
                  <p className="mb-3">Modifica, collega, integra: l'AI amplifica le tue idee.</p>
                  <p className="mb-2">Dal disordine alla struttura in pochi secondi.</p>
                  <p>Ogni nota, un progetto che prende vita.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Card Destra - Video Canvas */}
          <div className="w-full lg:w-[1100px] flex-shrink-0">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 h-[700px] flex items-center justify-center shadow-xl border border-gray-200 overflow-hidden">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://res.cloudinary.com/dvnjinxo4/video/upload/v1761469329/DEMO_SOLO_CANVAS_ikihjz.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotezCardsSection;
