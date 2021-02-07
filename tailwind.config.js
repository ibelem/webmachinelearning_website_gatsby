const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.amber,
      purple: colors.purple,
      pink: colors.pink,
      nn: {
        bg: '#0f2557'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
