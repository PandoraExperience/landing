"use client"

import React, { useState } from 'react';
import Quotes from '@/app/components/ui/Quotes';

const IconListElement = ({ svgIconPath, title, description }: { svgIconPath: React.ReactNode, title: string, description: string }) => {
  return (
    <li className="flex items-center space-x-6 group p-1 rounded-xl transition-all duration-300 hover:bg-primary/5">
      <div className="flex-shrink-0 p-4 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {svgIconPath}
        </svg>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-primary mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </li>
  );
};

const TargetAudience = () => {
  const [activeTab, setActiveTab] = useState('for-you');

  // Add scroll handler function
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
    <section id="experiencia"
      className="relative pt-16 pb-24 px-4 bg-white overflow-hidden"
      style={{ marginBottom: '-1px' }}
    >
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-6 py-2 rounded-full bg-white backdrop-blur-sm border-2 border-[#DC0073]/30 text-[#DC0073] text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
                NO HAY CASUALIDADES
              </span>
            </div>
          </div>

          {/* Quote */}
          <Quotes>
            Deja de cargar con lo que ya no te pertenece y vuelve a creer en ti
          </Quotes>

          {/* Main Title with glow effect */}
          <div className="relative transition-all duration-300">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#0560BB]/30 filter blur-[80px] rounded-full animate-breathe"></div>

            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-dark-bg">
              ¿Para quién es esta experiencia?
            </h2>

          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-gray-100 p-1.5 shadow-inner">
              <button onClick={() => setActiveTab('for-you')}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeTab === 'for-you'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-dark-bg'
                  }`}
              >
                Es para ti...
              </button>
              <button onClick={() => setActiveTab('not-for-you')}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${activeTab === 'not-for-you'
                  ? 'bg-dark-bg text-white shadow-md'
                  : 'text-gray-600 hover:text-dark-bg'
                  }`}
              >
                No es para personas...
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[580px]">
          {/* For You Tab */}
          <div className={`transform transition-all duration-500 ${activeTab === 'for-you'
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'
            }`}
          >
            <div className="relative lg:flex items-center">
              {/* Visual Image Side */}
              <div className="lg:w-5/12 mb-10 lg:mb-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_70px_-10px_rgba(5,96,187,0.3)]">
                  <img
                    src="/images/experience/experience-for.jpg"
                    alt="Persona lista para la transformación"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-3 [text-shadow:4px_4px_6px_rgba(0,0,0,0.6)]">
                      Esta experiencia es para ti si buscas:</h3>
                    <div className="w-20 h-1 bg-primary rounded-full mb-4"></div>
                  </div>
                </div>
              </div>

              {/* Content Side with Flowing Design */}
              <div className="lg:w-7/12 lg:pl-16">
                <ul className="space-y-8">
                  {[
                    {
                      title: "Liberar bloqueos emocionales y mentales",
                      description: "Soltar cargas invisibles emocionales debido a situaciones familiares, de pareja o de infancia.",
/* Unlock/key icon */ svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    },
                    {
                      title: "Superar altas cargas de estrés y ansiedad",
                      description: "Eres un profesional o emprendedor que necesita liberar el estrés y mejorar su bienestar.",
/* Calming wave icon */ svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    },
                    {
                      title: "Reconectar contigo",
                      description: "Buscas un crecimiento personal y espiritual que te ayude a reconectar contigo mismo.",
/* Transformation icon */ svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    },
                    {
                      title: "Claridad, energía y buen descanso",
                      description: "Sientes falta de energía, sueño, motivación o claridad y quieres recuperar tu equilibrio.",
/* ShieldCheck icon */ svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    },
                    {
                      title: "Crecer y salir de tu zona de confort",
                      description: "Quieres aprender a atravesar el miedo, la incomodidad y la incertidumbre con valentia",
/* Growth icon */ svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0 M12 12 l8 -9 M21 2 h-4 m4 0 v4" />
                    },
                    {
                      title: "Tranquilidad, confianza y amor propio",
                      description: "Necesitas tomar mejores decisiones con confianza y creyendo más en ti",
/* Peace icon */ svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20M12 12l6.928 4M12 12l-6.928 4" />
                    },
                  ].map((item, index) => (
                    <IconListElement key={index} svgIconPath={item.svgIconPath} title={item.title} description={item.description} />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Not For You Tab */}
          <div
            className={`transform transition-all duration-500 ${activeTab === 'not-for-you'
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-8 absolute inset-0 pointer-events-none'
              }`}
          >
            <div className="relative lg:flex items-center">
              {/* Visual Image Side */}
              <div className="lg:w-5/12 mb-10 lg:mb-0 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_70px_-10px_rgba(5,96,187,0.3)]">
                  <img
                    src="/images/experience/experience-not.jpg"
                    alt="Persona evitando desafíos"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-3 [text-shadow:4px_4px_6px_rgba(0,0,0,0.6)]">
                      Esta experiencia NO es para personas:</h3>
                    <div className="w-20 h-1 bg-primary rounded-full mb-4"></div>
                  </div>
                </div>
              </div>
              {/* Content Side with Flowing Design */}
              <div className="lg:w-7/12 lg:pr-16 order-2 lg:order-1">
                <ul className="space-y-8">
                  {[
                    {
                      title: "Cerradas y estrictas",
                      description: "NO estás abierto a explorar tu lado emocional y espiritual asi como la conexion mente, emociones y el cuerpo.",
/* DenyCircle icon */ svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    },
                    {
                      title: "Conformistas",
                      description: "NO estás dispuesto a salir de tu zona de confort y crecer.",
/* Calming wave icon */ svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    },
                    {
                      title: "Que no quieran ponerse de prioridad",
                      description: "Buscas seguir reprimiendo tus emociones y cargando situaciones dolorosas pensando en todos menos en ti.",
/* ShieldX icon */    svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10l6 6m0-6l-6 6m5.618-10.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    },
                    {
                      title: "Facilistas",
                      description: "Prefieres soluciones rápidas o que evadan lo que sientan en lugar de un trabajo interno profundo.",
/* Warning icon */ svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    },
                    {
                      title: "Que no quieran aprender",
                      description: "NO te interesa aprender técnicas para gestionar el estrés y la ansiedad o explorar nuevas herramientas de autoconocimiento.",
/* LockOpen icon */   svgIconPath: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    },
                  ].map((item, index) => (
                    <IconListElement key={index} svgIconPath={item.svgIconPath} title={item.title} description={item.description} />
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Wave divider with subtle gradient */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark-bg to-transparent opacity-5"></div>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
          fill="var(--dark-bg)"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,131,95,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default TargetAudience; 