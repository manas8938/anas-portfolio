// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        card: '#111111',
        primary: '#a855f7',
        secondary: '#06b6d4',
      },
      boxShadow: {
        'neon': '0 0 30px rgba(168, 85, 247, 0.5)',
        'neon-cyan': '0 0 30px rgba(6, 182, 212, 0.5)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}