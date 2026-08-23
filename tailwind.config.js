/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: '#B91E31',
          navy: '#050a15',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
