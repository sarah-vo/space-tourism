/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Bellefair', ...defaultTheme.fontFamily.sans]
      },
      spacing:{
        'mobile-header': '44px'
      },
      screens:{
        'mobile': '540px'
      }
    },
  },
  plugins: [],
}
