/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/common/header.jsx"
  ],
  theme: {
    extend: {
      colors: {
        main: "#294122", 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        aclonica: ['Aclonica', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}