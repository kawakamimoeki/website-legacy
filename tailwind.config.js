/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './locales/*.ts'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
}
