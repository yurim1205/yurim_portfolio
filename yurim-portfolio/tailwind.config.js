/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/common/header.jsx",
    "./src/components/about/about.jsx",
    "./src/components/stack/stack.jsx"
  ],
  theme: {
    extend: {
      colors: {
        main: "#294122", 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        aclonica: ['Aclonica', 'sans-serif'], 
        abhaya: ['Abhaya Libre', 'serif'],
      }
    },
  },
  plugins: [],
}