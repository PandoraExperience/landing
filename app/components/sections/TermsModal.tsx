import React from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1D1616] rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-white">Términos y Condiciones</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="space-y-4 text-gray-300">
            <h3 className="text-xl text-white font-medium">Política de Privacidad</h3>
            <p>
              Al registrarte, aceptas que MUNAY-KI recopile y procese tu información personal de acuerdo con nuestra política de privacidad.
            </p>
            
            <h3 className="text-xl text-white font-medium mt-6">Política de Cancelación</h3>
            <p>
              - Las cancelaciones realizadas con más de 7 días de anticipación recibirán un reembolso completo.
              - Las cancelaciones dentro de los 7 días previos al evento recibirán un reembolso del 50%.
              - No hay reembolsos para cancelaciones dentro de las 48 horas previas al evento.
            </p>
            
            <h3 className="text-xl text-white font-medium mt-6">Términos del Evento</h3>
            <p>
              - La reserva se confirma únicamente después de recibir el pago completo.
              - MUNAY-KI se reserva el derecho de modificar el programa si las circunstancias lo requieren.
              - Los participantes deben tener al menos 18 años de edad.
            </p>
            
            <h3 className="text-xl text-white font-medium mt-6">Uso de la Información</h3>
            <p>
              Tu información será utilizada exclusivamente para:
              - Gestionar tu reserva y participación en el evento
              - Enviarte información relevante sobre el evento
              - Contactarte en caso de cambios o actualizaciones importantes
            </p>
          </div>
        </div>
        
        <div className="p-6 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Entiendo y Acepto
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal; 