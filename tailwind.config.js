/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/app/*.{js,jsx,ts,tsx,css}"],
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
  },
  future: {
  },
  plugins: [],
};
