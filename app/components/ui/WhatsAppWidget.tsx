'use client';

import { whatsappContact } from '@/app/variables';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

// WhatsApp configuration
const WHATSAPP_NUMBER = whatsappContact.number;
const DEFAULT_MESSAGE = whatsappContact.message;

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse-slow"
        aria-label="Contactar por WhatsApp"
        title="¿Necesitas ayuda? Escríbenos por WhatsApp"
      >
        {/* Breathing glow effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-75 animate-breathe"></div>

        {/* WhatsApp Icon */}
        <FaWhatsapp
          className="relative z-10 w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform duration-300"
        />

        {/* Notification badge for attention */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-bounce">
          <div className="w-full h-full bg-primary rounded-full animate-ping"></div>
        </div>

        {/* Optional tooltip on hover (desktop only) */}
        <div className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 hidden md:block ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          ¿Necesitas ayuda?
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  );
} 