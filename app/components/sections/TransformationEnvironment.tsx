"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/app/lib/utils';
import { CTA_SECTION_ID } from '@/app/variables';
import Quotes from '@/app/components/ui/Quotes';
import Button from '@/app/components/ui/Button';

const environmentFeatures = [
  {
    id: 1,
    iconPath: "M12 2 a10 10 0 1 0 0 20 a10 10 0 1 0 0-20 M2 12h20 M12 2c4 3 4 17 0 20 M12 2c-4 3-4 17 0 20",
    title: "Ubicación exclusiva en la naturaleza",
    description: "Solo una hora de Medellín, este territorio ancestral y de sanación, via Yolombó de facil acceso en transporte público y vehículo propio."
  },
  {
    id: 2,
    iconPath: "M8 8a5 5 0 000 8 M5 5a9 9 0 000 14 M16 8a5 5 0 010 8 M19 5a9 9 0 010 14",
    title: "Ambiente libre de distracciones",
    description: "Sin ruidos urbanos, solo el sonido del agua y la energía del entorno para reconectar contigo mismo."
  },
  {
    id: 3,
    iconPath: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    title: "Rituales ancestrales",
    description: "Una combinación de ciencia, meditación y conexión con los elementos naturales para acompañar el proceso."
  }
];

// Simple EnvironmentFeature component
const EnvironmentFeature = ({ iconPath, title, description }: {
  iconPath: string, title: string, description: string
}) => {
  return (
    <div className="flex items-start space-x-5 p-3 rounded-xl group transition-all duration-300 hover:bg-dark-bg/50">
      <div className="flex-shrink-0 p-3 bg-primary/20 rounded-xl text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const TransformationEnvironment = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of gallery images - clean simple array with just the image paths
  const galleryImages = [
    '/images/venue/2.jpg',
    '/images/venue/3.jpg',
    '/images/venue/venue1.jpg',
    '/images/venue/venue2.jpg',
    '/images/venue/venue3.jpg',
    '/images/venue/venue4.jpg',
  ];

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  // Gallery navigation functions
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % galleryImages.length
    );
  };

  return (
    <section ref={sectionRef} id="transformacion" className="relative py-8 px-4 bg-dark-bg text-white overflow-hidden">

      <div className="container mx-auto">
        {/* Header with fade-in animation */}
        <div className={`text-center mb-16 transition-all duration-1000 opacity-100 translate-y-0`}>
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-accent-red/30 text-accent-red text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
                NATURALEZA & DESPERTAR
              </span>
            </div>
          </div>

          <Quotes><span className="text-gray-300">
            La naturaleza no sana con fuerza, sino con presencia
          </span></Quotes>

          {/* Main Title with glow effect */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary/30 filter blur-[80px] rounded-full animate-breathe"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold text-white text-center">
              Transformación Profunda
            </h2>
          </div>
        </div>

        {/* Two-Column Layout with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image Gallery */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            {/* Images */}
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={image}
                  alt={`Venue image ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}

            {/* Always visible navigation controls with better hover effects */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={handlePrevImage}
                className="w-12 h-12 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 focus:outline-none z-10 shadow-lg"
                aria-label="Previous image"
                type="button"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="w-12 h-12 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/80 hover:scale-110 transition-all duration-300 focus:outline-none z-10 shadow-lg"
                aria-label="Next image"
                type="button"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image counter */}
            <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm text-white">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>

          </div>

          {/* Right Column - Features List with staggered animations */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 opacity-100 translate-y-0`}>
            {environmentFeatures.map((feature) => (
              <EnvironmentFeature
                key={feature.id}
                iconPath={feature.iconPath}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Call to Action with enhanced animations */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 opacity-100 translate-y-0`}>
          {/* Urgency message */}
          <p className="text-primary font-medium -mb-2">
            Para garantizar una experiencia semi-personalizada, tenemos cupos limitados
          </p>
          <Button size="lg" onClick={() => scrollToSection(CTA_SECTION_ID)} >
            QUIERO PARTICIPAR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationEnvironment;