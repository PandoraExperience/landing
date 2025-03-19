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
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';
  
  // Variant styles
  const variantClasses = {
    default: 'bg-warm-orange text-white hover:bg-warm-orange/90',
    secondary: 'bg-deep-blue text-white hover:bg-deep-blue/90',
    outline: 'border border-gray-300 hover:bg-gray-100',
    ghost: 'hover:bg-gray-100',
    link: 'underline-offset-4 hover:underline text-deep-blue',
  };
  
  // Size styles
  const sizeClasses = {
    default: 'h-12 py-2 px-6',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-16 px-8 rounded-md text-lg',
    icon: 'h-10 w-10',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button }; 