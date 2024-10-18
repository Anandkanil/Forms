/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Condensed"', 'sans-serif'] // Use the font here
      },
      boxShadow: {
        'custom': '0px 5px 55px rgba(96, 165, 250, 0.35)', // Custom shadow
      },
    },
  },
  plugins: [],
}

