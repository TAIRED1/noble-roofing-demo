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
          crimson: '#9e1b27',
          navy: '#0d1527',
          gray: '#f8fafc'
        }
      }
    },
  },
  plugins: [],
}
