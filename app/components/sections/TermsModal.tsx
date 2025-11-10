import React from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-dark-bg rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              📜 Términos y Condiciones de Participación
            </h2>
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
              Al registrarte, autorizas a PANDORA EXPERIENCE a recopilar y procesar tu información personal de acuerdo con nuestra política de privacidad.
              Esta información se utilizará únicamente para gestionar tu reserva, enviarte comunicaciones importantes y mantenerte informado sobre el evento.
            </p>

            <h3 className="text-xl text-white font-medium mt-6">Política de Cancelación</h3>
            <p>
              En caso de fuerza mayor, podrás reagendar tu participación con 48 horas de antelación para una futura edición
              o transferir tu cupo a otra persona.
            </p><p>
              No realizamos reembolso bajo ninguna circunstancia.
            </p><p>
              No hay re-agendamiento para cancelaciones dentro de las 48 horas previas al evento.
            </p>

            <h3 className="text-xl text-white font-medium mt-6">Términos del Evento</h3>
            <p>
              La reserva de tu cupo se confirma únicamente tras recibir el pago completo
              (o en su defecto, el pago del 50% y no tener saldo pendiente antes de la fecha límite indicada).
            </p><p>
              PANDORA EXPERIENCE se reserva el derecho de realizar ajustes en el programa si las circunstancias lo requieren,
              garantizando siempre la integridad de la experiencia.
            </p><p>
              La participación está limitada a personas mayores de 18 años.
              (Menores de edad deben ser acompañados por su representante legal).
            </p><p>
              Nos reservamos el derecho de admisión, considerando las condiciones médicas de cada
              participante para garantizar una experiencia segura, consciente y responsable.
            </p>

            <h3 className="text-xl text-white font-medium mt-6">Uso de la Información</h3>
            <p>
              Tu información será utilizada exclusivamente para:
            </p><p>
              - Gestionar tu participación en el evento.
            </p><p>
              - Enviarte información relevante y recordatorios.
            </p><p>
              - Notificarte sobre cambios, actualizaciones o próximos eventos.
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