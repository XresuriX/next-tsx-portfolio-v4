/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,css}',
    './components/**/*.{js,ts,jsx,tsx,css}',
    './styles/**/*.css'
  ],
  darkMode: 'class',
  theme: {
    extend: {
          colors: {
            blue_1: {
              DEFAULT: '#122ac5',
            },
            green: {
              DEFAULT: "#00f260",
            },
            dark: {
              DEFAULT: "#010101",
              100: "#0a0b0e",
              200: "#16181d",
              300: "#16181d",
              500: "#0f1115",
              700: "#202125",
            },
          },
        },
  },
  boxShadow: {
    "custom-light": " 0 0 10px #313131",
    "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
}
 