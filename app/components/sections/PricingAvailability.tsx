"use client";

import React, { useEffect, useRef, useState } from 'react';

// Payment method card component
const PaymentMethodCard = ({ 
  icon, 
  title, 
  description = "" 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description?: string 
}) => {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:bg-[#1D1616]/50">
      <div className="flex-shrink-0 p-2 bg-[#DC0073]/20 rounded-lg text-[#DC0073] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(220,0,115,0.3)]">
        {icon}
      </div>
      <div>
        <h4 className="text-base font-medium text-white">{title}</h4>
        {description && <p className="text-sm text-gray-400">{description}</p>}
      </div>
    </div>
  );
};

// Benefit badge component
const BenefitBadge = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center space-x-2 py-1">
      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#DC0073]/30 p-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#DC0073]">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span className="text-sm text-gray-300">{text}</span>
    </div>
  );
};

const PricingAvailability = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSpot, setCurrentSpot] = useState(15); // Starting with 15 spots left (out of 25)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

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

  // Simulate spot reduction
  useEffect(() => {
    if (isVisible && currentSpot > 2) {
      const timer = setTimeout(() => {
        setCurrentSpot(prev => Math.max(prev - 1, 2));
      }, 30000); // Reduce by 1 every 30 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, currentSpot]);

  const scrollToRegistration = () => {
    const registration = document.getElementById('registro');
    registration?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="precio" className="relative py-24 px-4 overflow-hidden bg-[#1D1616] text-white">
      {/* Enhanced Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(220,0,115,0.2)_0%,rgba(33,33,33,0)_70%)] animate-breathe opacity-90"></div>
      
      {/* Parallax background elements */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#DC0073]/20 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#DC0073]/15 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`, animationDelay: '2.5s' }}
      ></div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-900/30 backdrop-blur-sm border border-white/10 text-[#DC0073] text-sm font-medium tracking-wider">
                INVERSIÓN & EXCLUSIVIDAD
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute -left-6 top-0 text-3xl text-[#DC0073]/70">"</div>
            <div className="absolute -right-6 bottom-0 text-3xl text-[#DC0073]/70">"</div>
            <p className="text-2xl md:text-3xl italic font-light px-8 text-gray-300">
              Invierte en ti, el retorno es infinito.
            </p>
          </div>

          {/* Main Title with glow effect */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#DC0073]/30 filter blur-[80px] rounded-full animate-breathe"></div>
            
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
              Precio y Disponibilidad
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Invierte en tu transformación personal con una experiencia única y exclusiva.
          </p>
        </div>

        {/* Early Bird Countdown and Guarantee Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Early Bird Bonus */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-full bg-[#1D1616]/80 backdrop-blur-sm rounded-2xl p-8 border border-[#DC0073]/20 shadow-[0_0_20px_rgba(220,0,115,0.2)]">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-[#DC0073]/20 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DC0073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Bono Exclusivo</h4>
                  <p className="text-gray-400">
                    Sesión de lectura de guías espirituales para los primeros 10 inscritos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee box */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-full bg-[#1D1616]/70 rounded-2xl p-8 border border-[#DC0073]/20 shadow-[0_0_15px_rgba(220,0,115,0.2)]">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-[#DC0073]/20 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DC0073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Garantía de Satisfacción</h4>
                  <p className="text-gray-400">
                    Si no estás completamente satisfecho con la experiencia, te devolvemos el 100% de tu inversión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Price Card */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1D1616]/90 to-[#1D1616] border border-[#DC0073]/20 p-1 shadow-[0_0_20px_rgba(220,0,115,0.2)]">
              {/* Premium badge */}
              <div className="absolute -top-6 -right-16 w-40 h-12 bg-[#DC0073] rotate-45 flex items-end justify-center pb-1 text-white text-xs font-semibold uppercase tracking-wider shadow-lg">
                Valor único
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-col items-center text-center space-y-5">
                  <h3 className="text-2xl font-bold text-white">Experiencia Completa</h3>
                  
                  {/* Price display */}
                  <div className="mt-2">
                    <div className="flex items-center justify-center">
                      <span className="text-gray-400 text-xl mr-2 line-through">547.000 COP</span>
                      <span className="bg-[#DC0073]/20 text-[#DC0073] px-2 py-0.5 rounded text-sm">
                        ¡Descuento Primeros 10!
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center mt-1">
                      <span className="text-5xl font-extrabold text-white">497.000</span>
                      <span className="ml-1 text-xl text-gray-300">COP</span>
                    </div>
                    <p className="text-gray-400 mt-1">Pago único</p>
                  </div>
                  
                  {/* Spot counter */}
                  <div className="w-full mt-2 bg-[#1D1616]/80 rounded-lg p-4 border border-white/5">
                    <p className="text-gray-300 text-sm mb-2">Cupo exclusivo de 25 personas</p>
                    <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-[#DC0073] rounded-full transition-all duration-1000"
                        style={{ width: `${(currentSpot / 25) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-[#DC0073] text-sm font-medium">
                        Solo {currentSpot} cupos disponibles
                      </span>
                      <span className="text-gray-400 text-sm">
                        {25 - currentSpot} reservados
                      </span>
                    </div>
                  </div>

                  {/* Additional benefits highlight */}
                  <div className="w-full p-4 bg-[#DC0073]/10 rounded-lg border border-[#DC0073]/20">
                    <p className="text-sm text-[#DC0073] font-medium">Beneficios exclusivos:</p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-300">
                      <li>• Acceso prioritario a próximos eventos</li>
                      <li>• Material digital complementario</li>
                      <li>• Soporte post-experiencia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features and Benefits */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            {/* What's included */}
            <div className="bg-[#1D1616]/70 rounded-2xl p-5 border border-white/10 shadow-[0_0_15px_rgba(220,0,115,0.1)]">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#DC0073]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Lo que incluye tu inversión
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <BenefitBadge text="Experiencia completa inmersiva de 8 horas" />
                <BenefitBadge text="Guía profesional certificado" />
                <BenefitBadge text="Materiales completos para la experiencia" />
                <BenefitBadge text="Almuerzo consciente de alta calidad" />
                <BenefitBadge text="Certificado de participación" />
                <BenefitBadge text="Comunidad de apoyo post-evento" />
                <BenefitBadge text="Acceso a recursos exclusivos" />
                <BenefitBadge text="Seguimiento personalizado" />
              </div>
            </div>

            {/* Payment methods */}
            <div className="bg-[#1D1616]/70 rounded-2xl p-5 border border-white/10 shadow-[0_0_15px_rgba(220,0,115,0.1)]">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#DC0073]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                </span>
                Métodos de pago flexibles
              </h3>
              
              <div className="grid grid-cols-2 gap-2">
                <PaymentMethodCard 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  }
                  title="Tarjeta de Crédito"
                  description="Visa, Mastercard, Amex"
                />
                
                <PaymentMethodCard 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  }
                  title="Transferencia Bancaria"
                  description="PSE, Bancolombia"
                />

                <PaymentMethodCard 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  title="Pago en Efectivo"
                  description="Corresponsales bancarios"
                />

                <PaymentMethodCard 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  }
                  title="Pago en Cuotas"
                  description="Hasta 12 cuotas"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Urgency message */}
          <p className="text-[#DC0073] font-medium mb-4">¡No pierdas esta oportunidad única de transformación!</p>
          
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-[#DC0073]/20 rounded-full blur-xl animate-pulse-slow opacity-70 -z-10"></div>
            <button 
              className="relative px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-[#DC0073] hover:text-white hover:bg-[#DC0073] border-2 border-[#DC0073] rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(220,0,115,0.5)] hover:shadow-[0_0_25px_rgba(220,0,115,0.8)]"
              onClick={scrollToRegistration}
            >
              Separa tu cupo ahora antes de que se agoten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingAvailability; 