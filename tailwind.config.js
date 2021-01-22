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
      red: colors.rose,
      yellow: colors.amber,
      nn: {
        lightest: '#f9fafc',
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
        darkest: '#1f2d3d',
        500: '#ff49db'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
