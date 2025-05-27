"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { HeroVideoDialog } from '@/app/components/ui/hero-video-dialog';

// Testimonial video data structure
const testimonialVideos = [
  {
    id: 1,
    videoSrc: "https://www.youtube.com/embed/dQBCkuUtw4k",
    thumbnailSrc: "/images/testi/testi.JPG",
    thumbnailAlt: "Testimonio de transformación 1 - Munay-Ki"
  },
  {
    id: 2,
    videoSrc: "https://www.youtube.com/embed/cBY4QI2ahnE",
    thumbnailSrc: "/images/testi/influ.JPG",
    thumbnailAlt: "Testimonio de transformación 2 - Munay-Ki"
  },
  {
    id: 3,
    videoSrc: "https://www.youtube.com/embed/5ZnHDCggpXA",
    thumbnailSrc: "/images/testi/vid1.JPG",
    thumbnailAlt: "Testimonio de transformación 3 - Munay-Ki"
  },
  {
    id: 4,
    videoSrc: "https://www.youtube.com/embed/9BU2mVWnIvk",
    thumbnailSrc: "/images/testi/vid2.JPG",
    thumbnailAlt: "Testimonio de transformación 4 - Munay-Ki"
  }
];

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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Sample testimonial data (to be replaced with real content)
  const testimonials = [];

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

  // Carousel navigation functions
  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? testimonialVideos.length - 1 : prevIndex - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      (prevIndex + 1) % testimonialVideos.length
    );
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

          {/* Video Testimonials Carousel */}
          <div className={`w-full max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              {/* Current Video */}
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc={testimonialVideos[currentVideoIndex].videoSrc}
                thumbnailSrc={testimonialVideos[currentVideoIndex].thumbnailSrc}
                thumbnailAlt={testimonialVideos[currentVideoIndex].thumbnailAlt}
              />
              
              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                <button 
                  onClick={handlePrevVideo}
                  className="w-14 h-14 flex items-center justify-center bg-black/60 rounded-full text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 focus:outline-none shadow-lg backdrop-blur-sm border border-white/10 pointer-events-auto"
                  aria-label="Video testimonial anterior"
                  type="button"
                >
                  <ArrowLeft className="w-7 h-7" />
                </button>
                <button 
                  onClick={handleNextVideo}
                  className="w-14 h-14 flex items-center justify-center bg-black/60 rounded-full text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 focus:outline-none shadow-lg backdrop-blur-sm border border-white/10 pointer-events-auto"
                  aria-label="Siguiente video testimonial"
                  type="button"
                >
                  <ArrowRight className="w-7 h-7" />
                </button>
              </div>
              
              {/* Video counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10">
                {currentVideoIndex + 1} / {testimonialVideos.length}
              </div>
            </div>
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