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
    },
  },
  plugins: [],
}