const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: colors.stone[100],
        secondary: colors.blue[900],
        accent: colors.teal[800],
      },
    },
  },
  plugins: [],
};
