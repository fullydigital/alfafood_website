/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '100': '300px',
        '200': '400px',
        '225': '420px',
        '250': '500px',
        '300': '600px',
        '400': '800px',
        '500': '1200px'
      },
      borderRadius: {
        '200': '400px'
      },
      grayscale: {
        '50': '70%'
      }
    },
  },
  plugins: [],
});

