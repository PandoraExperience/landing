'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HeroVideoDialog } from '@/app/components/ui/hero-video-dialog';

// Event date: May 17, 2025
const eventDate = new Date('2025-05-17T00:00:00');

// CountdownUnit Component
const CountdownUnit = ({ value, label, color }: { value: number, label: string, color: string }) => {
  return (
    <div className="relative group transition-transform duration-300 hover:scale-105">
      <div className={`absolute inset-0 ${color} rounded-lg blur-md opacity-20`}></div>
      <div className="relative flex flex-col items-center bg-[#1D1616]/70 px-4 md:px-6 py-3 md:py-4 rounded-lg border border-primary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(5,96,187,0.1)] overflow-hidden">
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
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10; // Reduced movement for subtlety
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen bg-[#1D1616] text-white flex flex-col items-center justify-center px-4 pt-28 pb-20 overflow-hidden">
      {/* Enhanced breathing/pulsating background gradients */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(5,96,187,0.3)_0%,rgba(33,33,33,0)_70%)] animate-breathe opacity-90"></div>
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[radial-gradient(circle,rgba(46,139,87,0.2)_0%,rgba(0,0,0,0)_70%)] animate-breathe opacity-90" style={{ animationDelay: '3s' }}></div>
      
      {/* Parallax background elements - more pronounced glow */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/20 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/15 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`, animationDelay: '2.5s' }}
      ></div>
      <div 
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#2E8B57]/15 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * 0.15}px, ${parallaxOffset.y * 0.15}px)`, animationDelay: '4s' }}
      ></div>
      
      {/* Very subtle light streaks */}
      <div className="absolute w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5 -rotate-12 transform animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-white/5 rotate-6 transform animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto flex flex-col items-center text-center z-10 max-w-6xl">
        {/* Logo or brand identifier above title */}
        <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-center">
            <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#DC0073]/30 text-[#DC0073] text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
              MUNAY-KI EXPERIENCE
            </span>
          </div>
        </div>
        
        {/* Quote */}
        <div className={`relative max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="absolute -left-6 top-0 text-3xl text-[#DC0073]/70">"</div>
          <div className="absolute -right-6 bottom-0 text-3xl text-[#DC0073]/70">"</div>
          <p className="text-2xl md:text-3xl italic font-light px-8 text-gray-300">
          Un llamado para quienes buscan conectar con su ser más profundo, activar su energía y liberar bloqueos mentales y emocionales.
          </p>
        </div>
        
        {/* Main title with improved visual treatment */}
        <div className={`relative mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="absolute inset-0 bg-[#0560BB]/30 filter blur-[80px] rounded-full animate-breathe"></div>
          <h2 className="relative text-4xl md:text-6xl font-bold mb-4 text-white tracking-wider">
            <span className="inline-block animate-text-glow bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(5,96,187,0.8)] tracking-[0.15em] leading-relaxed relative">
              <span className="absolute inset-0 opacity-20 blur-sm animate-pulse-slow">DESPERTAR DEL AVATAR</span>
              DESPERTAR DEL AVATAR
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8">
          No es sólo una experiencia, es el inicio de un nuevo camino de consciencia.
          </p>
        </div>
        
        {/* Featured video with HeroVideoDialog component */}
        <div className={`w-full max-w-4xl mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="/images/Hero/hero-video.webp"
            thumbnailAlt="Mujer en agua - Experiencia transformadora Munay-Ki"
          />
        </div>

        {/* Event date and countdown section */}
        <div className={`mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Event date */}
          <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-2">
            <div className="flex items-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Próximo Evento:</span>
            </div>
            <span className="text-white font-semibold text-lg">17 de Mayo, 2025</span>
          </div>
          
          {/* Countdown timer with improved styling */}
          <div className="p-5 bg-[#1D1616]/30 backdrop-blur-sm rounded-xl border border-primary/10 shadow-lg">
            <p className="text-sm text-white/70 mb-4">Reserva tu lugar y sé parte de esta experiencia.</p>
            <div className="flex justify-center gap-3 md:gap-6">
              <CountdownUnit value={countdown.days} label="Días" color="bg-primary" />
              <CountdownUnit value={countdown.hours} label="Horas" color="bg-primary" />
              <CountdownUnit value={countdown.minutes} label="Minutos" color="bg-primary" />
              <CountdownUnit value={countdown.seconds} label="Segundos" color="bg-primary" />
            </div>
          </div>
        </div>

        {/* CTA button with social proof element */}
        <div className={`flex flex-col items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Enhanced CTA with improved visibility and contrast */}
          <div className="relative mb-5 group">
            {/* Animated glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full opacity-80 blur-md animate-pulse group-hover:opacity-100"></div>
            
            {/* Button with white background for high contrast */}
            <button
              onClick={() => scrollToSection('reserva')}
              className="relative px-8 py-5 text-lg font-bold bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] group-hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"
            >
              QUIERO ESTAR AHÍ
            </button>
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