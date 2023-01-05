/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,css}',
    './components/**/*.{js,ts,jsx,tsx,css}',
    './styles/**/*.css'
  ],
  theme: {
    extend: {
          colors: {
            blue_1: {
              DEFAULT: '#122ac5',
            },
          },
        },
  },
  plugins: [],
}
 