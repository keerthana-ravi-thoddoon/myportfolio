/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        /* switched from teal to cool blue */
        secondary: '#0ea5e9',
        accent: '#0284c7',
        textPrimary: '#F8FAFC',
        textSecondary: '#94A3B8',
        accent2: '#0369a1',
      },
    },
  },
  plugins: [],
}

