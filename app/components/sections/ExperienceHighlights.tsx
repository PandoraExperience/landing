"use client";

import React, { useState, useEffect, useRef } from 'react';

// ExperienceCard Component
const ExperienceCard = ({ 
  icon, 
  title, 
  description, 
  imageSrc,
  delay 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
}) => {
  return (
    <div 
      className="relative group transition-all duration-500 ease-out"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden flex flex-col h-full rounded-2xl bg-[#1D1616] border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1616]/90 to-transparent z-10"></div>
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Icon Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex items-center space-x-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#DC0073] text-white transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(220,0,115,0.5)]">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 leading-relaxed group-hover:translate-x-1 transition-transform duration-500">
            {description}
          </p>
        </div>

        {/* Card Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#DC0073] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

// ExperienceHighlights Component
export default function ExperienceHighlights() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      ref={sectionRef}
      id="experiencia" 
      className="relative py-24 px-4 bg-[#1D1616] text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(220,0,115,0.2)_0%,rgba(33,33,33,0)_70%)] opacity-90"></div>
      
      {/* Parallax background elements */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#DC0073]/20 filter blur-3xl"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#DC0073]/15 filter blur-3xl"
        style={{ transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`, animationDelay: '2.5s' }}
      ></div>

      {/* Light streaks */}
      <div className="absolute w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5 -rotate-12 transform animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-white/5 rotate-6 transform animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className={`mb-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-900/30 backdrop-blur-sm border border-white/10 text-[#DC0073] text-sm font-medium tracking-wider">
                EXPERIENCIA TRANSFORMADORA
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-2xl md:text-3xl font-medium italic text-white/80 mb-6 leading-relaxed">
              "Cuando te dejas de resistir, empiezas a sanar."
            </p>
          </div>

          {/* Main Title with glow effect */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#DC0073]/30 filter blur-[80px] rounded-full"></div>
            
            <h2 className="relative text-4xl md:text-5xl font-bold mb-8 text-white">
              ¿Qué vas a vivir en esta experiencia?
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 - Mental Transformation */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <ExperienceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9c0 3.2 1.9 6.5 4 8.5 1 1 2.5 2.5 5 2.5s4-1.5 5-2.5c2.1-2 4-5.3 4-8.5z"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                </svg>
              } 
              title="Transformación Mental" 
              description="Rompe patrones limitantes y reprograma tu mente para la resiliencia." 
              delay={400}
              imageSrc="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop"
            />
          </div>
          
          {/* Card 2 - Emotional Expansion */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <ExperienceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22L22 12 12 2 2 12 12 22z"></path>
                  <path d="M12 22L22 12 12 2"></path>
                  <path d="M2 12L12 22 12 2"></path>
                </svg>
              } 
              title="Expansión Emocional" 
              description="Aprenderás a convertir el miedo y la incomodidad en tus aliados." 
              delay={600}
              imageSrc="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop"
            />
          </div>
          
          {/* Card 3 - Spiritual Renewal */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <ExperienceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15c-1.95 0-3.75-1.2-4.5-3 .75-1.8 2.55-3 4.5-3s3.75 1.2 4.5 3c-.75 1.8-2.55 3-4.5 3z"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              } 
              title="Renovación Espiritual" 
              description="Descubre una conexión más profunda contigo mismo y con la vida." 
              delay={800}
              imageSrc="https://images.unsplash.com/photo-1582044177880-be563e99195b?w=800&auto=format&fit=crop"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* CTA Button with pulsing effect */}
          <div className="relative inline-block">
            {/* Pulsing background effect */}
            <div className="absolute -inset-4 bg-[#DC0073]/20 rounded-full blur-xl animate-pulse-slow opacity-70 -z-10"></div>
            
            <button 
              className="relative px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-[#DC0073] hover:text-white hover:bg-[#DC0073] border-2 border-[#DC0073] rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(220,0,115,0.5)] hover:shadow-[0_0_25px_rgba(220,0,115,0.8)]"
              onClick={() => {
                const registration = document.getElementById('registro');
                registration?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Reserva tu lugar antes que se agoten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 