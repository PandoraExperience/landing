'use client';

import React, { useState } from 'react';
import { experience, mailerLite, whatsappContact } from '@/app/variables';
import TermsModal from '../TermsModal';
import PaymentDetails from './PaymentDetails';
import WompiButton from '../../ui/Wompi-button';
import FormField from './FormField';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import MailerLite, { CreateOrUpdateSubscriberParams } from '@mailerlite/mailerlite-nodejs';
import { AxiosError } from 'axios';
import 'react-phone-number-input/style.css';
import './phone-input.css';
import { formatDateToMailerLite } from '@/app/lib/utils';
import { useRouter } from 'next/navigation';

const FormSection = () => {
  const router = useRouter();

  // Reference for Wompi Payment
  const paymentReference = `${experience.reference}-${crypto.randomUUID()}`;

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
      try {
        // 1. Save to MailerLite, ref: github.com/mailerlite/mailerlite-nodejs/blob/main/src/modules/subscribers/README.md
        const params: CreateOrUpdateSubscriberParams = {
          email: formData.email,
          fields: {
            name: formData.fullName.split(' ')[0],
            last_name: formData.fullName.split(' ').length > 1 ? formData.fullName.split(' ')[1] : '',
            company: "Pandora Experience",
            phone: formData.phone,
            country: parsePhoneNumber(formData.phone)?.country,
          },
          groups: [mailerLite.groupID],
          status: "active",
          subscribed_at: formatDateToMailerLite(),
          opted_in_at: formatDateToMailerLite(),
        };

        new MailerLite({
          api_key: mailerLite.apiKey || ""
        }).subscribers.createOrUpdate(params)
          .catch((error: AxiosError) => {
            if (error.response) console.error(error.response.data);
          });

        // 2. Try webhook (but don't block on failure)
        fetch('https://automan.apiflujos.com/webhook-test/f991b5cc-01dc-43fd-9ba1-25d78491994f', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch((webhookError) => {
          // Silently continue if webhook fails - don't block the user experience
          console.warn('Webhook unavailable:', webhookError);
        });

        // 3. Try save locally
        const localResponse = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!localResponse.ok) {
          console.error('Error saving data locally:', localResponse.body);
          // throw new Error('Error saving data locally');
        } else {
          localSaveSuccess = true;
        }

        // Advance to payment without blocking
        router.push('/thankyou');
        // setShowPayment(true);
      } catch (error) {
        // Only show error if local storage failed (webhook failures don't block)
        if (!localSaveSuccess) {
          setSubmitError(
            `Lo sentimos, ocurrió un error al guardar tus datos. Por favor contacta al ${whatsappContact} ` +
            "a través del botón de WhatsApp que se encuentra en la parte inferior derecha de la pantalla.");
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (<>
    {/* Terms Modal */}
    <TermsModal
      isOpen={showTermsModal}
      onClose={() => setShowTermsModal(false)}
    />
    <div id="registration-form" className="max-w-2xl mx-auto mb-5 text-left">
      {!showPayment ? (
        // Registration Form
        <form onSubmit={handleSubmit} className="bg-[#111111] rounded-xl p-8">

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
              numberInputProps={{ className: `w-full px-4 py-3 rounded-lg bg-dark-bg/80 text-white placeholder-gray-500 border ${errors.phone ? 'border-red-500' : 'border-white/10'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 appearance-none` }}
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
                className="mt-1 text-primary border-white/10 rounded focus:ring-primary focus:ring-offset-0 focus:ring-offset-transparent bg-dark-bg/80"
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
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors"
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
              'RESERVA TU CUPO'
            )}
          </button>
        </form>
      ) : (
        <>
          {/* <PaymentDetails userName={formData.fullName.split(' ')[0]} reference={formData.email} /> */}
          {/* <WompiButton
            reference={paymentReference}
            email={formData.email}
            fullName={formData.fullName}
            phoneNumber={formData.phone}
            numberPrefix={formData.phoneCountry}
            className={"w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"}
            children="Pagar con Wompi (TDC / PSE)"
          /> */}
        </>
      )}
    </div>
  </>
  );
};

export default FormSection;