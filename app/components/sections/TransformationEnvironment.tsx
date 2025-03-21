"use client";

import React, { useState, useEffect, useRef } from 'react';

// Simple EnvironmentFeature component
const EnvironmentFeature = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="flex items-start space-x-5 p-3 rounded-xl group transition-all duration-300 hover:bg-[#1D1616]/50">
      <div className="flex-shrink-0 p-3 bg-[#DC0073]/20 rounded-xl text-[#DC0073]">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const TransformationEnvironment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

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

  // Images for the slider/carousel
  const environmentImages = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492496913980-501348b61469?w=1600&auto=format&fit=crop"
  ];

  const scrollToRegistration = () => {
    const registration = document.getElementById('registro');
    registration?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="transformacion" className="relative py-24 px-4 bg-[#1D1616] text-white overflow-hidden">
      {/* Background Elements - Enhanced with breathing/pulsating background gradients */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(220,0,115,0.2)_0%,rgba(33,33,33,0)_70%)] animate-breathe opacity-90"></div>
      
      {/* Parallax background elements - more pronounced glow */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#DC0073]/20 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#DC0073]/15 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`, animationDelay: '2.5s' }}
      ></div>
      
      {/* Very subtle light streaks */}
      <div className="absolute w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5 -rotate-12 transform animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-white/5 rotate-6 transform animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto">
        {/* Header with fade-in animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-900/30 backdrop-blur-sm border border-white/10 text-[#DC0073] text-sm font-medium tracking-wider">
                NATURALEZA & DESPERTAR
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute -left-6 top-0 text-3xl text-[#DC0073]/70">"</div>
            <div className="absolute -right-6 bottom-0 text-3xl text-[#DC0073]/70">"</div>
            <p className="text-2xl md:text-3xl italic font-light px-8 text-gray-300">
              La naturaleza es el espejo de nuestra transformación interior.
            </p>
          </div>

          {/* Main Title with glow effect */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#DC0073]/30 filter blur-[80px] rounded-full animate-breathe"></div>
            
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
              El Entorno: Donde Sucede La Transformación
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entre quebradas cristalinas y montañas, cada elemento potencia tu proceso de transformación.
          </p>
        </div>

        {/* Two-Column Layout with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image Carousel with enhanced transitions */}
          <div className={`relative overflow-hidden rounded-xl aspect-[4/3] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {environmentImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={src}
                  alt={`Entorno natural ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1616]/80 via-[#1D1616]/30 to-transparent"></div>
              </div>
            ))}
            
            {/* Image indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {environmentImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-[#DC0073]' : 'bg-white/50'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Features List with staggered animations */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <EnvironmentFeature
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
                </svg>
              }
              title="Ubicación exclusiva en la naturaleza"
              description="Entre quebradas cristalinas, montañas y aves silvestres, cada elemento potencia el proceso de transformación."
            />

            <EnvironmentFeature
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0l-2.828 2.828m0 0a9 9 0 010-12.728m2.828 2.828a9 9 0 010 12.728" />
                </svg>
              }
              title="Ambiente libre de distracciones"
              description="Sin ruidos urbanos, solo el sonido del agua y la energía del entorno para reconectar contigo mismo."
            />

            <EnvironmentFeature
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              }
              title="Rituales ancestrales"
              description="Una combinación de ciencia, meditación y conexión con los elementos naturales para potenciar el proceso."
            />

            {/* Testimonial Quote */}
            <div className="p-5 bg-[#1D1616]/60 rounded-xl mt-8 border-l-4 border-[#DC0073]">
              <p className="italic text-gray-300">"La naturaleza es el puente entre quienes somos y quienes podemos llegar a ser. En este entorno, sucede la verdadera transformación."</p>
            </div>
          </div>
        </div>

        {/* Call to Action with enhanced animations */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Urgency message */}
          <p className="text-[#DC0073] font-medium mb-4">Cupos limitados para esta experiencia en la naturaleza</p>
          
          {/* CTA Button */}
          <button 
            onClick={scrollToRegistration}
            className="px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-[#DC0073] hover:text-white hover:bg-[#DC0073] border-2 border-[#DC0073] rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(220,0,115,0.5)] hover:shadow-[0_0_25px_rgba(220,0,115,0.8)]"
          >
            Sólo quedan pocos cupos, reserva el tuyo ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationEnvironment; 