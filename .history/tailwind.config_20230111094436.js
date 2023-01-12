/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024x',
      xl: '1240px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
