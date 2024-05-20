/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: colors.gray,
      primary: colors.indigo,
      secondary: colors.teal,
      success: colors.green,
      danger: colors.red,
      warning: colors.yellow,
      info: colors.blue,
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [],
}

