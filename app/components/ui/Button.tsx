'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = ({
  className = '',
  variant = 'default',
  size = 'default',
  children,
  ...props
}: ButtonProps) => {
  // Basic style classes
  const baseClasses = 'relative font-bold hover:text-white transition-all duration-300';
  const disabledClasses = 'disabled:opacity-50 disabled:pointer-events-none';

  // Variant styles
  const variantClasses = {
    default: 'text-primary bg-white hover:bg-primary',
    secondary: 'text-white bg-primary-dark hover:bg-primary',
    outline: 'border border-white hover:bg-gray-100',
    ghost: 'bg-gray-500 hover:bg-gray-400',
    link: 'underline-offset-4 hover:underline text-white',
  };

  // Size styles
  const sizeClasses = {
    default: 'h-12 py-2 px-6',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-16 px-8 rounded-md text-lg',
    icon: 'h-10 w-10',
  };

  const buttonClasses = `${variantClasses[variant]} ${baseClasses} ${disabledClasses} ${sizeClasses[size]} ${className}`;

  return (
    <div className={`flex flex-col items-center`}>
      {/* Enhanced CTA with improved visibility and contrast */}
      <div className="relative mt-8 group">
        {/* Animated glow effect */}
        {variant !== 'ghost' && (
          <div className="absolute transition-all duration-300 -inset-3 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full opacity-40 blur-lg animate-pulse group-hover:opacity-70 group-hover:-inset-1"></div>
        )}
        {/* Button with white background for high contrast */}
        <button
          className={buttonClasses}
          {...props}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default Button;