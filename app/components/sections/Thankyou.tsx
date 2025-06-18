'use client';

import React from 'react';
import { HeroVideo } from '@/app/components/ui/hero-video';
import WAButton from '../ui/WA-button';
import WompiButton from '../ui/Wompi-button';
import { experience } from '@/app/variables';

// Hero Component
export default function Thankyou() {
  const paymentReference = `${experience.reference}-${crypto.randomUUID()}`;

  return (
    <section id="thankyou" className="bg-dark-bg text-white flex flex-col items-center justify-center px-4 py-6 overflow-hidden">

      <div className="container mx-auto flex flex-col items-center text-center z-10 max-w-6xl">

        {/* Main title */}
        <div className={`relative mb-4 transition-all duration-1000 delay-100 opacity-100 translate-y-0`}>
          <div className="absolute inset-0 bg-[#0560BB]/30 filter blur-[80px] rounded-full animate-breathe"></div>
          <h1 className="relative text-3xl md:text-6xl font-bold my-8 text-white tracking-wide">
            <span className="inline-block animate-text-glow bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              GRACIAS por ese SÍ que te has dado
            </span>
          </h1>
          <p className="text-xl font-bold text-gray-300 max-w-3xl mx-auto my-8">
            Celebramos tu valentía al dar este primer paso
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto my-8">
            Estás a punto de descubrir que tu cuerpo es más sabio de lo que crees, que tu mente es mas poderosa de lo que imaginas y que puede encontrar calma incluso en el caos.
          </p>
        </div>

        {/* Featured video with HeroVideo component */}
        {/* <div className={`w-full max-w-4xl mb-8 transition-all duration-1000 delay-200 opacity-100 scale-100`}>
          <HeroVideo
            animationStyle="from-center"
            videoID="al54yJ5J59s"
            thumbnailSrc="/images/thankyou/finalgracias.png"
            thumbnailAlt="Mujer en agua - Experiencia transformadora"
          />
        </div> */}
        <img
          src="/images/thankyou/finalgracias.png"
          alt="Experiencia transformadora PANDORA"
          className="w-full max-w-[800px] pb-8 rounded-lg "
        />

        <div className="flex flex-col items-center justify-center gap-6">
          {/* CTA Buttons */}

          <WompiButton reference={paymentReference} className={
            "w-full py-3 px-4 bg-[#DC0073]/80 hover:bg-[#DC0073]/65 rounded-lg "
          }>
            Pagar con Wompi (TDC / PSE)
          </WompiButton>
          <WAButton symbol={true} className="w-full py-3 px-4" >
            Continuar con un asesor
          </WAButton>
        </div>

      </div>

    </section >
  );
} 