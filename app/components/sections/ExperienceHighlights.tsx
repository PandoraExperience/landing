"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CTA_SECTION_ID } from '@/app/variables';
import Quotes from '../ui/Quotes';

// ExperienceCard Component
const ExperienceCard = ({
  description,
  imageSrc,
  delay
}: {
  description: string;
  imageSrc: string;
  delay: number;
}) => {
  return (
    <div
      className="relative group transition-all duration-500 ease-out"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden flex flex-col h-full rounded-2xl bg-dark-bg border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <img
            src={imageSrc}
            alt="Experience image"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-grow">
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
    <section ref={sectionRef} id="experiencia" className="relative py-16 px-4 bg-dark-bg text-white overflow-hidden">
      {/* Parallax background elements */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#0560bb]/20 filter blur-3xl"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#0560bb]/15 filter blur-3xl"
        style={{ transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`, animationDelay: '2.5s' }}
      ></div>


      {/* Content Container */}
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className={`mb-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#DC0073]/30 text-[#DC0073] text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
                EXPERIENCIA TRANSFORMADORA
              </span>
            </div>
          </div>

          {/* Quote */}
          <Quotes><span className="text-gray-300">
            Cuando te dejas de resistir, empiezas a sanar.
          </span></Quotes>

          {/* Main Title with glow effect */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#0560BB]/30 filter blur-[80px] rounded-full animate-breathe"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
              ¿Qué vas a vivir en esta experiencia?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Acá te contamos lo que vas a vivir.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 - Mental Transformation */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <ExperienceCard
              description="Técnicas milenarias de respiración para habitar el cuerpo."
              delay={400}
              imageSrc="/images/experience/ex_breathe.jpg"
            />
          </div>

          {/* Card 2 - Emotional Expansion */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <ExperienceCard
              description="Meditación para conectar con tu ser interior y recordar quien eres."
              delay={600}
              imageSrc="/images/experience/ex_meditation.jpg"
            />
          </div>

          {/* Card 3 - Spiritual Renewal */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <ExperienceCard
              description="Reprogramación mental para aprender a observarte y dejar de reaccionar"
              delay={800}
              imageSrc="/images/experience/ex_mental.jpg"
            />
          </div>

          {/* Card 4 - Ice Immersion */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <ExperienceCard
              description="Inmersión en Hielo para hackear tu biología y rendirte a la vida."
              delay={1000}
              imageSrc="/images/experience/ex_ice.jpg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* CTA Button with pulsing effect */}
          <div className="relative inline-block">
            {/* Pulsing background effect */}
            <div className="absolute -inset-4 bg-[#0560bb]/20 rounded-full blur-xl animate-pulse-slow opacity-70 -z-10"></div>

            <button
              onClick={() => scrollToSection(CTA_SECTION_ID)}
              className="relative px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-[#0560bb] hover:text-white hover:bg-[#0560bb] border-2 border-[#0560bb] rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"
            >
              Reserva tu lugar antes que se agoten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 