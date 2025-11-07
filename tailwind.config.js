/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-default': '#414141',
        'orange-default': '#FF963C',
        'yellow-default': '#FFCC21',
      },
      maxWidth: {
        container: '960px',
      },
    },
    screens: {},
  },
  plugins: [],
};
