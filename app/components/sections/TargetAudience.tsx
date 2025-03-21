"use client"

import React, { useState } from 'react';

const TargetAudience = () => {
  const [activeTab, setActiveTab] = useState('for-you');
  
  return (
    <section id="experiencia" className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(circle,rgba(0,51,102,0.02)_0%,rgba(255,255,255,0)_70%)]"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-warm-orange/5 filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-forest-green/5 filter blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-4 py-1 rounded-full bg-[#DC0073]/10 backdrop-blur-sm border border-[#DC0073]/20 text-[#DC0073] text-sm font-medium tracking-wider">
                DESCUBRE TU CAMINO
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute -left-6 top-0 text-3xl text-[#DC0073]/70">"</div>
            <div className="absolute -right-6 bottom-0 text-3xl text-[#DC0073]/70">"</div>
            <p className="text-2xl md:text-3xl italic font-light px-8 text-gray-600">
              El cambio comienza cuando te atreves a dar el primer paso.
            </p>
          </div>

          {/* Main Title with glow effect */}
          <div className="relative transition-all duration-300">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#DC0073]/5 filter blur-[80px] rounded-full animate-breathe"></div>
            
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-[#1D1616]">
              ¿Para Quién Es Esta Experiencia?
            </h2>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Identifica si esta inmersión transformadora es para ti y descubre cómo puede cambiar tu vida.
          </p>
          
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-gray-100 p-1.5 shadow-inner">
              <button
                onClick={() => setActiveTab('for-you')}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeTab === 'for-you'
                    ? 'bg-[#DC0073] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#1D1616]'
                }`}
              >
                Esta experiencia es para ti
              </button>
              <button
                onClick={() => setActiveTab('not-for-you')}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeTab === 'not-for-you'
                    ? 'bg-[#1D1616] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#1D1616]'
                }`}
              >
                Esta experiencia NO es para ti
              </button>
            </div>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="relative min-h-[580px]">
          {/* For You Tab */}
          <div 
            className={`transform transition-all duration-500 ${
              activeTab === 'for-you' 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'
            }`}
          >
            <div className="relative lg:flex items-center">
              {/* Visual Image Side */}
              <div className="lg:w-5/12 mb-10 lg:mb-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_70px_-10px_rgba(255,111,60,0.3)]">
                  <img 
                    src="/transform-avatar.svg" 
                    alt="Persona en transformación" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1616]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-3">Esta experiencia es para ti si:</h3>
                    <div className="w-20 h-1 bg-[#DC0073] rounded-full mb-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Content Side with Flowing Design */}
              <div className="lg:w-7/12 lg:pl-16">
                <ul className="space-y-8">
                  <li className="flex items-center space-x-6 group p-1 rounded-xl transition-all duration-300 hover:bg-[#DC0073]/5">
                    {/* Transformation icon */}
                    <div className="flex-shrink-0 p-4 bg-[#DC0073]/10 rounded-full text-[#DC0073] group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#1D1616] mb-1">Reinvención Personal</h4>
                      <p className="text-gray-700">Estás en un proceso de transformación y buscas herramientas para facilitar este camino</p>
                    </div>
                  </li>
                  
                  <li className="flex items-center space-x-6 group p-1 rounded-xl transition-all duration-300 hover:bg-[#DC0073]/5">
                    {/* Unlock/key icon */}
                    <div className="flex-shrink-0 p-4 bg-[#DC0073]/10 rounded-full text-[#DC0073] group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#1D1616] mb-1">Superar Bloqueos Emocionales</h4>
                      <p className="text-gray-700">Deseas liberar patrones limitantes que te impiden avanzar en tu vida</p>
                    </div>
                  </li>
                  
                  <li className="flex items-center space-x-6 group p-1 rounded-xl transition-all duration-300 hover:bg-[#DC0073]/5">
                    {/* Calming wave icon */}
                    <div className="flex-shrink-0 p-4 bg-[#DC0073]/10 rounded-full text-[#DC0073] group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#1D1616] mb-1">Manejar el Estrés y la Ansiedad</h4>
                      <p className="text-gray-700">Buscas herramientas efectivas para gestionar estados emocionales desafiantes</p>
                    </div>
                  </li>
                  
                  <li className="flex items-center space-x-6 group p-1 rounded-xl transition-all duration-300 hover:bg-[#DC0073]/5">
                    {/* Shield/strength icon */}
                    <div className="flex-shrink-0 p-4 bg-[#DC0073]/10 rounded-full text-[#DC0073] group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#1D1616] mb-1">Fortalecer tu Resiliencia</h4>
                      <p className="text-gray-700">Quieres desarrollar fortaleza interior y capacidad para enfrentar desafíos</p>
                    </div>
                  </li>
                </ul>
                
                {/* CTA Button */}
                <div className="mt-10">
                  <a 
                    href="#registro" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#DC0073] text-white font-medium rounded-xl shadow-lg hover:bg-[#DC0073]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Esto es para mí
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Not For You Tab */}
          <div 
            className={`transform transition-all duration-500 ${
              activeTab === 'not-for-you' 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8 absolute inset-0 pointer-events-none'
            }`}
          >
            <div className="relative lg:flex items-center">
              {/* Content Side with Flowing Design */}
              <div className="lg:w-7/12 lg:pr-16 order-2 lg:order-1">
                <ul className="space-y-8">
                  <li className="flex items-center space-x-6 group p-1 rounded-xl transition-all duration-300 hover:bg-[#DC0073]/5">
                    {/* No commitment icon */}
                    <div className="flex-shrink-0 p-4 bg-[#DC0073]/10 rounded-full text-[#DC0073] group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#DC0073] mb-1">Sin Compromiso Personal</h4>
                      <p className="text-gray-700">Buscas una experiencia sin esfuerzo o implicación personal</p>
                    </div>
                  </li>
                  
                  <li className="flex items-center space-x-6 group p-1 rounded-xl transition-all duration-300 hover:bg-[#DC0073]/5">
                    {/* Comfort zone icon */}
                    <div className="flex-shrink-0 p-4 bg-[#DC0073]/10 rounded-full text-[#DC0073] group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#DC0073] mb-1">Zona de Comfort</h4>
                      <p className="text-gray-700">No estás dispuesto a explorar más allá de tu zona de comfort para crecer</p>
                    </div>
                  </li>
                  
                  <li className="flex items-center space-x-6 group p-1 rounded-xl transition-all duration-300 hover:bg-[#DC0073]/5">
                    {/* Medical condition icon */}
                    <div className="flex-shrink-0 p-4 bg-[#DC0073]/10 rounded-full text-[#DC0073] group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#DC0073] mb-1">Condiciones Médicas</h4>
                      <p className="text-gray-700">Tienes condiciones de salud que contraindican la exposición al frío</p>
                    </div>
                  </li>
                  
                  <li className="flex items-center space-x-6 group p-1 rounded-xl transition-all duration-300 hover:bg-[#DC0073]/5">
                    {/* Instant results icon */}
                    <div className="flex-shrink-0 p-4 bg-[#DC0073]/10 rounded-full text-[#DC0073] group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#DC0073] mb-1">Resultados Inmediatos</h4>
                      <p className="text-gray-700">Esperas transformaciones instantáneas sin pasar por un proceso de aprendizaje</p>
                    </div>
                  </li>
                </ul>
                
                {/* Informational Button */}
                <div className="mt-10">
                  <a 
                    href="#faq" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#DC0073] border-2 border-[#DC0073]/30 font-medium rounded-xl shadow-md hover:bg-[#DC0073]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Tengo dudas
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Visual Image Side */}
              <div className="lg:w-5/12 mb-10 lg:mb-0 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_70px_-10px_rgba(220,20,60,0.3)]">
                  <img 
                    src="/not-for-you-avatar.svg" 
                    alt="Persona evitando desafíos" 
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1616]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-3">Esta experiencia NO es para ti si:</h3>
                    <div className="w-20 h-1 bg-[#DC0073] rounded-full mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience; 