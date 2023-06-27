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
      gray: '#353535',
    },
    boxShadow: {
      great:
        '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
