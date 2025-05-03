"use client";

import React from 'react';

const BenefitItem = ({ text, icon }: { text: string, icon: React.ReactNode }) => {
  return (
    <div className="flex items-center space-x-4 p-5 bg-[#1D1616]/90 rounded-lg border border-white/10 hover:border-[#DC0073]/30 transition-colors shadow-md hover:shadow-lg group">
      <div className="w-10 h-10 rounded-lg bg-[#DC0073]/20 text-[#DC0073] flex items-center justify-center flex-shrink-0 group-hover:bg-[#DC0073]/30 transition-colors">
        {icon}
      </div>
      <span className="text-base text-gray-200 font-medium">{text}</span>
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
      
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#DC0073]/30 text-[#DC0073] text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
                INVERSIÓN & VALOR
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto mb-8">
          </div>

          {/* Main Title with glow effect */}
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#DC0073]/30 filter blur-[80px] rounded-full animate-breathe"></div>
            
            <h2 className="relative text-4xl md:text-5xl font-bold mb-6 text-white">
              Lo que incluye tu inversión
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Invierte en tu transformación personal con una experiencia única y exclusiva.
            </p>
          </div>
        </div>

        {/* Benefits Box */}
        <div className="bg-black/50 rounded-xl border border-white/10 p-8 mb-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Valor que Recibirás</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BenefitItem 
              text="Técnicas avanzadas de respiración" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h8"></path><path d="M12 16V8"></path><circle cx="12" cy="12" r="10"></circle></svg>}
            />
            <BenefitItem 
              text="Inmersión en hielo seguro" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>}
            />
            <BenefitItem 
              text="Meditación con sonoterapias (música medicina)" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>}
            />
            <BenefitItem 
              text="Almuerzo Consciente" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>}
            />
            <BenefitItem 
              text="Cacao caliente" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path></svg>}
            />
            <BenefitItem 
              text="Materiales para la jornada" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
            />
            <BenefitItem 
              text="Caminata natural" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4v16"></path><path d="M17 4v16"></path><path d="M19 16H3a2 2 0 0 0-2 2v1h20v-1a2 2 0 0 0-2-2Z"></path><path d="M8 16v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"></path></svg>}
            />
            <BenefitItem 
              text="Acceso al grupo VIP, con descuentos y clases exclusivas" 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
            />
          </div>
        </div>

        {/* Price Card */}
        <div className="bg-black/50 rounded-xl border border-white/10 relative shadow-xl mt-8">
          {/* Corner badge - final version */}
          <div className="absolute -top-6 -right-6 bg-[#DC0073] text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-xl z-10 uppercase tracking-wider ring-2 ring-white/10">
          Bonos primeros valientes
          </div>
          
          <div className="p-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Experiencia Completa</h3>
              
              {/* Price display */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-gray-300 text-3xl line-through">547.000 COP</span>
                  <span className="bg-[#DC0073]/20 text-[#DC0073] px-4 py-2 rounded-md text-xl font-bold">
                    Descuento 10%
                  </span>
                </div>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-6xl md:text-7xl font-bold">480.000</span>
                  <span className="ml-2 text-2xl text-gray-300">COP</span>
                </div>
                <p className="text-xl text-gray-300 mt-2">Pago único</p>
              </div>

              {/* Availability with progress bar */}
              <div className="mb-6">
                <p className="text-base text-gray-200 mb-3">Cupo exclusivo de 20 personas</p>
              </div>

              {/* Bonus */}
              <div className="text-left bg-[#DC0073]/10 rounded-lg p-4 mb-6 border border-[#DC0073]/20">
                <p className="text-[#DC0073] text-lg font-bold mb-2">Bonos primeros valientes:</p>
                <p className="text-base text-gray-200">Sesión canalizada del oráculo donde tus guías espirituales te brindaran claridad y guía para los primeros 3 inscritos.</p>
              </div>
              <div className="text-left bg-[#DC0073]/10 rounded-lg p-4 mb-6 border border-[#DC0073]/20">
                <p className="text-[#DC0073] text-lg font-bold mb-2">Bono de lanzamiento:</p>
                <p className="text-base text-gray-200">Si conectas con la medicina ancestral, queremos regalarte —por ser el
                lanzamiento— un bono opcional para que vivas la ceremonia de Yagé en la noche.</p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('reserva')}
                className="w-full bg-[#DC0073] text-white py-4 px-6 rounded-lg text-lg font-bold hover:bg-[#DC0073]/90 transition-colors flex items-center justify-center space-x-3 shadow-lg hover:shadow-[#DC0073]/30"
              >
                <span>Reserva tu lugar</span>
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingAvailability;