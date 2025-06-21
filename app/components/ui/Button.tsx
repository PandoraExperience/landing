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
  const baseClasses = 'disabled:opacity-50 disabled:pointer-events-none';

  // Variant styles

  const variantClasses = {
    default: 'bg-warm-orange hover:bg-warm-orange',
    secondary: 'bg-deep-blue hover:bg-deep-blue',
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
      className={buttonClasses + " relative px-8 py-5 text-lg font-bold bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] group-hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

// {/* CTA button with social proof element */}
//         <div className={`flex flex-col items-center transition-all duration-1000 delay-500 opacity-100 translate-y-0`}>
//           {/* Enhanced CTA with improved visibility and contrast */}
//           <div className="relative mt-16 group">
//             {/* Animated glow effect */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full opacity-80 blur-md animate-pulse group-hover:opacity-100"></div>

//             {/* Button with white background for high contrast */}
//             <button
//               onClick={() => scrollToSection(CTA_SECTION_ID)}
//               className="relative px-8 py-5 text-lg font-bold bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(5,96,187,0.5)] group-hover:shadow-[0_0_25px_rgba(5,96,187,0.8)]"
//             >
//               LLENAR EL FORMULARIO
//             </button>
//           </div>
//         </div>