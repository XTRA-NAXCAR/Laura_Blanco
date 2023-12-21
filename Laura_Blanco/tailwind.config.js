/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4EADB3",
        secondary: "#1693a5",
        therciary: "#45b5c4",
        
      }
    },
  },
  plugins: [],
}

