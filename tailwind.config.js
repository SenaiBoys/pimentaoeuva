/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pimentao': "url('https://i.imgur.com/5HzoecL.png')",
        'uva': "url('https://i.imgur.com/5H72SXL.jpg')",
        'dark-uva': "url('https://i.imgur.com/hW3QjjN.jpg')",
        'dark-pimentao': "url('https://i.imgur.com/8orZQY9.png')"
      }
    },
  },
  plugins: [],
}
