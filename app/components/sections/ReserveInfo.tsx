'use client';

import React from 'react';
import { CTA_SECTION_ID } from '@/app/variables';
import { scrollToSection } from '@/app/lib/utils';
import Quotes from '@/app/components/ui/Quotes';

const ReserveInfo = () => {
  return (
    <section id="reserva" className="relative pt-24 pb-16 px-4 overflow-hidden bg-dark-bg text-white">

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#DC0073]/30 text-[#DC0073] text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
                EL PRIMER PASO HACIA TU TRANSFORMACIÓN
              </span>
            </div>
          </div>

          {/* Quote */}
          <Quotes><span className="text-gray-300">
            Las grandes transformaciones comienzan con un solo paso.
          </span></Quotes>

          <h2 className="relative text-4xl md:text-5xl font-bold mt-14 mb-6 text-white">
            RESERVA TU CUPO AHORA
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Llena el formulario para separar tu lugar. Al terminar, te compartiremos los datos de pago y cómo completar tu inscripción.
          </p>
        </div>

        {/* Benefit Boxes */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-[#111111] rounded-xl p-8">
            {/* 1. Garantía de Satisfacción */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0560BB]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Garantía de Satisfacción</h3>
                <p className="text-gray-400">Confiamos tanto en esta experiencia, que si no te aporto valor en lo absoluto, te devolvemos el valor de tu inversión.</p>
              </div>
            </div>

            {/* 2. Bonos primeros valientes */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0560BB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Bonos primeros valientes</h3>
                <p className="text-gray-400">Si decides separar tu cupo con el 100%, premiamos tu valentía con sesión canalizada del oráculo donde tus guías espirituales te brindaran claridad.</p>
              </div>
            </div>

            {/* 3. Métodos de Pago Flexibles */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0560BB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Métodos de Pago Flexibles</h3>
                <p className="text-gray-400">Aceptamos múltiples formas de pago: Transferencia, Nequi, Daviplata o Tarjetas de crédito (Cargo del 4.5%).</p>
              </div>
            </div>

            {/* 4. Pago en 2 cuotas */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0560BB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Pago en 2 cuotas</h3>
                <p className="text-gray-400">Separa tu cupo ahora con el 50% y paga el restante faltando 8 días para el evento.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA button with social proof element */}
        <div className={`flex flex-col items-center transition-all duration-1000 delay-500 opacity-100 translate-y-0`}>
          {/* Enhanced CTA with improved visibility and contrast */}
          <div className="relative mt-16 group">
            {/* Animated glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full opacity-80 blur-md animate-pulse group-hover:opacity-100"></div>

            {/* Button with white background for high contrast */}
            <button
              onClick={() => scrollToSection(CTA_SECTION_ID)}
              className="relative px-8 py-5 text-lg font-bold bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] group-hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"
            >
              LLENAR EL FORMULARIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveInfo;