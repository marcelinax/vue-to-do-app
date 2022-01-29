module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"]
      }
    },
    boxShadow: {
      '3xl': '0 0 15px rgba(0, 0, 0, 0.15)',
    }
    
  },
  plugins: [],
}
