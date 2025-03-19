/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#DC0073', // Using the pink color as primary for the components
        'deep-blue': '#003366', // Represents calm, resilience, and clarity
        'ice-white': '#F5F9FF', // Evokes the purity and freshness of ice
        'warm-orange': '#FF6F3C', // Adds energy, urgency, and emotional warmth
        
        // Secondary Colors
        'forest-green': '#2E8B57', // Reflects the natural environment and growth
        'light-gray': '#E5E5E5', // Neutral tone for backgrounds and text
        
        // Accent Colors
        'gold': '#FFD700', // Symbolizes transformation and value
        'crimson': '#DC143C', // Adds emotional intensity and urgency
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
          '100%': { backgroundPosition: '100% 100%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(-12deg)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '50%': { transform: 'translateX(0%) skewX(-12deg)', opacity: '0.5' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translateX(150%) skewX(-12deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} 