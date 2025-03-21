import React from 'react';
import Image from 'next/image';

interface PaymentDetailsProps {
  userName: string;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ userName }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#1D1616] rounded-xl p-8">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¡Gracias {userName}!
        </h2>
        <p className="text-gray-300">
          Estás a un paso de comenzar tu viaje de transformación con MUNAY-KI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Payment Methods */}
        <div className="space-y-6">
          <div className="bg-[#111111] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">BANCOLOMBIA</h3>
            <div className="space-y-2 text-gray-300">
              <p>Cuenta de ahorros #</p>
              <p className="text-white font-medium">2231120570</p>
              <p>MUNAY-KI</p>
              <p>CC. 1016060350</p>
            </div>
          </div>

          <div className="bg-[#111111] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">NEQUI/DAVIPLATA</h3>
            <p className="text-white font-medium">3165137110</p>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center justify-center bg-[#111111] rounded-lg p-6">
          <div className="relative w-48 h-48">
            <Image
              src="/images/payment-qr.png"
              alt="QR de pago Bancolombia"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-300 mt-4 text-center">QR de pago Bancolombia</p>
        </div>
      </div>

      {/* Contact Message */}
      <div className="mt-8 text-center text-gray-300">
        <p>Al confirmar tu pago, nos pondremos en contacto contigo para coordinar los detalles de tu reserva.</p>
      </div>
    </div>
  );
};

export default PaymentDetails; 