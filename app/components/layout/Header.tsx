'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const sections = [
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'transformacion', label: 'Transformación' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'precio', label: 'Precio' },
  // { id: 'benefits', label: 'Beneficios' },
  { id: 'reserva', label: 'Reserva' },
  { id: 'guia', label: 'Guía' },
  { id: 'faq', label: 'FAQ' }
];

const scrollToSection = (sectionId: string) => {
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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      // Update header background transparency
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Update active section based on scroll position
      const sectionIds = sections.map(section => section.id);

      // Find the section that is currently in view
      let currentSection = sectionIds[0];
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust the detection threshold to be more precise
          // Only consider a section active if it takes up a significant portion of the viewport
          if (rect.top <= 150 && rect.bottom >= 300) {
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
  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };


  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#1D1616]/95 py-1 shadow-xl backdrop-blur-md border-b border-white/5'
          : 'bg-[#1D1616]/50 py-1 backdrop-blur-sm'
          }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center -my-2">
            <a
              href="#hero"
              className="flex items-center transition-all duration-300 group"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('hero');
              }}
            >
              <div className={`relative ${scrolled ? 'h-32 w-32 -mb-6' : 'h-36 w-36 -mb-8'} transition-all duration-300`}>
                <Image
                  src="/images/logo/logochakana.png"
                  alt="La Chakana Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>

          <nav className="hidden md:flex justify-center space-x-4">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-sm uppercase tracking-wider font-medium group ${activeSection === item.id
                  ? 'text-primary'
                  : 'text-white hover:text-primary'
                  } transition-all duration-300 transform hover:scale-105`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 origin-left ${activeSection === item.id
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                    }`}
                ></span>
        <span
          className={`absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg -z-10 transition-all duration-300 ${activeSection === item.id ? 'bg-primary/10' : ''
            }`}
        ></span>
      </a>
            ))}
    </nav >

      <button
        className="md:hidden text-white hover:text-primary transition-colors outline-none focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-6 h-6 relative">
          <span
            className={`absolute h-0.5 rounded-full bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'w-6 top-3 -rotate-45' : 'w-6 top-1'
              }`}
          ></span>
          <span
            className={`absolute h-0.5 rounded-full bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0 w-0' : 'w-4 top-3 opacity-100'
              }`}
          ></span>
          <span
            className={`absolute h-0.5 rounded-full bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'w-6 top-3 rotate-45' : 'w-6 top-5'
              }`}
          ></span>
        </div>
      </button>
        </div > */}
      </header >

      {/* Mobile menu - Fullscreen overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden bg-black">
          {/* Menu header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <div className="flex items-center">
              <div className="relative h-28 w-28">
                <Image
                  src="/images/logo/logochakana.png"
                  alt="La Chakana Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <button
              className="text-white hover:text-primary transition-colors outline-none focus:outline-none"
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
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block py-4 px-4 text-2xl font-bold border-l-4 relative overflow-hidden group transition-all duration-300 ${activeSection === item.id
                    ? 'text-primary border-primary bg-primary/10'
                    : 'text-white border-transparent hover:border-primary/50 hover:bg-black/40 hover:pl-6'
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
                    className={`absolute inset-0 transform scale-x-0 origin-left bg-gradient-to-r from-primary/10 to-transparent transition-transform duration-300 ease-out ${activeSection === item.id ? 'scale-x-100' : 'group-hover:scale-x-100'
                      }`}
                  ></span>

                  {/* Pink indicator dot for active item or on hover */}
                  <span
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id
                      ? 'bg-primary opacity-100'
                      : 'bg-primary/70 opacity-0 group-hover:opacity-100'
                      }`}
                  ></span>
                </a>
              ))}
            </nav>

            {/* Promo box */}
            <div className="my-8 p-6 bg-[#1D1616] border border-primary/30 rounded-lg">
              <div className="mb-3 inline-block py-1 px-3 bg-primary/20 rounded-full text-primary text-xs font-bold tracking-wider">
                INVERSIÓN & EXCLUSIVIDAD
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Experiencia Completa</h3>
              <p className="text-gray-300 mb-4">
                No es aguantar el frío, es aprender a soltar el miedo
              </p>
              <a
                href="#reserva"
                className="block w-full py-4 px-6 bg-primary text-white text-center font-bold rounded-lg relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_15px_rgba(5,96,187,0.5)]"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('reserva');
                  setMobileMenuOpen(false);
                }}
              >
                <span className="relative z-10">RESERVA AHORA</span>
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-size-200 animate-shimmer"></span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center space-x-8 mt-8 pt-6 border-t border-white/10">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary/30 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_10px_rgba(5,96,187,0.4)]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary/30 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_10px_rgba(5,96,187,0.4)]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary/30 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_10px_rgba(5,96,187,0.4)]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div >
      )}
    </>
  );
};

export default Header; 