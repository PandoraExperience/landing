'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <footer className="relative bg-[#1D1616] text-white py-16 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(220,0,115,0.15)_0%,rgba(33,33,33,0)_70%)] animate-breathe"></div>
      
      {/* Parallax background elements */}
      <div 
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#DC0073]/10 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#DC0073]/10 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`, animationDelay: '2.5s' }}
      ></div>
      
      {/* Very subtle light streaks */}
      <div className="absolute w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5 -rotate-12 transform animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-white/5 rotate-6 transform animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* About */}
          <div className="text-center md:text-left">
            <div className="flex items-center mb-6 justify-center md:justify-start">
              <div className="relative h-24 w-24">
               
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Una experiencia transformadora de inmersión en hielo para conectar con tu fuerza interior.
            </p>
            <div className="w-20 h-1 bg-[#DC0073]/80 rounded-full mx-auto md:mx-0"></div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-5 text-[#DC0073]">Enlaces Rápidos</h4>
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors relative group">
                  <span className="relative z-10">Inicio</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#experiencia" className="text-gray-300 hover:text-white transition-colors relative group">
                  <span className="relative z-10">Experiencia</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#transformacion" className="text-gray-300 hover:text-white transition-colors relative group">
                  <span className="relative z-10">Transformación</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#precio" className="text-gray-300 hover:text-white transition-colors relative group">
                  <span className="relative z-10">Precio</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-300 hover:text-white transition-colors relative group">
                  <span className="relative z-10">Testimonios</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#reserva" className="text-gray-300 hover:text-white transition-colors relative group">
                  <span className="relative z-10">Reserva</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#guia" className="text-gray-300 hover:text-white transition-colors relative group">
                  <span className="relative z-10">Tu Guía</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors relative group">
                  <span className="relative z-10">FAQ</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} El pandora experience. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 