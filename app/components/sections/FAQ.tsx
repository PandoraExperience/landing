"use client";

import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  return (
    <section id="faq" className="py-24 px-4 bg-[#1D1616]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-900/30 text-primary text-sm font-medium mb-4">
            RESUELVE TUS DUDAS
          </span>
          <h2 className="text-3xl text-white font-bold mb-2">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-300 text-sm">
            Encuentra respuestas a las dudas más comunes sobre la experiencia
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index}>
              <div
                className="bg-black/40 p-4 rounded-lg cursor-pointer flex justify-between items-center"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <h3 className="text-white font-medium">{item.question}</h3>
                <svg
                  className={`w-5 h-5 text-primary transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
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
                <div className="bg-black/40 p-4 mt-1 rounded-lg text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 