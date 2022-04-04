const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  colors: {...colors },
  theme: {
    extend: {},
    colors: {
      selected: '#6ecbb8',
    }
  },
  plugins: [],
}
