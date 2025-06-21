"use client";

import { scrollToSection } from '@/app/lib/utils';
import { useState } from 'react';
import { CTA_SECTION_ID } from '@/app/variables';

const questions = [
  {
    question: "¿Es seguro entrar al hielo?",
    answer: "Si, totalmente. Nos aseguramos que estés en las mejores manos, por eso, verás a Naty, nuestra instructora en respiración certificada como ICE TRAINER, que ha venido acompañado y creado eventos de transformación en los últimos años. La práctica es segura, seguimos un protocolo y te entregamos recomendaciones para asegurarnos que tengas la mejor experiencia posible."
  },
  {
    question: "¿El transporte esta incluido?",
    answer: "No, el valor no incluye el transporte, pero no te preocupes, es accesible en transporte público, carro, o  moto (contamos con parqueadero) . Buscamos un espacio al que pudieras llegar fácil, a 1 hora de la ciudad, pero que estuviera en medio de la naturaleza. Al registrarte te enviaremos todas las indicaciones y facilidades para que puedas llegar sin contratiempos."
  },
  {
    question: "¿Quienes NO pueden asistir?",
    answer: "Menores de edad, mascotas, mujeres en embarazo, personas con dificultades cardíacas, problemas crónicos respiratorios, antecedentes de epilepsia, urticaria al frío NO pueden hacer la experiencia de inmersión en hielo."
  },
  {
    question: "¿Cuanto tiempo dura?",
    answer: "Una jornada completa: desde las 8:00 am hasta las 6pm. No vengas con afán, pues será un dia intenso. Separa todo el dia y la noche para que después descanses lo suficiente."
  },
  {
    question: "¿Cómo reservo?",
    answer: "Para separar tu cupo debes realizar la inscripción. Allí encontraras todos los medios de pago. Puedes pagar el 100% y recibir gratis el bono Valentia (Valorado en 80 dólares) o reservar con el 50% y pagar el restante faltando 10 dias."
  },
  {
    question: "¿Que pasa si no puedo ir?",
    answer: "En caso de que no puedas asistir por motivos de fuerza mayor (enfermedad o calamidad domestica) y ya hayas reservado, podrás ceder tu cupo a un amigo/ familiar o en tal caso reagendar para una próxima fecha . NO SE REALIZARÁ DEVOLUCIÓN DEL DINERO."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq"
      className="relative py-8 px-4 bg-dark-bg overflow-hidden">
      {/* Subtle background patterns and glow effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/5 filter blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-accent-red/30 text-accent-red text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)] mb-4">
            RESUELVE TUS DUDAS
          </span>

          {/* Title with glow effect */}
          <div className="relative mb-4">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-primary/30 filter blur-[80px] rounded-full animate-breathe"></div>
            <h2 className="relative text-3xl text-white font-bold">
              Preguntas Frecuentes
            </h2>
          </div>

          <p className="text-gray-300 text-sm">
            Encuentra respuestas a las dudas más comunes sobre la experiencia
          </p>
        </div>

        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="bg-black/40 p-4 rounded-lg cursor-pointer flex justify-between items-center border border-white/5 hover:border-primary/20 transition-all duration-300"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <h3 className="text-white font-medium">{item.question}</h3>
              <svg
                className={`w-5 h-5 text-primary transition-transform ${activeIndex === index ? 'rotate-180' : ''
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <div className="bg-black/40 p-4 mt-1 rounded-lg text-gray-300 border border-white/5">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        {/* CTA Button */}
        <button
          onClick={() => scrollToSection(CTA_SECTION_ID)}
          className="px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"
        >
          QUIERO PARTICIPAR
        </button>
      </div>
    </section>
  );
};

export default FAQ; 