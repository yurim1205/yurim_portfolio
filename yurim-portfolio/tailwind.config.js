/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: "#294122", 
        text: "#FFEDD2"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        aclonica: ['Aclonica', 'sans-serif'], 
        abhaya: ['Abhaya Libre', 'serif'],
      },
      margin: {
        '96': '24rem', 
      },
      scale: {
        '115': '1.15'
      },
      boxShadow: {
        '3xl': '0 15px 30px rgba(0, 0, 0, 0.1)',
        '4xl': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
        check: {
          '0%': { strokeDashoffset: '100', strokeDasharray: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        check: 'check 2s ease forwards',
      },
    },
  },
  plugins: [],
}