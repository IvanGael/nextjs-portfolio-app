const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...fontFamily.sans],
      },
      colors: {
        primary: '#01A7F3',
        secondary: '#F62992',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },

  },
  variants: {
    typography: ["light"],
  },
  plugins: [require("@tailwindcss/typography")],
};
