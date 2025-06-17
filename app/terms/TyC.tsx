'use client';
import React, { useState } from 'react';

type Lang = 'es' | 'en';
const EN: Lang = 'en', ES: Lang = 'es';

const content = {
  es: {
    title: 'Términos y Condiciones',
    sections: [
      {
        title: 'Política de Privacidad',
        content: [
          'Al registrarte, autorizas a PANDORA EXPERIENCE a recopilar y procesar tu información personal de acuerdo con nuestra política de privacidad. Esta información se utilizará únicamente para gestionar tu reserva, enviarte comunicaciones importantes y mantenerte informado sobre el evento.'
        ]
      },
      {
        title: 'Política de Cancelación',
        content: [
          'En caso de fuerza mayor, podrás reagendar tu participación para una futura edición o transferir tu cupo a otra persona.',
          'No realizamos reembolsos bajo ninguna circunstancia.',
          'No hay re-agendamiento para cancelaciones dentro de las 48 horas previas al evento.'
        ],
        list: true
      },
      {
        title: 'Términos del Evento',
        content: [
          'La reserva de tu cupo se confirma únicamente tras recibir el pago completo (o en su defecto, el pago del 50% y no tener saldo pendiente antes de la fecha límite indicada).',
          'PANDORA EXPERIENCE se reserva el derecho de realizar ajustes en el programa si las circunstancias lo requieren, garantizando siempre la integridad de la experiencia.',
          'La participación está limitada a personas mayores de 18 años. (Menores de edad deben ser acompañados por su representante legal).',
          'Nos reservamos el derecho de admisión, considerando las condiciones médicas de cada participante para garantizar una experiencia segura, consciente y responsable.'
        ],
        list: true
      },
      {
        title: 'Uso de la Información',
        content: [
          'Usamos tu información para gestionar tu participación en el evento.',
          'Enviarte información relevante y recordatorios.',
          'Notificarte sobre cambios, actualizaciones o próximos eventos.'
        ],
        list: true
      }
    ]
  },
  en: {
    title: 'Terms and Conditions',
    sections: [
      {
        title: 'Privacy Policy',
        content: [
          'By registering, you authorize PANDORA EXPERIENCE to collect and process your personal information in accordance with our privacy policy. This information will be used solely to manage your booking, send you important communications, and keep you informed about the event.'
        ]
      },
      {
        title: 'Cancellation Policy',
        content: [
          'In case of force majeure, you may reschedule your participation for a future edition or transfer your spot to someone else.',
          'We do not offer refunds under any circumstances.',
          'No rescheduling is allowed for cancellations within 48 hours of the event.'
        ],
        list: true
      },
      {
        title: 'Event Terms',
        content: [
          'Your reservation is confirmed only after full payment is received (or a 50% payment with no pending balance before the indicated deadline).',
          'PANDORA EXPERIENCE reserves the right to make adjustments to the program if circumstances require, always ensuring the integrity of the experience.',
          'Participation is limited to individuals over 18. Minors must be accompanied by their legal guardian.',
          'We reserve the right of admission, considering each participant\'s medical conditions to ensure a safe, conscious, and responsible experience.'
        ],
        list: true
      },
      {
        title: 'Use of Information',
        content: [
          'Your information will be used to manage your participation in the event.',
          'Send you relevant information and reminders.',
          'Notify you about changes, updates, or upcoming events.'
        ],
        list: true
      }
    ]
  }
};

export default function TermsAndConditions() {
  const [lang, setLang] = useState<Lang>(ES);
  const data = content[lang];

  return (
    <section className="bg-dark-bg text-white px-6 py-12 max-w-5xl mx-auto leading-relaxed">
      <div className="flex justify-center mb-6">
        <button onClick={() => setLang(ES)} className={`mx-2 px-4 py-2 rounded ${lang === ES ? 'bg-white text-black' : 'bg-gray-700'}`}>Español</button>
        <button onClick={() => setLang(EN)} className={`mx-2 px-4 py-2 rounded ${lang === EN ? 'bg-white text-black' : 'bg-gray-700'}`}>English</button>
      </div>
      <h2 className="text-3xl font-bold mb-6 text-center">{data.title}</h2>
      {data.sections.map((sec, i) => (
        <article key={i} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{sec.title}</h3>
          {sec.list ? (
            <ul className="list-disc list-inside mb-2 space-y-1">
              {sec.content.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          ) : (
            sec.content.map((paragraph, j) => (
              <p key={j} className="mb-2">{paragraph}</p>
            ))
          )}
        </article>
      ))}
    </section>
  );
}
