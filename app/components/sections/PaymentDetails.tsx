import React from 'react';
import { formatNumber } from '@/app/lib/utils';
import { experience } from '@/app/variables';

interface PaymentDetailsProps {
  userName: string;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ userName }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#1D1616] rounded-xl p-8">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¡Vamos con toda!
        </h2>
        <p className="text-gray-300 mb-4">
          Qué alegría que te unas a esta bonita experiencia, {userName}. ¡Estoy feliz de acompañarte en este camino!
        </p>
        <p className="text-white font-medium">
          Para asegurar tu cupo, aquí tienes los datos de pago:
        </p>
      </div>

      <div className="bg-[#111111] rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <span className="mr-2">🏦</span> BANCOLOMBIA
        </h3>
        <div className="space-y-3 text-gray-300">
          <p className="flex items-center"><span className="mr-2 text-white">💳</span> Tipo de cuenta: <span className="ml-2 text-white font-medium">Ahorros</span></p>
          <p className="flex items-center"><span className="mr-2 text-white">🔢</span> Número de cuenta: <span className="ml-2 text-white font-medium">22311203570</span></p>
          <p className="flex items-center"><span className="mr-2 text-white">👤</span> Titular: <span className="ml-2 text-white font-medium">{experience.guide.name}</span></p>
          <p className="flex items-center"><span className="mr-2 text-white">🆔</span> Cédula: <span className="ml-2 text-white font-medium">{experience.guide.legalId}</span></p>
          <p className="flex items-center"><span className="mr-2 text-white">💵</span> Inversión: <span className="ml-2 text-white font-medium">${formatNumber(experience.price.amountInCents / 100)}</span></p>
        </div>
      </div>

      <div className="bg-[#111111] rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4">Otros medios de pago:</h3>
        <p className="flex items-center text-gray-300"><span className="mr-2 text-white">📱</span> Nequi / Daviplata: <span className="ml-2 text-white font-medium">{experience.guide.phoneNumber}</span></p>
      </div>

      {/* Contact Message */}
      <div className="mt-8 text-center text-gray-300">
        <p>Al confirmar tu pago, nos pondremos en contacto contigo para coordinar los detalles de tu reserva.</p>
      </div>
    </div>
  );
};

export default PaymentDetails; 