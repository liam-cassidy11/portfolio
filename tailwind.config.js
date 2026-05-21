/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#002D62',
        thunder: '#EF3B24',
        cream: '#F5E6C8',
        parchment: '#E8D5A3',
      }
    }
  },
  plugins: []
}
