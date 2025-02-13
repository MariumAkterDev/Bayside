/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
    },
    extend: {
      colors: {
        'brand-Color': '#002D69',
        'PrimaryColor-34': '#343434',
        
      },
    },
    fontFamily: {
      'Lato': ['Lato', 'serif'],
    }
  },
  plugins: [],
}