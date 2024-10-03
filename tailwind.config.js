/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '6px -1px 8px -3px #000',
        shadowNav: '0px -1px 8px 0px #FF8F00',
      },
      colors:{
        mainColor:'#FF8F00',
        darkMode:'#3C3D37',
      },
      backgroundImage: {
        'header': "url('./src/assets/Rectangle 2.png')",
      }
    },
  },
  plugins: [],
});