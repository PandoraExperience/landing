"use client";

import React, { useEffect, useRef, useState } from 'react';

// Testimonial card component
const TestimonialCard = ({ 
  name, 
  role, 
  quote 
}: { 
  name: string, 
  role: string, 
  quote: string 
}) => {
  return (
    <div className="relative p-6 bg-[#1D1616]/80 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group border border-white/5">
      <div className="p-5">
        <div className="mb-4">
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
        <div className="relative">
          <svg className="absolute -top-3 -left-3 w-6 h-6 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-300 text-sm italic relative z-10">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  
  // Sample testimonial data (to be replaced with real content)
  const testimonials = [
    {
      name: "Ana María Gutiérrez",
      role: "Emprendedora, 34 años",
      quote: "Esta experiencia cambió completamente mi perspectiva. El entorno, la guía y la transformación que viví superaron por mucho el valor de la inversión. Incomparable."
    },
    {
      name: "Carlos Rodríguez",
      role: "Profesional de TI, 29 años",
      quote: "Llegué escéptico y me fui transformado. El viaje interior que experimenté en tan solo un día ha tenido un impacto que sigo sintiendo meses después."
    },
    {
      name: "Lucía Martínez",
      role: "Terapeuta, 42 años",
      quote: "Como profesional en el campo, puedo decir que esta metodología es excepcional. La combinación de naturaleza y rituales crea un espacio de transformación único."
    },
    {
      name: "Javier Mendoza",
      role: "Empresario, 38 años",
      quote: "Increíble cómo en un día pude desconectarme del ruido y encontrar claridad. Mi equipo notó el cambio en mi liderazgo apenas regresé."
    },
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
    <section 
      ref={sectionRef}
      id="testimonios" 
      className="relative py-24 px-4 overflow-hidden bg-[#1D1616] text-white"
    >
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

      {/* Content Container */}
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#DC0073]/30 text-[#DC0073] text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
                HISTORIAS DE TRANSFORMACIÓN
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute -left-6 top-0 text-3xl text-[#DC0073]/70">"</div>
            <div className="absolute -right-6 bottom-0 text-3xl text-[#DC0073]/70">"</div>
            <p className="text-2xl md:text-3xl italic font-light px-8 text-gray-300">
              Lo que hoy te incomoda, mañana te libera.
            </p>
          </div>

          {/* Main Title with glow effect */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#0560BB]/30 filter blur-[80px] rounded-full animate-breathe"></div>
            
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
              Testimonios Reales
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre cómo esta experiencia ha transformado la vida de otros.
            </p>
          </div>
        </div>

        {/* Written Testimonials */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          ))}
        </div>

        {/* Final Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Tú también puedes vivir esta experiencia transformadora
          </h3>
          
          {/* CTA Button with pulsing effect */}
          <div className="relative inline-block">
            {/* Pulsing background effect */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse-slow opacity-70 -z-10"></div>
            
            <button
              onClick={() => scrollToSection('reserva')}
              className="relative px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"
            >
              Vívelo tú también, reserva ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 