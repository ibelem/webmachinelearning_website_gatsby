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
        t1a: '#fc8777',
        t1b: '#ffd42b',
        t1c: '#3abca3',
        t2a: '#f76c6c',
        t2b: '#f8e9a1',
        t20: '#24305e',
        t21: '#374785',
        t22: '#a8d0e6',
        tgray1: '#474c58',
        tgray2: '#d0d8e5',
        bgd1: '#3f69b8',
        bgd2: '#4873c2',
        bgd3: '#5eb4fe',
        bgd4: '#62d3fd',
        bgg1: '#f2f5fb',
        bgg2: '#ffffff',
        bgg3: '#f8f9ff',
        svgb: '#A7E0E7'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
