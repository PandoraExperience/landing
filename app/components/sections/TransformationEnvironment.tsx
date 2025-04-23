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
      <div className="flex-shrink-0 p-3 bg-primary/20 rounded-xl text-primary">
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/venue/5.jpg',
    '/images/venue/3.jpg',
    '/images/venue/6.jpg',
    '/images/venue/venue1.jpg',
    '/images/venue/venue2.jpg',
    '/images/venue/venue3.jpg',
    '/images/venue/venue4.jpg',
    '/images/venue/venue5.jpg',
    '/images/venue/venue6.jpg',
    '/images/venue/venue8.jpg',
    '/images/venue/venue9.jpg'
  ];

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

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

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

  // Image navigation functions
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section ref={sectionRef} id="transformacion" className="relative py-24 px-4 bg-[#1D1616] text-white overflow-hidden">
      {/* Background Elements - Enhanced with breathing/pulsating background gradients */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(5,96,187,0.2)_0%,rgba(33,33,33,0)_70%)] animate-breathe opacity-90"></div>
      
      {/* Parallax background elements - more pronounced glow */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/20 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/15 filter blur-3xl animate-breathe"
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
              <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#DC0073]/30 text-[#DC0073] text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
                NATURALEZA & DESPERTAR
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto mb-8">
          </div>

          {/* Main Title with glow effect */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#0560BB]/30 filter blur-[80px] rounded-full animate-breathe"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold text-white text-center">
              Transformación Profunda
            </h2>
          </div>
        </div>

        {/* Two-Column Layout with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image Gallery/Slider */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-8 group">
            <div className="absolute inset-0 w-full h-full">
              <div 
                className="flex h-full transition-transform duration-700 ease-in-out" 
                style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentImageIndex * (100 / images.length)}%)` }}
              >
                {images.map((src, index) => (
                  <div key={index} className="relative h-full" style={{ width: `${100 / images.length}%` }}>
                    <img 
                      src={src} 
                      alt={`Venue environment ${index + 1}`} 
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation controls - Make them more visible with z-index */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button 
                onClick={handlePrevImage}
                className="w-12 h-12 flex items-center justify-center bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors focus:outline-none"
                aria-label="Previous image"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={handleNextImage}
                className="w-12 h-12 flex items-center justify-center bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors focus:outline-none"
                aria-label="Next image"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Navigation dots - Improved visibility and interaction */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 py-2 px-4 bg-black/40 rounded-full z-10">
              {images.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  type="button"
                />
              ))}
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1616] via-transparent to-transparent"></div>
            
            {/* Image counter */}
            <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm text-white z-10">
              {currentImageIndex + 1} / {images.length}
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
              description="Solo una hora de Medellín, este territorio ancestral y de sanación, via Yolombó de facil acceso en transporte público y vehículo propio."
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
              description="Una combinación de ciencia, meditación y conexión con los elementos naturales para acompañar el proceso."
            />

            {/* Testimonial Quote */}
            <div className="p-5 bg-[#1D1616]/60 rounded-xl mt-8 border-l-4 border-primary">
              <p className="italic text-gray-300">"La naturaleza no sana con fuerza, sino con presencia"</p>
            </div>
          </div>
        </div>

        {/* Call to Action with enhanced animations */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Urgency message */}
          <p className="text-primary font-medium mb-4">Cupos limitados para esta experiencia en la naturaleza</p>
          
          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('reserva')}
            className="px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"
          >
            QUIERO PARTICIPAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationEnvironment; 