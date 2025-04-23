/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#0560BB', // Main blue color from the design
        'primary-dark': '#003366', // Darker blue for depth
        'primary-light': '#3B82F6', // Lighter blue for accents
        'ice-white': '#F5F9FF', // Light background
        
        // Secondary Colors
        'dark-bg': '#1D1616', // Dark background color
        'light-gray': '#E5E5E5', // Neutral tone for text
        'text-light': '#94A3B8', // Light text color
        
        // Accent Colors
        'accent-blue': '#60A5FA', // Bright blue for highlights
        'accent-purple': '#818CF8', // Purple accent for variety
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'rainbow': 'rainbow 4s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathe': 'breathe 5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'flow': 'flow 20s linear infinite',
        'shimmer': 'shimmer 12s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-glow': 'text-glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        rainbow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.1)', opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '400% 0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'text-glow': {
          '0%': { 
            textShadow: '0 0 5px rgba(5, 96, 187, 0.5), 0 0 10px rgba(5, 96, 187, 0.3)', 
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 10px rgba(5, 96, 187, 0.8), 0 0 20px rgba(5, 96, 187, 0.5), 0 0 30px rgba(5, 96, 187, 0.3)', 
            filter: 'brightness(1.2)'
          },
        }
      }
    },
  },
  plugins: [],
} 