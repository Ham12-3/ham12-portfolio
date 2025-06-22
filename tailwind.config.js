/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ed',
          100: '#fdecd3',
          200: '#fbd5a5',
          300: '#f8b86d',
          400: '#f59132',
          500: '#f2720c',
          600: '#e35507',
          700: '#bc3a08',
          800: '#962f0e',
          900: '#78280f',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        luxury: {
          gold: '#D4AF37',
          bronze: '#CD7F32',
          platinum: '#E5E4E2',
          dark: '#0A0A0A',
          darkGray: '#1A1A1A',
          lightGray: '#2A2A2A',
        }
      },
      fontFamily: {
        'luxury': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, #D4AF37 0%, #CD7F32 50%, #B8860B 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2A2A2A 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px #D4AF37' },
          'to': { boxShadow: '0 0 30px #D4AF37, 0 0 40px #D4AF37' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
