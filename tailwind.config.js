/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex:{
        "flex-30" : "flex 0 0 30%",
        "flex-40" : "flex 0 0 40%",
        "flex-50" : "flex 0 0 50%",
      }
    },
  },
  plugins: [],
}