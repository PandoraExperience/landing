'use client';

import React, { useState } from 'react';
import TermsModal from './TermsModal';
import PaymentDetails from './PaymentDetails';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './phone-input.css';
import WompiButton from './PaymentWompi';

// Form field component
const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  required = true
}: {
  label: string,
  type: string,
  name: string,
  placeholder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
  error: string | null,
  required?: boolean
}) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-white mb-2 text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-[#1D1616]/80 border ${error ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 appearance-none`}
          required={required}
        >
          <option value="" disabled>Selecciona una opción</option>
          {name === 'howDidYouHear' && (
            <>
              <option value="social-media">Redes Sociales</option>
              <option value="friend">Recomendación de un amigo</option>
              <option value="search">Buscador</option>
              <option value="event">Evento</option>
              <option value="other">Otro</option>
            </>
          )}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-[#1D1616]/80 border ${error ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300`}
          required={required}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const RegistrationForm = () => {
  // Reference for Wompi Payment
  const paymentReference = crypto.randomUUID();

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    phoneCountry: '+57', // Default to Colombia
    agreeToTerms: false
  });

  // Error state
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    fullName: null,
    email: null,
    phone: null,
    agreeToTerms: null
  });

  // UI state
  const [showPayment, setShowPayment] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Handle phone input changes
  const handlePhoneChange = (value: string | undefined) => {
    console.log(formData.phoneCountry);
    const phoneNumber = parsePhoneNumber(value || formData.phoneCountry);
    setFormData({
      ...formData,
      phone: value || '',
      phoneCountry: phoneNumber ? `+${phoneNumber.countryCallingCode}` : formData.phoneCountry
    });

    // Clear error when field is edited
    if (errors.phone) {
      setErrors({
        ...errors,
        phone: null
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es requerido';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Dirección de email inválida';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
      isValid = false;
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Ingresa un número de teléfono completo (+57 300 1234567)';
      isValid = false;
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Debes aceptar los términos y condiciones';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (validateForm()) {
      setIsSubmitting(true);

      // Prepare data for storage
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        timestamp: new Date().toISOString(),
        source: 'landing-chakana'
      };

      // Initialize success flags
      let localSaveSuccess = false;
      let webhookSuccess = false;

      try {
        // 1. Try webhook first (but don't block on failure)
        try {
          const webhookResponse = await fetch('https://automan.apiflujos.com/webhook-test/f991b5cc-01dc-43fd-9ba1-25d78491994f', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          webhookSuccess = webhookResponse.ok;
          // Silently continue if webhook fails - don't block the user experience
        } catch (webhookError) {
          console.log('Webhook unavailable:', webhookError);
          // Continue with local storage even if webhook fails
        }

        // 2. Always save locally (critical path)
        const localResponse = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!localResponse.ok) {
          throw new Error('Error saving data locally');
        }

        localSaveSuccess = true;

        // If we got here, at least the local storage worked, so show success
        setShowPayment(true);
      } catch (error) {
        // Only show error if local storage failed (webhook failures don't block)
        if (!localSaveSuccess) {
          setSubmitError('Lo sentimos, ocurrió un error al guardar tus datos. Por favor contacta al +57 312 7811615 vía WhatsApp.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="reserva" className="relative py-24 px-4 overflow-hidden bg-[#1D1616] text-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,rgba(5,96,187,0.2)_0%,rgba(33,33,33,0)_70%)] animate-breathe opacity-90"></div>

      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#DC0073]/30 text-[#DC0073] text-lg font-bold tracking-widest shadow-[0_0_10px_rgba(220,0,115,0.3)]">
                EL PRIMER PASO HACIA TU TRANSFORMACIÓN
              </span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <div className="absolute -left-6 top-0 text-3xl text-[#DC0073]/70">"</div>
            <div className="absolute -right-6 bottom-0 text-3xl text-[#DC0073]/70">"</div>
            <p className="text-2xl md:text-3xl italic font-light px-8 text-gray-300">
              Las grandes transformaciones comienzan con un solo paso.
            </p>
          </div>

          {/* Main Title with glow effect */}
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#0560BB]/30 filter blur-[80px] rounded-full animate-breathe"></div>
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
              RESERVA TU CUPO AHORA
            </h2>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Para ser parte de experiencia, solo debes llenar el siguiente formulario, para separar tu cupo. Encontraras, los detalles de pago y nos pondremos en contacto contigo.
          </p>
        </div>

        {/* Benefit Boxes */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-[#111111] rounded-xl p-8">
            {/* 1. Garantía de Satisfacción */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0560BB]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Garantía de Satisfacción</h3>
                <p className="text-gray-400">Si no estás completamente satisfecho con la experiencia, te devolvemos el 100% de tu inversión</p>
              </div>
            </div>

            {/* 2. Bonos primeros valientes */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0560BB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Bonos primeros valientes</h3>
                <p className="text-gray-400">Si decides separar tu cupo con el 100%, premiamos tu valentía con sesión canalizada del oráculo donde tus guías espirituales te brindaran claridad.</p>
              </div>
            </div>

            {/* 3. Métodos de Pago Flexibles */}
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-white/5">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0560BB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Métodos de Pago Flexibles</h3>
                <p className="text-gray-400">Aceptamos múltiples formas de pago: Transferencia, Nequi, Daviplata o Tarjetas de crédito (Cargo del 4.5%).</p>
              </div>
            </div>

            {/* 4. Pago en 2 cuotas */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0560BB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Pago en 2 cuotas</h3>
                <p className="text-gray-400">Separa tu cupo ahora con el 50% y paga el restante faltando 8 días para el evento.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showPayment ? (
            // Registration Form
            <form onSubmit={handleSubmit} className="bg-[#111111] rounded-xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Información Personal
              </h2>

              <FormField
                label="Nombre completo"
                type="text"
                name="fullName"
                placeholder="Tu nombre completo"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
              />

              <FormField
                label="Email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              {/* Phone Input with custom styles */}
              <div className="mb-5">
                <label htmlFor="phone" className="block text-white mb-2 text-sm font-medium">
                  Teléfono <span className="text-primary">*</span>
                </label>
                <PhoneInput
                  displayInitialValueAsLocalNumber
                  defaultCountry="CO"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Tu número de teléfono"
                  className={`w-full transition-all duration-300 appearance-none`}
                  numberInputProps={{ className: `w-full px-4 py-3 rounded-lg bg-[#1D1616]/80 text-white placeholder-gray-500 border ${errors.phone ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 appearance-none` }}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>

              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 text-primary border-white/10 rounded focus:ring-primary focus:ring-offset-0 focus:ring-offset-transparent bg-[#1D1616]/80"
                  />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    Acepto los{' '}
                    <button
                      type="button"
                      onClick={() => setShowTermsModal(true)}
                      className="text-primary hover:text-primary/80 underline transition-colors"
                    >
                      términos y condiciones
                    </button>
                    {' '}y la política de privacidad
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
                )}
              </div>

              {submitError && (
                <div className="mb-4 p-3 bg-red-900/80 text-red-200 rounded text-center">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </div>
                ) : (
                  'Continuar con el pago'
                )}
              </button>
            </form>
          ) : (
            <>
              <PaymentDetails userName={formData.fullName.split(' ')[0]} />
              <WompiButton
                reference={paymentReference}
                email={formData.email}
                fullName={formData.fullName}
                phoneNumber={formData.phone}
                numberPrefix={formData.phoneCountry}
                className={"w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"}
                children="Pagar con Wompi (TDC / PSE)"
              />
            </>
          )}
        </div>
      </div>

      {/* Terms Modal */}
      <TermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
      />
    </section>
  );
};

export default RegistrationForm;