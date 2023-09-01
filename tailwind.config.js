const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: colors.stone[100],
        secondary: colors.indigo[500],
        accent: colors.indigo[800],
      },
    },
  },
  plugins: [],
};
