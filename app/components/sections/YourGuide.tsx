"use client";

import Image from 'next/image';
import Link from 'next/link';

const YourGuide = () => {
  return (
    <section id="guia" className="relative py-24 px-4 bg-[#1D1616] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,96,187,0.1)_0%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#DC0073]/30 text-[#DC0073] text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)] mb-4">
            TU GUÍA
          </span>
          <h2 className="text-4xl font-bold text-white mb-3">
            NATY DIAZ
          </h2>
          <Link
            href="https://instagram.com/universare"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-lg font-medium">@UNIVERSARE</span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Profile Image */}
          <div className="lg:w-1/3 relative">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-primary/20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden shadow-2xl">
                <Image
                  src="/images/guide/naty.jpg"
                  alt="Naty Diaz - Tu guía espiritual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 space-y-8 text-center lg:text-left">
            {/* About Section */}
            <div>
              <h3 className="text-primary text-xl font-semibold mb-4">Sobre Mí</h3>
              <p className="text-gray-300 leading-relaxed">
                Terapeuta holística del instituto IIN en NewYork, certificada en el método de respiración Ovárica, Maestra en Sacerdocio Ancestral por la Escuela de Mujeres que Despiertan y certificada como ICE Trainer, respiración energética e inmersión en hielo.
              </p>
            </div>

            {/* Expertise Section */}
            <div>
              <h3 className="text-primary text-xl font-semibold mb-4">Especialización</h3>
              <p className="text-gray-300 leading-relaxed">
                Mentora de negocios conscientes, experta en
                eliminación de barreras mentales y conexión con el ser
                espiritual. Facilitadora de procesos de transformación y
                despertar de consciencia.
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-primary text-xl font-semibold mb-4">Experiencia</h3>
              <p className="text-gray-300 leading-relaxed">
                Más de 2 años acompañando en procesos terapéuticos a
                través de la re-programación mental, conexión espiritual y
                energética, despertar del femenino a través del cuerpo y
                ampliación de estados de consciencia.
              </p>
            </div>

          </div>
        </div>

        {/* Credentials Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-black/40 rounded-xl p-6 border border-white/5">
            <h4 className="text-primary font-semibold mb-2">Certificada</h4>
            <p className="text-gray-300 text-sm">Ice trainer, respiración energética e inmersión en hielo</p>
          </div>
          <div className="bg-black/40 rounded-xl p-6 border border-white/5">
            <h4 className="text-primary font-semibold mb-2">Especialista</h4>
            <p className="text-gray-300 text-sm">Liberación emocional</p>
          </div>
          <div className="bg-black/40 rounded-xl p-6 border border-white/5">
            <h4 className="text-primary font-semibold mb-2">Enfoque</h4>
            <p className="text-gray-300 text-sm">Respiración y Consciencia</p>
          </div>
        </div>

        {/* Main Title with glow effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#0560BB]/30 filter blur-[80px] rounded-full animate-breathe"></div>
        </div>
      </div>
    </section>
  );
};

export default YourGuide; 