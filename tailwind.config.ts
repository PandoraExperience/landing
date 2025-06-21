import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        'ice-white': 'var(--ice-white)',

        // Secondary Colors
        'dark-bg': 'var(--dark-bg)',
        'light-gray': 'var(--light-gray)',
        'text-light': 'var(--text-light)',

        // Accent Colors
        'accent-blue': 'var(--accent-blue)',
        'accent-purple': 'var(--accent-purple)',
        'accent-red': 'var(--accent-red)',
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

export default config;
