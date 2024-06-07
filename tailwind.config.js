/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "calorie-main": "#2596be",
        "calorie-orange": "#fdc472",
        "calorie-salmon": "#f98072",
        "calorie-pink": "#fcc2bb",
        "calorie-navy": "#326aa1",
      },
    },
  },

  plugins: [],
};
