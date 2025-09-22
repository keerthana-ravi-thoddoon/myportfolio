/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#7E22CE',
        accent: '#2563EB',
        textPrimary: '#F8FAFC',
        textSecondary: '#94A3B8',
        accent2: '#4F46E5',
      },
    },
  },
  plugins: [],
}

