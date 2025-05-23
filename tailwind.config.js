/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  lightMode: 'class',
  theme: {
    extend: {},
  },
  plugins: ['flowbite/plugin'],
}

