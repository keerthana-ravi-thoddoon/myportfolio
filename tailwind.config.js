/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#14B8A6',
        accent: '#0D9488',
        textPrimary: '#F8FAFC',
        textSecondary: '#94A3B8',
        accent2: '#0F766E',
      },
    },
  },
  plugins: [],
}

