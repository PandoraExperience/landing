'use client';

import React, { useState, useEffect } from 'react';
import { HeroVideo } from '@/app/components/ui/hero-video';
import { eventDate } from '@/app/variables';
import FormSection from './registration/Form';
import Quotes from '../ui/Quotes';

// CountdownUnit Component
const CountdownUnit = ({ value, label, color }: { value: number, label: string, color: string }) => {
  return (
    <div className="relative group transition-transform duration-300 hover:scale-105">
      <div className={`absolute inset-0 ${color} rounded-lg blur-md opacity-20`}></div>
      <div className="relative flex flex-col items-center bg-dark-bg/70 px-4 md:px-6 py-3 md:py-4 rounded-lg border border-primary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(5,96,187,0.1)] overflow-hidden">
        <span className="text-3xl md:text-4xl font-bold text-white">{value.toString().padStart(2, '0')}</span>
        <span className="text-xs md:text-sm text-white/80">{label}</span>
        <div className={`absolute -bottom-1 left-0 w-full h-1 ${color} opacity-40`}></div>
      </div>
    </div>
  );
};

// Hero Component
export default function Hero() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Update countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    // Initial update
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero"
      className="relative bg-dark-bg text-white flex flex-col items-center justify-center px-4 pt-4 pb-20 overflow-hidden"
      style={{ marginBottom: '-1px' }}
    >
      <div className="container mx-auto flex flex-col items-center text-center z-10 max-w-6xl">
        {/* Main title with improved visual treatment */}
        <div className={`relative transition-all duration-1000 delay-100 opacity-100 translate-y-0`}>
          <h2 className="relative text-3xl md:text-6xl font-bold mb-1 text-white tracking-wide md:tracking-wider">
            <span className="inline-block animate-text-glow bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(5,96,187,0.8)] tracking-[0.05em] md:tracking-[0.15em] leading-relaxed relative">
              <span className="absolute inset-0 opacity-20 blur-sm animate-pulse-slow">PANDORA EXPERIENCE</span>
              PANDORA EXPERIENCE
            </span>
          </h2>

          {/* Quote */}
          <Quotes>
            <span className="text-gray-300">
              Haz una pausa… y deja que tu
              <span className="font-bold"> cuerpo </span>
              suelte lo que tu
              <span className="font-bold"> mente </span>
              ya no puede sostener.
            </span>
          </Quotes>
        </div>

        {/* Featured video with HeroVideo component */}
        <div className={`w-full max-w-4xl transition-all duration-1000 delay-200 opacity-100 scale-100`}>
          <HeroVideo
            animationStyle="from-center"
            videoID="0wXSw7ibELg"
            thumbnailSrc="/images/Hero/hero-img.jpeg"
            thumbnailAlt="Mujer en agua - Experiencia transformadora"
          />
        </div>


        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          Una experiencia para soltar el dolor, la ansiedad, el estrés y el agotamiento emocional.
          <br />
        </p>
        <p className='text-gray-400 text-md my-2'>
          Aquí respiras, sientes… <span className="whitespace-nowrap">y sanas desde adentro.</span>
        </p>

        {/* Event date and countdown section */}
        <div className={`my-6 transition-all duration-1000 delay-400 opacity-100 translate-y-0`}>
          {/* Event date */}
          <div className="mb-4 flex flex-col md:flex-row items-center justify-center gap-2">
            <div className="flex items-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-xl">Próximo Evento: </span>
            </div>
            <span className="text-white font-semibold text-lg">{
              eventDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })
            } - Medellín (afueras)</span>
          </div>

          {/* Countdown timer with improved styling */}
          <div className="p-5 bg-dark-bg/30 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg">
            <p className="text-sm text-white/70 mb-4">Nos vemos en:</p>
            <div className="flex justify-center gap-3 md:gap-6">
              <CountdownUnit value={countdown.days} label="Días" color="bg-primary" />
              <CountdownUnit value={countdown.hours} label="Horas" color="bg-primary" />
              <CountdownUnit value={countdown.minutes} label="Minutos" color="bg-primary" />
              <CountdownUnit value={countdown.seconds} label="Segundos" color="bg-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider with subtle gradient */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent opacity-5"></div>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,131,95,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
} 