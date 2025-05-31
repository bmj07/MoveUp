/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0A0C10',
        'dark-light': '#111318',
        'dark-lighter': '#1A1D25',
        primary: '#0042B3',
        'primary-light': '#056CF2',
        'primary-dark': '#001F54',
        'primary-neon': '#00F0FF'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
 