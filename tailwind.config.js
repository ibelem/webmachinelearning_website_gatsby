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
        t1: '#4777c0',
        t2: '#61bafb',
        tgray1: '#474c58',
        tgray2: '#d0d8e5',
        bgd1: '#3f69b8',
        bgd2: '#4873c2',
        bgd3: '#5eb4fe',
        bgd4: '#62d3fd',
        bgg1: '#f2f5fb',
        bgg2: '#ffffff',
        bgg3: '#f8f9ff'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
