'use client';

import React, { useState, useEffect } from 'react';
import { CTA_SECTION_ID } from '@/app/variables';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Footer = () => {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  // Handle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="relative bg-dark-bg text-white p-4 overflow-hidden">
      {/* Parallax background elements */}
      <div
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#DC0073]/10 filter blur-3xl animate-breathe z-0"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>

      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        {/* CTA Button */}
        <button
          onClick={() => scrollToSection(CTA_SECTION_ID)}
          className="px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"
        >
          QUIERO PARTICIPAR
        </button>
      </div>

      <div className="container mx-auto relative">
        <div className="text-center py-12">
          <div className="flex items-center mb-6 justify-center md:justify-start">
            <div className="relative h-24 w-24">

            </div>
          </div>
          <p className="text-gray-300 mb-6">
            Una experiencia transformadora de inmersión en hielo para conectar con tu fuerza interior.
          </p>
          <div className="w-20 h-1 bg-[#DC0073]/80 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Este sitio NO es parte de Facebook o Facebook Inc. Además, este sitio no ha sido endorsado por Facebook. FACEBOOK es una marca registrada de META, Inc.
          </p>
          <br />
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Pandora Experience. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 