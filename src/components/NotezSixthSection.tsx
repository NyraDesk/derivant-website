import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NotezSixthSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative bg-gray-50 pt-16 md:pt-24 pb-20 md:pb-32">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12">

        {/* Grid Layout - Testo a sinistra + Cards a destra */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Colonna Sinistra - Testo + Card piccola */}
          <div className="lg:col-span-4 flex flex-col gap-8">

            {/* Testo Descrittivo */}
            <div className="text-left">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6"
                style={{
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '-0.04em'
                }}
              >
                <span className="text-black">Tutto ciò che conta.</span>{' '}
                <span className="text-gray-700" style={{ fontWeight: 300 }}>
                  Sempre con te.
                </span>
              </h2>
              <p
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                style={{
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: 300
                }}
              >
                Calendario, Note e TODO in un'unica app intelligente. Semplice. Veloce. Offline.
              </p>
            </div>

            {/* Card Piccola in basso a sinistra - Video Calendario */}
            <div className="bg-[#E8DCC8] rounded-3xl h-[400px] flex flex-col shadow-xl mt-auto overflow-hidden p-8">
              <div className="mb-4">
                <h3
                  className="text-2xl font-medium text-black mb-2"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  Calendario
                </h3>
                <p
                  className="text-lg text-gray-700"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  Tutto in vista. Sempre sincronizzato.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <video
                  className="w-3/4 h-auto object-contain rounded-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/calendario demo uff.mov" type="video/mp4" />
                  <source src="/calendario demo uff.mov" type="video/quicktime" />
                  Il tuo browser non supporta il tag video.
                </video>
              </div>
            </div>

          </div>

          {/* Colonna Centrale - Card Media */}
          <div className="lg:col-span-4 flex flex-col gap-8">

            {/* Card Media in alto - Video Todo */}
            <div className="bg-[#E8DCC8] rounded-3xl h-[450px] flex flex-col shadow-xl overflow-hidden p-8">
              <div className="mb-4">
                <h3
                  className="text-2xl font-medium text-black mb-2"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  TODO Lists
                </h3>
                <p
                  className="text-lg text-gray-700"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  Organizza. Prioritizza. Completa.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <video
                  className="w-3/5 h-auto object-contain rounded-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/todo ok.mov" type="video/mp4" />
                  <source src="/todo ok.mov" type="video/quicktime" />
                  Il tuo browser non supporta il tag video.
                </video>
              </div>
            </div>

            {/* Testo sotto card TODO */}
            <div className="text-left">
              <p
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                style={{
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
                  fontWeight: 300
                }}
              >
                Un workspace unificato dove tutto comunica nativamente ogni azione diventa parte del tuo percorso: niente più frammentazioni, ma un sistema che ti mantiene sempre un passo avanti.
              </p>
            </div>

          </div>

          {/* Colonna Destra - Card Grande con Video Note */}
          <div className="lg:col-span-4">
            <div className="bg-[#E8DCC8] rounded-3xl h-[750px] flex flex-col shadow-xl overflow-hidden p-8">
              <div className="mb-4">
                <h3
                  className="text-2xl font-medium text-black mb-2"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  Note con Superpotenze
                </h3>
                <p
                  className="text-lg text-gray-700"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  Editor markdown avanzato con AI
                </p>
              </div>
              <video
                className="w-full rounded-2xl"
                style={{ height: '550px', objectFit: 'fill' }}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/note demo ufficiale.mov" type="video/mp4" />
                <source src="/note demo ufficiale.mov" type="video/quicktime" />
                Il tuo browser non supporta il tag video.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotezSixthSection;
