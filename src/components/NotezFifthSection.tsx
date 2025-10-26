import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NotezFifthSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative bg-white pt-8 md:pt-12 pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">

        {/* Titolo */}
        <div className="text-left mb-6 -ml-2">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight"
            style={{
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.04em'
            }}
          >
            <span className="text-black">Tutto ciò che conta.</span>{' '}
            <span
              style={{
                fontWeight: 300,
                background: 'linear-gradient(90deg, #3B82F6 0%, #6366F1 25%, #8B5CF6 50%, #3B82F6 75%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 100%',
                animation: 'gradient-shift 3s ease-in-out infinite'
              }}
            >
              Sempre con te.
            </span>
          </h2>
        </div>

        {/* Grid 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

          {/* Card 1 - Calendario */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl border border-gray-200 flex-grow min-h-[550px] overflow-hidden flex flex-col">
              <div className="px-10 pt-10 pb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center text-white text-xs font-semibold">
                    <div className="text-center">
                      <div className="text-[8px]">SEP</div>
                      <div className="text-lg">12</div>
                    </div>
                  </div>
                  <h3
                    className="text-4xl text-black font-light"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                  >
                    Calendario
                  </h3>
                </div>
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  Programma al meglio le tue giornate tenendo tutti i calendari in un unico posto. Con gli inviti e i calendari condivisi puoi anche coordinarti con altre persone.
                </p>
              </div>
              {/* Immagine Calendario */}
              <div className="mt-auto bg-white border-t border-gray-300">
                <img
                  src="/src/assets/calendario.jpg"
                  alt="Calendario"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - Promemoria */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl border border-gray-200 flex-grow min-h-[550px] overflow-hidden flex flex-col">
              <div className="px-10 pt-10 pb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-gray-300">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="w-6 h-2 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <div className="w-6 h-2 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-6 h-2 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <h3
                    className="text-4xl text-black font-light"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                  >
                    Promemoria
                  </h3>
                </div>
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  Ricordati tutto, dalla lista della spesa agli appuntamenti di lavoro. Puoi chiedere a Siri di creare promemoria per te, e hai tante funzioni per personalizzare elenchi e avvisi.
                </p>
              </div>
              {/* Immagine Todo */}
              <div className="mt-auto bg-white border-t border-gray-300">
                <img
                  src="/src/assets/todo.png"
                  alt="Promemoria"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 3 - Note */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl border border-gray-200 flex-grow min-h-[550px] overflow-hidden flex flex-col">
              <div className="px-10 pt-10 pb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-sm flex flex-col gap-0.5 p-1">
                      <div className="w-full h-1 bg-orange-400 rounded"></div>
                      <div className="w-full h-0.5 bg-gray-300 rounded"></div>
                      <div className="w-full h-0.5 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <h3
                    className="text-4xl text-black font-light"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                  >
                    Note
                  </h3>
                </div>
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  Butta giù un'idea al volo o una lunga riflessione, quando e dove vuoi. Puoi aggiungere checklist, immagini, disegni, registrazioni audio e perfino scansioni di documenti.
                </p>
              </div>
              {/* Immagine Note */}
              <div className="mt-auto bg-white border-t border-gray-300">
                <img
                  src="/src/assets/note.jpg"
                  alt="Note"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotezFifthSection;
