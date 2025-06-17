'use client';

import React from 'react';


const Footer = () => {

  return (
    <footer className="relative bg-dark-bg text-white p-4 overflow-hidden">

      <div className="container mx-auto relative">
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Una experiencia transformadora de inmersión en hielo para conectar con tu fuerza interior.
          </p>
          <div className="w-20 h-1 bg-[#DC0073]/80 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Este sitio NO es parte de Facebook o Facebook Inc. Además, este sitio no ha sido endorsado por Facebook. FACEBOOK es una marca registrada de META, Inc.
          </p>
          <br />
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Pandora Experience. Todos los derechos reservados. <a href="/terms">Terms and Conditions</a> | <a href="/policy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 