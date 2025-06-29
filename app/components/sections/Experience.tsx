"use client";

import React, { useState, useEffect, useRef } from 'react';
import { CTA_SECTION_ID } from '@/app/variables';
import { scrollToSection } from '@/app/lib/utils';
import Quotes from '@/app/components/ui/Quotes';
import Button from '@/app/components/ui/Button';

// ExperienceCard Component
const ExperienceCard = ({ description, imageSrc }: {
  description: React.ReactNode; imageSrc: string;
}) => {
  return (
    <div className="relative group">
      <div className="relative flex flex-col h-full rounded-2xl bg-transparent border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-full aspect-[16/9]">
          <img
            src={imageSrc}
            alt="Experience image"
            className="aspect-[1] mx-auto object-cover h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 rounded-full"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-grow">
          <p className="text-gray-300 text-center text-lg leading-relaxed group-hover:translate-x-1 transition-transform duration-500">
            {description}
          </p>
        </div>

        {/* Card Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

// ExperienceHighlights Component
const ExperienceHighlights = () => {
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
    <section ref={sectionRef} id="experiencia"
      className="relative py-8 px-4 bg-dark-bg text-white overflow-hidden">

      {/* Parallax background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#0560bb]/20 filter blur-3xl"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#0560bb]/15 filter blur-3xl"
        style={{ transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`, animationDelay: '2.5s' }}
      ></div>



      {/* Section Header */}
      <div className={`mb-20 text-center`}>
        <h2 className="mb-8 inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-accent-red/30 text-accent-red text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
          LA EXPERIENCIA
        </h2>
        <Quotes><span className="text-gray-300">
          Desconéctate del mundo para volver a conectar contigo
        </span></Quotes>
        <h3 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
          ¿De qué se trata Pandora Experience? </h3>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Es un retiro, una experiencia terapéutica, durante todo un día, en el que se trabajan los siguientes aspectos:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-2">
        {/* Card 1 - Mental Transformation */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <ExperienceCard imageSrc="/images/experience/ex_energy.jpeg"
            description={<> 1. Sanación <span className="font-bold text-primary">Energética</span>
              <br /> Limpia las cargas negativas y equilibrate energéticamente </>} />
        </div>

        {/* Card 2 - Emotional Expansion */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <ExperienceCard imageSrc="/images/experience/ex_emotion.jpeg"
            description={<> 2. Sanación <span className="font-bold text-accent-red">Emocional</span>
              <br /> Suelta estrés, emociones acumuladas y miedos </>} />
        </div>

        {/* Card 3 - Spiritual Renewal */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <ExperienceCard imageSrc="/images/experience/ex_mental.jpeg"
            description={<> 3. Liberación <span className="font-bold text-primary">Mental</span>
              <br /> Aprende a usar tu mente y dejar de reaccionar </>} />
        </div>

        {/* Card 4 - Ice Immersion */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <ExperienceCard imageSrc="/images/experience/ex_espiritual.jpeg"
            description={<> 4. Conexión <span className="font-bold text-accent-red">Espiritual</span>
              <br /> Reconecta contigo mismo y con el poder del universo </>} />
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-8">
        <Button size="lg" onClick={() => scrollToSection(CTA_SECTION_ID)} className="uppercase">
          Reservar mi lugar antes que se agoten
        </Button>
      </div>
    </section>
  );
}

export default ExperienceHighlights;