/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5F5F5',
        secondary: '#333333',
        accent: '#666666',
        textPrimary: '#333333',
        textSecondary: '#666666',
        lightBg: '#F5F5F5',
        darkBg: '#1A1A1A',
        softWhite: '#F8F8F8',
      },
    },
  },
  plugins: [],
}

