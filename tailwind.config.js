/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        320: '75rem'
      },
      maxWidth: {
        '8xl': '90rem'
      }
    },
  },
  plugins: [],
};
