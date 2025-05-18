/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      pizza: 'Ancizar Sans, monospase',
    },
    extend: {
      fontSize:{
        huge: ['10rem', {lineHeight: '1'}],
      },
      height: {
        screen: '100dvh',
      }
    },
  },
  plugins: [],
}

