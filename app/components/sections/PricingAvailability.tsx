"use client";

import React from 'react';

const BenefitItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center space-x-3 p-4 bg-[#1D1616]/90 rounded-lg border border-white/5">
      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
      <span className="text-sm text-gray-300">{text}</span>
    </div>
  );
};

const PricingAvailability = () => {
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
    <section id="precio" className="relative py-24 px-4 overflow-hidden bg-[#1D1616] text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,96,187,0.1)_0%,transparent_100%)]"></div>
      
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-900/30 backdrop-blur-sm border border-white/10 text-primary text-sm font-medium tracking-wider mb-4">
            INVERSIÓN & VALOR
          </span>

          <div className="relative max-w-3xl mx-auto mb-4">
            <div className="absolute -left-4 top-0 text-3xl text-primary/70">"</div>
            <p className="text-xl italic font-light px-8 text-gray-300">
              Invierte en ti, el retorno es infinito.
            </p>
            <div className="absolute -right-4 bottom-0 text-3xl text-primary/70">"</div>
          </div>

          <h2 className="text-3xl font-bold mb-2">
            Lo que incluye tu inversión
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-sm">
            Invierte en tu transformación personal con una experiencia única y exclusiva.
          </p>
        </div>

        {/* Benefits Box */}
        <div className="bg-black/40 rounded-xl border border-white/5 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <BenefitItem text="Experiencia completa inmersiva de 8 horas" />
            <BenefitItem text="Guía profesional certificado" />
            <BenefitItem text="Materiales completos para la experiencia" />
            <BenefitItem text="Almuerzo consciente de alta calidad" />
            <BenefitItem text="Técnicas avanzadas de respiración" />
            <BenefitItem text="Protocolos de seguridad completos" />
            <BenefitItem text="Acceso al grupo privado de participantes" />
            <BenefitItem text="Soporte continuo post-experiencia" />
            <BenefitItem text="Prioridad y descuentos en futuros eventos" />
          </div>
        </div>

        {/* Price Card */}
        <div className="bg-black/40 rounded-xl border border-white/5 overflow-hidden relative">
          {/* Corner ribbon */}
          <div className="absolute -top-6 -right-16 w-40 h-12 bg-primary rotate-45 flex items-end justify-center pb-1 text-white text-[10px] uppercase tracking-wider font-medium">
            Bono Exclusivo
          </div>
          
          <div className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Experiencia Completa</h3>
              
              {/* Price display */}
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 text-lg line-through">547.000 COP</span>
                  <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-sm">
                    Descuento 10%
                  </span>
                </div>
                <div className="flex items-baseline justify-center mt-2">
                  <span className="text-4xl font-bold">497.000</span>
                  <span className="ml-1 text-sm text-gray-400">COP</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Pago único</p>
              </div>

              {/* Availability with progress bar */}
              <div className="mb-4">
                <p className="text-sm text-gray-300 mb-2">Cupo exclusivo de 25 personas</p>
                {/* Progress bar */}
                <div className="h-1 bg-white/10 rounded-full mb-2 overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-primary font-medium">Solo 2 cupos</span>
                  <span className="text-gray-400">23 reservados</span>
                </div>
              </div>

              {/* Bonus */}
              <div className="text-left bg-primary/5 rounded-lg p-3 mb-4">
                <p className="text-primary text-sm font-medium mb-1">Bono Exclusivo:</p>
                <p className="text-sm text-gray-300">Sesión de lectura de guías espirituales para los primeros 10 inscritos</p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('reserva')}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Reserva tu lugar</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingAvailability;