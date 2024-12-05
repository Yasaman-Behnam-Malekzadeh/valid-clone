/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myLightGreen: "#cdffcd",
        myMediumGreen:"#1fff03",
        myMediumDarkGreen:"#073e30",
        myDarkGreen:"#05231e"
      },
    },
  },
  plugins: [],
};
