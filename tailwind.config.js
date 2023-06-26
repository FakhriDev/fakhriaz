/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Yantramanav'],
    },
    colors: {
      color1: '#B1B8C2',
      color2: '#ECEFF1',
      title1: '#ffffff',
      text1: '#ffffff',
      black: '#1C1D20',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
