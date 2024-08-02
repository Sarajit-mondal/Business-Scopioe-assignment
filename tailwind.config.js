/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primaryColor:'#156BCA',
      seconderyColor:"#D4E9FF",
      backgroundColor:'#A7A8A8',
      blackColor:"#152A16",
      lightGray:"#EEF2F5",
      lightColor:"#ffffff"
    }
  },
  plugins: [],
}