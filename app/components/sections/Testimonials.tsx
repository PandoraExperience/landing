"use client";

import React, { useEffect, useRef, useState } from 'react';

// Testimonial card component
const TestimonialCard = ({ 
  image, 
  name, 
  role, 
  quote 
}: { 
  image: string, 
  name: string, 
  role: string, 
  quote: string 
}) => {
  return (
    <div className="relative p-6 bg-[#1D1616]/80 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group border border-white/5">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1616] via-[#1D1616]/40 to-transparent opacity-70"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>
      <div className="p-5">
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

// Video play button component
const PlayButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button 
      onClick={onClick}
      className="absolute inset-0 flex items-center justify-center group"
      aria-label="Reproducir video de testimonios"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="relative w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 bg-black/60 py-2 px-4 text-center text-white font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Ver testimonios (60 seg)
      </div>
    </button>
  );
};

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  
  // Sample testimonial data (to be replaced with real content)
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
      name: "Ana María Gutiérrez",
      role: "Emprendedora, 34 años",
      quote: "Esta experiencia cambió completamente mi perspectiva. El entorno, la guía y la transformación que viví superaron por mucho el valor de la inversión. Incomparable."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      name: "Carlos Rodríguez",
      role: "Profesional de TI, 29 años",
      quote: "Llegué escéptico y me fui transformado. El viaje interior que experimenté en tan solo un día ha tenido un impacto que sigo sintiendo meses después."
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
      name: "Lucía Martínez",
      role: "Terapeuta, 42 años",
      quote: "Como profesional en el campo, puedo decir que esta metodología es excepcional. La combinación de naturaleza y rituales crea un espacio de transformación único."
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
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

  const handlePlayVideo = () => {
    setVideoPlaying(true);
    // In a real implementation, you would trigger the actual video playback here
    // For now, we'll just display a placeholder
  };

  const handleCloseVideo = () => {
    setVideoPlaying(false);
  };

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
        <div className="mb-16 text-center">
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-900/30 backdrop-blur-sm border border-white/10 text-primary text-sm font-medium tracking-wider">
                HISTORIAS DE TRANSFORMACIÓN
              </span>
            </div>
          </div>

          {/* Main Title with glow effect */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-primary/30 filter blur-[80px] rounded-full animate-breathe"></div>
            
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
              Testimonios Reales
            </h2>
          </div>

          {/* Main Quote */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="absolute -left-6 top-0 text-3xl text-primary/70">"</div>
            <div className="absolute -right-6 bottom-0 text-3xl text-primary/70">"</div>
            <p className={`text-2xl md:text-3xl italic font-light px-8 text-gray-300 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Lo que hoy te incomoda, mañana te libera.
            </p>
          </div>
        </div>

        {/* Video Testimonial */}
        <div 
          ref={videoRef}
          className={`relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden mb-20 transition-all duration-1000 delay-400 shadow-[0_0_25px_rgba(5,96,187,0.2)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
          {!videoPlaying ? (
            <>
              <div className="aspect-video w-full">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&auto=format&fit=crop" 
                  alt="Participantes compartiendo experiencias" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1D1616]/30"></div>
              </div>
              <PlayButton onClick={handlePlayVideo} />
            </>
          ) : (
            <div className="aspect-video w-full bg-black flex flex-col items-center justify-center p-4">
              <p className="text-white text-center mb-4">
                Video de testimonios (60 segundos con fragmentos de reacciones después de la inmersión)
              </p>
              <button 
                onClick={handleCloseVideo}
                className="px-4 py-2 bg-[#1D1616]/80 border border-primary/30 text-white rounded-lg hover:bg-primary/20 transition-colors"
              >
                Cerrar video
              </button>
            </div>
          )}
        </div>

        {/* Written Testimonials */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          ))}
        </div>

        {/* Testimonial Stats */}
        <div className={`flex flex-wrap justify-center gap-12 mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-300">Reporta cambios significativos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">+500</div>
            <p className="text-gray-300">Personas transformadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">9.7/10</div>
            <p className="text-gray-300">Nivel de satisfacción</p>
          </div>
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