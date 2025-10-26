import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NotezThirdSection = () => {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative bg-white pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Grid 2 Columns - Card sinistra + Video destra */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">

          {/* Card Sinistra - Sintesi Vocale */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
            <div
              className="rounded-3xl p-8 h-[700px] flex flex-col justify-between shadow-xl text-gray-800 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #e8eef2 0%, #d1dce5 25%, #bec9d4 50%, #cbd5de 75%, #e2e8ed 100%)'
              }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <svg width="56" height="56" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Microfono */}
                    <ellipse cx="60" cy="45" rx="18" ry="24" fill="#6B7C8C" stroke="#6B7C8C" strokeWidth="3"/>
                    <line x1="48" y1="47" x2="72" y2="47" stroke="#E8EEF2" strokeWidth="2.5"/>
                    <line x1="48" y1="52" x2="72" y2="52" stroke="#E8EEF2" strokeWidth="2.5"/>
                    <line x1="48" y1="57" x2="72" y2="57" stroke="#E8EEF2" strokeWidth="2.5"/>
                    <line x1="48" y1="62" x2="72" y2="62" stroke="#E8EEF2" strokeWidth="2.5"/>
                    <path d="M42 50 C42 50 42 72 60 72 C78 72 78 50 78 50" stroke="#6B7C8C" strokeWidth="4" strokeLinecap="round" fill="none"/>
                    <line x1="60" y1="72" x2="60" y2="85" stroke="#6B7C8C" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="48" y1="85" x2="72" y2="85" stroke="#6B7C8C" strokeWidth="4" strokeLinecap="round"/>

                    {/* Onde sonore sinistra */}
                    <line x1="20" y1="50" x2="20" y2="60" stroke="#6B7C8C" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="28" y1="45" x2="28" y2="65" stroke="#6B7C8C" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="36" y1="40" x2="36" y2="70" stroke="#6B7C8C" strokeWidth="3" strokeLinecap="round"/>

                    {/* Onde sonore destra */}
                    <line x1="100" y1="50" x2="100" y2="60" stroke="#6B7C8C" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="92" y1="45" x2="92" y2="65" stroke="#6B7C8C" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="84" y1="40" x2="84" y2="70" stroke="#6B7C8C" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                  <h3
                    className="text-4xl whitespace-nowrap"
                    style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif', fontWeight: 300 }}
                  >
                    Smart Voice
                  </h3>
                </div>
                <div
                  className="text-base leading-relaxed"
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif' }}
                >
                  <p className="mb-3">l'AI ascolta, interpreta e sintetizza il contenuto in note organizzate.</p>
                  <ul className="list-none space-y-2 mb-6 pl-4">
                    <li className="relative pl-2">
                      <span className="absolute left-0 top-0">•</span>
                      <span className="ml-2">Riunioni: cattura i punti chiave e crea action plan</span>
                    </li>
                    <li className="relative pl-2">
                      <span className="absolute left-0 top-0">•</span>
                      <span className="ml-2">Lezioni e corsi: genera appunti strutturati senza perdere dettagli importanti</span>
                    </li>
                    <li className="relative pl-2">
                      <span className="absolute left-0 top-0">•</span>
                      <span className="ml-2">Video e podcast: trasforma contenuti complessi in note concise</span>
                    </li>
                  </ul>

                  {/* Waveform Symbol */}
                  <div className="flex justify-center mt-auto pt-8">
                    <svg width="280" height="60" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="5" y1="25" x2="5" y2="35" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="12" y1="20" x2="12" y2="40" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="19" y1="15" x2="19" y2="45" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="26" y1="22" x2="26" y2="38" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="33" y1="18" x2="33" y2="42" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="40" y1="10" x2="40" y2="50" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="47" y1="5" x2="47" y2="55" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="54" y1="12" x2="54" y2="48" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="61" y1="8" x2="61" y2="52" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="68" y1="15" x2="68" y2="45" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="75" y1="20" x2="75" y2="40" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="82" y1="10" x2="82" y2="50" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="89" y1="3" x2="89" y2="57" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="96" y1="12" x2="96" y2="48" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="103" y1="18" x2="103" y2="42" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="110" y1="14" x2="110" y2="46" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="117" y1="22" x2="117" y2="38" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="124" y1="25" x2="124" y2="35" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="131" y1="20" x2="131" y2="40" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="138" y1="15" x2="138" y2="45" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="145" y1="10" x2="145" y2="50" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="152" y1="18" x2="152" y2="42" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="159" y1="22" x2="159" y2="38" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="166" y1="15" x2="166" y2="45" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="173" y1="20" x2="173" y2="40" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="180" y1="12" x2="180" y2="48" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="187" y1="8" x2="187" y2="52" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="194" y1="5" x2="194" y2="55" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="201" y1="10" x2="201" y2="50" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="208" y1="15" x2="208" y2="45" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="215" y1="18" x2="215" y2="42" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="222" y1="22" x2="222" y2="38" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="229" y1="20" x2="229" y2="40" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="236" y1="15" x2="236" y2="45" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="243" y1="12" x2="243" y2="48" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="250" y1="18" x2="250" y2="42" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="257" y1="22" x2="257" y2="38" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="264" y1="25" x2="264" y2="35" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="271" y1="27" x2="271" y2="33" stroke="#7B8C9C" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Card Destra - Video Smart Voice */}
          <div className="w-full lg:w-[1100px] flex-shrink-0">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 h-[700px] flex items-center justify-center shadow-xl border border-gray-200 overflow-hidden">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/src/assets/DEMO SMART VOICE .mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotezThirdSection;
