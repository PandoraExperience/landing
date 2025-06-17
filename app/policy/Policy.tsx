'use client';
import React, { useState } from 'react';
import { policy } from '@/app/variables';

type Lang = 'es' | 'en';
const EN: Lang = 'en', ES: Lang = 'es';

export default function Policy() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
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
            <ul className="list-disc list-inside mb-2">
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
      <p className="mb-4 italic text-center">{data.updated}</p>
    </section>
  );
};

const content = {
  es: {
    title: 'Política de Privacidad',
    updated: `Última actualización: ${policy.date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}`,
    sections: [
      {
        title: '1. Recopilación de Datos',
        content: [
          'Al registrarte en nuestro sitio, recopilamos tu nombre, correo electrónico y número de teléfono. También usamos cookies y herramientas como Google Analytics, Facebook Pixel y Hotjar para entender cómo interactúas con nuestro sitio.'
        ]
      },
      {
        title: '2. Uso de Datos',
        content: [
          'Mejorar nuestros servicios y comunicación',
          'Mostrar anuncios personalizados',
          'Realizar análisis y métricas',
          'Los datos no se venden ni comparten fuera de lo necesario para estos fines.'
        ],
        list: true
      },
      {
        title: '3. Cookies y Seguimiento',
        content: [
          'Usamos cookies propias y de terceros para análisis y marketing. Puedes rechazar estas cookies modificando la configuración de tu navegador.'
        ]
      },
      {
        title: '4. Herramientas de Terceros',
        content: [
          'Google Analytics: recopila datos de uso y comportamiento',
          'Facebook Pixel: permite mostrarte anuncios personalizados',
          'Hotjar: analiza la interacción del usuario en el sitio'
        ],
        list: true
      },
      {
        title: '5. Derechos del Usuario',
        content: [
          'Tienes derecho a acceder, modificar o eliminar tus datos, y a oponerte al tratamiento en cualquier momento.'
        ]
      },
      {
        title: '6. Consentimiento y Opt-Out',
        content: [
          'Puedes retirar tu consentimiento para cookies y marketing ajustando tu navegador o preferencias en plataformas como Facebook y Google.'
        ]
      },
      {
        title: '7. Contacto',
        content: [
          <span>Para ejercer tus derechos o hacer consultas,
            contáctanos a <a href={`mailto:${policy.email}`} className="text-blue-600 underline">{policy.email}</a>
          </span>
        ]
      }
    ]
  },
  en: {
    title: 'Privacy Policy',
    updated: `Last updated: ${policy.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
    sections: [
      {
        title: '1. Data Collection',
        content: [
          'When you register on our site, we collect your name, email, and phone number. We also use cookies and tools like Google Analytics, Facebook Pixel, and Hotjar to understand how you interact with our website.'
        ]
      },
      {
        title: '2. Data Use',
        content: [
          'Improve services and communication',
          'Show personalized ads',
          'Perform analytics and metrics',
          'Data is not sold or shared beyond what is necessary for these purposes.'
        ],
        list: true
      },
      {
        title: '3. Cookies and Tracking',
        content: [
          'We use first-party and third-party cookies for analytics and marketing. You can reject these cookies by adjusting your browser settings.'
        ]
      },
      {
        title: '4. Third-Party Tools',
        content: [
          'Google Analytics: collects usage and behavior data',
          'Facebook Pixel: allows personalized ad targeting',
          'Hotjar: analyzes user interaction on the site'
        ],
        list: true
      },
      {
        title: '5. User Rights',
        content: [
          'You have the right to access, modify or delete your data, and to object to processing at any time.'
        ]
      },
      {
        title: '6. Consent and Opt-Out',
        content: [
          'You can withdraw your consent for cookies and marketing by adjusting your browser or preferences on platforms like Facebook and Google.'
        ]
      },
      {
        title: '7. Contact',
        content: [
          <span>To exercise your rights or ask questions,
            contact us at <a href={`mailto:${policy.email}`} className="text-blue-600 underline">{policy.email}</a>
          </span>
        ]
      }
    ]
  }
};