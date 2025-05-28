'use client';

import React from 'react';

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
          autoComplete='on'
          required={required}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;
