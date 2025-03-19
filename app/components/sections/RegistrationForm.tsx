'use client';

import React, { useState, useEffect, useRef } from 'react';

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
        {label} {required && <span className="text-[#DC0073]">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className={`w-full px-4 py-3 rounded-lg bg-[#1D1616]/80 border ${error ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DC0073]/50 focus:border-transparent transition-all duration-300`}
          required={required}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-[#1D1616]/80 border ${error ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DC0073]/50 focus:border-transparent transition-all duration-300 appearance-none`}
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
          className={`w-full px-4 py-3 rounded-lg bg-[#1D1616]/80 border ${error ? 'border-red-500' : 'border-white/10'} text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DC0073]/50 focus:border-transparent transition-all duration-300`}
          required={required}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Form progress component
const FormProgress = ({ currentStep, totalSteps }: { currentStep: number, totalSteps: number }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">Paso {currentStep} de {totalSteps}</span>
        <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% completado</span>
      </div>
      <div className="w-full h-2 bg-[#1D1616]/80 rounded-full overflow-hidden border border-white/5">
        <div 
          className="h-full bg-gradient-to-r from-[#DC0073]/80 to-[#DC0073] transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const RegistrationForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    howDidYouHear: '',
    message: '',
    agreeToTerms: false
  });
  
  // Error state
  const [errors, setErrors] = useState<{[key: string]: string | null}>({
    fullName: null,
    email: null,
    phone: null,
    age: null,
    city: null,
    howDidYouHear: null,
    message: null,
    agreeToTerms: null
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Intersection Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
  
  // Validate form fields
  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;
    
    // Validation for step 1
    if (currentStep === 1) {
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
      }
    }
    
    // Validation for step 2
    if (currentStep === 2) {
      if (!formData.age.trim()) {
        newErrors.age = 'La edad es requerida';
        isValid = false;
      } else if (isNaN(Number(formData.age)) || Number(formData.age) < 18) {
        newErrors.age = 'Debes ser mayor de 18 años';
        isValid = false;
      }
      
      if (!formData.city.trim()) {
        newErrors.city = 'La ciudad es requerida';
        isValid = false;
      }
      
      if (!formData.howDidYouHear) {
        newErrors.howDidYouHear = 'Por favor selecciona una opción';
        isValid = false;
      }
    }
    
    // Validation for step 3
    if (currentStep === 3) {
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'Debes aceptar los términos y condiciones';
        isValid = false;
      }
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Handle next step
  const handleNextStep = () => {
    if (validateForm()) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };
  
  // Handle previous step
  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
    setIsSubmitting(true);
    
      try {
    // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Reset form and show success message
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
      setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="registro"
      ref={sectionRef}
      className="relative py-24 px-4 overflow-hidden bg-[#1D1616] text-white"
    >
      {/* Background Elements - Enhanced with breathing/pulsating background gradients */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(220,0,115,0.2)_0%,rgba(33,33,33,0)_70%)] animate-breathe opacity-90"></div>
      
      {/* Parallax background elements - more pronounced glow */}
      <div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#DC0073]/20 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * -0.3}px, ${parallaxOffset.y * -0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#DC0073]/15 filter blur-3xl animate-breathe"
        style={{ transform: `translate(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px)`, animationDelay: '2.5s' }}
      ></div>
      
      {/* Very subtle light streaks */}
      <div className="absolute w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5 -rotate-12 transform animate-pulse-slow"></div>
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-white/5 rotate-6 transform animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Decorative top element */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <span className="inline-block px-4 py-1 rounded-full bg-gray-900/30 backdrop-blur-sm border border-white/10 text-[#DC0073] text-sm font-medium tracking-wider">
                EL PRIMER PASO HACIA TU TRANSFORMACIÓN
              </span>
            </div>
          </div>

          {/* Main Title with glow effect */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-[#DC0073]/30 filter blur-[80px] rounded-full animate-breathe"></div>
            
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
              Reserva Tu Espacio Ahora
        </h2>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Inicia tu camino hacia la transformación personal completando el siguiente formulario. 
            ¡Te contactaremos a la brevedad!
          </p>
        </div>

        {/* Form Container */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {!isSubmitted ? (
            <div className="bg-[#1D1616]/70 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-[0_0_25px_rgba(220,0,115,0.15)]">
              <FormProgress currentStep={currentStep} totalSteps={totalSteps} />
              
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white mb-6">Información Personal</h3>
                    <FormField
                      label="Nombre Completo"
                type="text"
                      name="fullName"
                      placeholder="Tu nombre completo"
                      value={formData.fullName}
                      onChange={handleChange}
                      error={errors.fullName}
                    />
                    <FormField
                      label="Correo Electrónico"
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                onChange={handleChange}
                      error={errors.email}
                    />
                    <FormField
                      label="Teléfono"
                type="tel"
                name="phone"
                      placeholder="Tu número de teléfono"
                value={formData.phone}
                onChange={handleChange}
                      error={errors.phone}
              />
            </div>
                )}
                
                {/* Step 2: Additional Information */}
                {currentStep === 2 && (
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white mb-6">Detalles Adicionales</h3>
                    <FormField
                      label="Edad"
                      type="number"
                      name="age"
                      placeholder="Tu edad"
                      value={formData.age}
                      onChange={handleChange}
                      error={errors.age}
                    />
                    <FormField
                      label="Ciudad"
                      type="text"
                      name="city"
                      placeholder="¿Dónde vives?"
                      value={formData.city}
                      onChange={handleChange}
                      error={errors.city}
                    />
                    <FormField
                      label="¿Cómo te enteraste de nosotros?"
                      type="select"
                      name="howDidYouHear"
                      placeholder=""
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      error={errors.howDidYouHear}
                    />
                    <FormField
                      label="Mensaje (opcional)"
                      type="textarea"
                      name="message"
                      placeholder="¿Hay algo más que nos quieras contar?"
                      value={formData.message}
                onChange={handleChange}
                      error={errors.message}
                      required={false}
              />
            </div>
                )}
                
                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Confirma tu reserva</h3>
                    
                    <div className="bg-[#1D1616]/90 rounded-xl p-6 border border-white/10">
                      <h4 className="font-semibold text-[#DC0073] mb-4">Resumen de tu información</h4>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Nombre:</span>
                          <span className="text-white font-medium">{formData.fullName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Email:</span>
                          <span className="text-white font-medium">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Teléfono:</span>
                          <span className="text-white font-medium">{formData.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Edad:</span>
                          <span className="text-white font-medium">{formData.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Ciudad:</span>
                          <span className="text-white font-medium">{formData.city}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-400 mb-3">
                        Al confirmar, nos pondremos en contacto contigo para coordinar los detalles de pago y reserva.
                      </p>
                      
                      <div className="flex items-start mb-3">
                        <input
                          type="checkbox"
                          id="agreeToTerms"
                          name="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 text-[#DC0073] focus:ring-[#DC0073] border-gray-600 rounded bg-[#1D1616]"
                        />
                        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-300">
                          Acepto los <a href="#" className="text-[#DC0073] hover:underline">términos y condiciones</a> y la <a href="#" className="text-[#DC0073] hover:underline">política de privacidad</a>
              </label>
                      </div>
                      {errors.agreeToTerms && (
                        <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
                      )}
                    </div>
            </div>
                )}
                
                {/* Form Navigation Buttons */}
                <div className="flex justify-between mt-10">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-3 bg-[#1D1616]/90 hover:bg-[#1D1616] border border-white/10 rounded-lg text-white transition-colors duration-300"
                    >
                      Anterior
                    </button>
                  ) : (
                    <div></div> // Empty div to maintain flex spacing
                  )}
                  
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-3 bg-[#DC0073]/90 hover:bg-[#DC0073] rounded-lg text-white transition-colors duration-300 shadow-[0_0_15px_rgba(220,0,115,0.3)]"
                    >
                      Siguiente
                    </button>
                  ) : (
            <button
              type="submit"
              disabled={isSubmitting}
                      className="relative px-8 py-3 bg-white hover:bg-[#DC0073] text-[#DC0073] hover:text-white border-2 border-[#DC0073] rounded-lg font-medium transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(220,0,115,0.3)]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="opacity-0">Confirmar Reserva</span>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 text-[#DC0073]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </div>
                        </>
                      ) : "Confirmar Reserva"}
            </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            // Success message after submission
            <div className="bg-[#1D1616]/70 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-[0_0_25px_rgba(220,0,115,0.15)] text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DC0073]/20 mb-6 shadow-[0_0_15px_rgba(220,0,115,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DC0073]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">¡Reserva Recibida!</h3>
              
              <p className="text-gray-300 mb-8">
                Gracias por completar el formulario, {formData.fullName}. Hemos recibido tu solicitud de reserva 
                y nos pondremos en contacto contigo a través de {formData.email} o {formData.phone} 
                para coordinar los detalles de pago y confirmar tu lugar.
              </p>
              
              <div className="p-5 bg-[#1D1616]/90 rounded-xl mb-8 border border-white/10">
                <p className="text-white font-medium">¿Qué sigue?</p>
                <ol className="text-left text-gray-300 mt-3 space-y-2 pl-5 list-decimal">
                  <li>Recibirás un correo de confirmación en breve</li>
                  <li>Te contactaremos para procesar el pago</li>
                  <li>Te enviaremos toda la información para prepararte</li>
                  <li>¡Nos vemos en la experiencia transformadora!</li>
                </ol>
              </div>
              
              <div className="flex justify-center">
                <button
                  className="relative px-10 py-6 text-lg font-bold uppercase tracking-wider bg-white text-[#DC0073] hover:text-white hover:bg-[#DC0073] border-2 border-[#DC0073] rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(220,0,115,0.5)] hover:shadow-[0_0_25px_rgba(220,0,115,0.8)]"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Volver al inicio
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm; 