const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: colors.stone[100],
        secondary: colors.sky[700],
        accent: colors.orange[500],
      },
    },
  },
  plugins: [],
};
