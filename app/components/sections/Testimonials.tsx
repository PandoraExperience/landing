"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { HeroVideo } from '@/app/components/ui/hero-video';
import { CTA_SECTION_ID } from '@/app/variables';
import { scrollToSection } from '@/app/lib/utils';
import Quotes from '../ui/Quotes';

// Testimonial video data structure
const testimonialVideos = [
  {
    id: 1,
    videoID: "dQBCkuUtw4k",
    thumbnailSrc: "/images/testimonios/testi.jpeg",
    thumbnailAlt: "Testimonio de transformación 1 - Pandora Experience"
  },
  {
    id: 2,
    videoID: "cBY4QI2ahnE",
    thumbnailSrc: "/images/testimonios/influ.jpeg",
    thumbnailAlt: "Testimonio de transformación 2 - Pandora Experience"
  },
  {
    id: 3,
    videoID: "5ZnHDCggpXA",
    thumbnailSrc: "/images/testimonios/vid1.jpeg",
    thumbnailAlt: "Testimonio de transformación 3 - Pandora Experience"
  },
  {
    id: 4,
    videoID: "9BU2mVWnIvk",
    thumbnailSrc: "/images/testimonios/vid2.jpeg",
    thumbnailAlt: "Testimonio de transformación 4 - Pandora Experience"
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
      className="relative py-8 px-4 overflow-hidden bg-dark-bg text-white"
    >

      {/* Content Container */}
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-accent-red/30 text-accent-red text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
                HISTORIAS DE TRANSFORMACIÓN
              </span>
            </div>
          </div>

          {/* Quote */}
          <Quotes><span className="text-gray-300">
            Lo que hoy te incomoda, mañana te libera.
          </span></Quotes>

          {/* Main Title with glow effect */}
          <div className={`relative pb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-primary/30 filter blur-[80px] rounded-full animate-breathe"></div>

            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
              Testimonios
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre cómo esta experiencia ha transformado la vida de otros.
            </p>
          </div>

          {/* Video Testimonials Carousel */}
          <div className={`w-full max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="block overflow-clip">
              {/* Current Video */}
              <HeroVideo
                className="max-w-xl mx-auto my-16"
                animationStyle="from-center"
                videoID={testimonialVideos[currentVideoIndex].videoID}
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
        <div className={`text-center mx-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Tú también puedes vivir esta experiencia transformadora
          </h3>

          {/* CTA Button with pulsing effect */}
          <div className="relative inline-block">
            {/* Pulsing background effect */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse-slow opacity-70 -z-10"></div>

            <button
              onClick={() => scrollToSection(CTA_SECTION_ID)}
              className="relative px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"
            >
              Vívelo tú también
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 