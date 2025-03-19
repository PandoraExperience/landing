'use client';

import React, { useState, useEffect } from 'react';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About */}
          <div className="text-center md:text-left">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-[#DC0073]/20 filter blur-md rounded-full animate-breathe"></div>
              <h3 className="relative text-2xl font-bold">EL DESPERTAR DEL AVATAR</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Una experiencia transformadora de inmersión en hielo para conectar con tu fuerza interior.
            </p>
            <div className="w-20 h-1 bg-[#DC0073]/80 rounded-full mx-auto md:mx-0"></div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-5 text-[#DC0073]">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  <span className="relative z-10">Acerca de</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#experiencia" 
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  <span className="relative z-10">Experiencia</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#testimonios" 
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  <span className="relative z-10">Testimonios</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  <span className="relative z-10">FAQ</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#registro" 
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  <span className="relative z-10">Reserva</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC0073] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-5 text-[#DC0073]">Síguenos</h4>
            <div className="flex justify-center md:justify-end space-x-8 mb-6">
              <a 
                href="#" 
                className="text-white/80 hover:text-[#DC0073] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-[#DC0073] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-[#DC0073] transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <p className="text-gray-300">
              Contacto: <a href="mailto:info@eldespetardelavatar.com" className="hover:text-[#DC0073] transition-colors underline-offset-4 hover:underline">info@eldespetardelavatar.com</a>
            </p>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} El Despertar del Avatar. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-[#DC0073] transition-colors">Términos y Condiciones</a>
            <span>|</span>
            <a href="#" className="hover:text-[#DC0073] transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 