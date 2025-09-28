/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js,ts}"],
   theme: {
     extend: {
       colors: {
         primary: '#151875',
         secondary: '#FB2E86',
         tertiary: {
           DEFAULT: '#F6F5FF',
           light: '#F7F7F7'
         }
       },
     },
   },
   plugins: [],
 }