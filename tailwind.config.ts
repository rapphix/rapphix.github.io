import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        accent: '#3b82f6',
        'accent-dark': '#1e40af',
        'accent-light': '#60a5fa',
        'neon-cyan': '#00f0ff',
        'neon-purple': '#c084fc',
        'neon-pink': '#ec4899',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh': 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-slow': 'bounce 4s infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float-rotate': 'floatRotate 6s linear infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        floatRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5), inset 0 0 5px rgba(59, 130, 246, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 1), inset 0 0 10px rgba(59, 130, 246, 0.4)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
