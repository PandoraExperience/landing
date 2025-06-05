"use client";

import React from 'react';
import { scrollToSection, formatNumber, roundLocalNumber } from '@/app/lib/utils';
import { experience, CTA_SECTION_ID } from '@/app/variables';

const PriceCard = () => {
  return (
    <section id="precio" className="relative pb-14 px-4 overflow-hidden bg-dark-bg text-white">
      <div className="max-w-4xl mx-auto">
        {/* Price Card */}
        <div className="bg-black/50 rounded-xl border border-white/10 relative shadow-xl mt-8">
          {/* Corner badge - final version */}
          <div className="absolute -top-6 -right-6 bg-[#DC0073] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-xl z-10 uppercase tracking-wider ring-2 ring-white/10">
            Bono para primeros valientes
          </div>

          <div className="p-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Experiencia Completa</h3>

              {/* Price display */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-gray-300 text-3xl line-through">
                    {roundLocalNumber(experience.price.amountInCents / 100 / (1 - experience.price.promoApplied.percentage / 100), 3)}
                    {` ${experience.price.currency}`}
                  </span>
                  <span className="bg-[#DC0073]/20 text-[#DC0073] px-4 py-2 rounded-md text-xl font-bold">
                    Descuento {experience.price.promoApplied.percentage}%
                  </span>
                </div>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-6xl md:text-7xl font-bold">{formatNumber(experience.price.amountInCents / 100)}</span>
                  <span className="ml-2 text-2xl text-gray-300">{experience.price.currency}</span>
                </div>
                <p className="text-xl text-gray-300 mt-2">Pago único</p>
              </div>

              {/* Availability with progress bar */}
              <div className="mb-6">
                <p className="text-base text-gray-200 mb-3">Cupo exclusivo de 20 personas</p>
              </div>

              {/* Bonus */}
              <div className="text-left bg-[#DC0073]/10 rounded-lg p-4 mb-6 border border-[#DC0073]/20">
                <p className="text-[#DC0073] text-lg font-bold mb-2">Bono primeros valientes:</p>
                <p className="text-base text-gray-200">Sesión canalizada del oráculo donde tus guías espirituales te brindaran claridad y guía para los primeros 3 inscritos.</p>
              </div>


              {/* CTA Button */}
              <button onClick={() => scrollToSection(CTA_SECTION_ID)}
                className="w-full bg-[#DC0073] text-white py-4 px-6 rounded-lg text-lg font-bold hover:bg-[#DC0073]/90 transition-colors flex items-center justify-center space-x-3 shadow-lg hover:shadow-[#DC0073]/30"
              >
                <p className="text-lg">RESERVA TU LUGAR</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCard;