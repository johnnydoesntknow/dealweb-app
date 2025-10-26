/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dealix: {
          'electric-green': '#24E055',
          'bright-lime': '#66FF75',
          'aqua-green': '#38FF11',
          'cyan-glow': '#38FF11',
          'deep-teal': '#00688A',
          'charcoal': '#013E27',
        },
      },
      backgroundImage: {
        'dealix-gradient': 'linear-gradient(135deg, #24E055 0%, #66FF75 50%, #38FF11 100%)',
      },
    },
  },
  plugins: [],
}
