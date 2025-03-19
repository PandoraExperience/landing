'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      // Update header background transparency
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = [
        'hero',
        'experiencia',
        'transformacion',
        'precio',
        'testimonios',
        'registro'
      ];

      // Find the section that is currently in view
      let currentSection = sections[0];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust scroll position to account for fixed header (increased offset for larger header)
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
            ? 'bg-[#1D1616]/95 py-3 shadow-xl backdrop-blur-md border-b border-white/5' 
            : 'bg-[#1D1616]/50 py-4 backdrop-blur-sm'
        }`}
      >
      <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center -my-2">
            <a 
              href="#hero" 
              className="flex items-center transition-all duration-300 group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              <div className={`relative ${scrolled ? 'h-24 w-24 -mt-1' : 'h-28 w-28 -mt-2'} transition-all duration-300`}>
                <Image 
                  src="/images/logo/munay-ki.svg"
                  alt="MUNAY-KI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="ml-4 flex flex-col">
                <span className="text-white font-bold text-2xl hover:text-[#DC0073] transition-all duration-300 text-center">MUNAY-KI</span>
                <span className="text-white/80 text-sm italic group-hover:text-[#DC0073]/80 transition-all duration-300 text-center">El poder de amor</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center space-x-8">
            {[
              { id: 'experiencia', label: 'Experiencia' },
              { id: 'transformacion', label: 'Transformación' },
              { id: 'precio', label: 'Precio' },
              { id: 'testimonios', label: 'Testimonios' },
              { id: 'registro', label: 'Reserva', highlight: true }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-sm uppercase tracking-wider font-medium group ${
                  activeSection === item.id
                    ? 'text-[#DC0073]'
                    : 'text-white hover:text-[#DC0073]'
                } transition-colors duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                    activeSection === item.id
                      ? 'w-full bg-[#DC0073]'
                      : 'w-0 bg-[#DC0073] group-hover:w-full'
                  } transition-all duration-300`}
                ></span>
              </a>
            ))}
        </nav>
        
          {/* Mobile menu button */}
        <button 
            className="md:hidden text-white hover:text-[#DC0073] transition-colors outline-none focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-6 relative">
              <span 
                className={`absolute h-0.5 rounded-full bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'w-6 top-3 -rotate-45' : 'w-6 top-1'
                }`}
              ></span>
              <span 
                className={`absolute h-0.5 rounded-full bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0 w-0' : 'w-4 top-3 opacity-100'
                }`}
              ></span>
              <span 
                className={`absolute h-0.5 rounded-full bg-current transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'w-6 top-3 rotate-45' : 'w-6 top-5'
                }`}
              ></span>
            </div>
        </button>
      </div>
      </header>

      {/* Mobile menu - Fullscreen overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden bg-black">
          {/* Menu header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <div className="flex items-center">
              <div className="relative h-20 w-20 mr-4">
                <Image 
                  src="/images/logo/munay-ki.svg"
                  alt="MUNAY-KI Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-white font-bold text-2xl text-center">MUNAY-KI</div>
                <div className="text-white/80 text-sm italic text-center">El poder de amor</div>
              </div>
            </div>
            <button 
              className="text-white hover:text-[#DC0073] transition-colors outline-none focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu content */}
          <div className="overflow-y-auto p-6 pt-8">
            {/* Main navigation */}
            <nav className="flex flex-col space-y-4 mb-12">
              {[
                { id: 'experiencia', label: 'Experiencia' },
                { id: 'transformacion', label: 'Transformación' },
                { id: 'precio', label: 'Precio' },
                { id: 'testimonios', label: 'Testimonios' },
                { id: 'registro', label: 'Reserva' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block py-4 px-4 text-2xl font-bold border-l-4 relative overflow-hidden group transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#DC0073] border-[#DC0073] bg-[#DC0073]/10'
                      : 'text-white border-transparent hover:border-[#DC0073]/50 hover:bg-black/40 hover:pl-6'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Animated hover background effect */}
                  <span 
                    className={`absolute inset-0 transform scale-x-0 origin-left bg-gradient-to-r from-[#DC0073]/10 to-transparent transition-transform duration-300 ease-out ${
                      activeSection === item.id ? 'scale-x-100' : 'group-hover:scale-x-100'
                    }`}
                  ></span>
                  
                  {/* Pink indicator dot for active item or on hover */}
                  <span 
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-[#DC0073] opacity-100' 
                        : 'bg-[#DC0073]/70 opacity-0 group-hover:opacity-100'
                    }`}
                  ></span>
                </a>
              ))}
            </nav>
            
            {/* Promo box */}
            <div className="my-8 p-6 bg-[#1D1616] border border-[#DC0073]/30 rounded-lg">
              <div className="mb-3 inline-block py-1 px-3 bg-[#DC0073]/20 rounded-full text-[#DC0073] text-xs font-bold tracking-wider">
                INVERSIÓN & EXCLUSIVIDAD
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Experiencia Completa</h3>
              <p className="text-gray-300 mb-4">
                No es aguantar el frío, es aprender a soltar el miedo
              </p>
              <a 
                href="#registro" 
                className="block w-full py-4 px-6 bg-[#DC0073] text-white text-center font-bold rounded-lg relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,0,115,0.5)]"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('registro');
                  setMobileMenuOpen(false);
                }}
              >
                <span className="relative z-10">RESERVA AHORA</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#DC0073]/80 via-[#DC0073] to-[#DC0073]/80 bg-size-200 animate-shimmer"></span>
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center space-x-8 mt-8 pt-6 border-t border-white/10">
              <a 
                href="#" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#DC0073]/30 hover:text-[#DC0073] transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_10px_rgba(220,0,115,0.4)]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            </a>
            <a 
                href="#" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#DC0073]/30 hover:text-[#DC0073] transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_10px_rgba(220,0,115,0.4)]"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
            </a>
            <a 
                href="#" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#DC0073]/30 hover:text-[#DC0073] transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_10px_rgba(220,0,115,0.4)]"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 