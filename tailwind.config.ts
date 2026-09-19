import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kit: {
          'navy-dark':    '#001938',
          'navy':         '#002147',
          'navy-light':   '#003366',
          'gold':         '#fbba42',
          'gold-hover':   '#f39c12',
          'crimson':      '#d9251d',
          'crimson-dark': '#991b1b',
          'bg':           '#f8fafc',
          'bg-alt':       '#f1f5f9',
          'border':       '#e2e8f0',
          'body':         '#334155',
          'muted':        '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'kit-sm': '0 1px 2px 0 rgba(0,33,71,0.05)',
        'kit-md': '0 4px 6px -1px rgba(0,33,71,0.08)',
        'kit-lg': '0 10px 25px -5px rgba(0,33,71,0.12)',
        'kit-xl': '0 20px 35px -10px rgba(0,33,71,0.18)',
      },
      animation: {
        'ticker': 'ticker 50s linear infinite',
        'fade-in': 'fadeIn 0.35s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
