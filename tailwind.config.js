/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'box-shadow-home': '0px 0px 30.91px 0px rgba(0, 0, 0, 0.1)',
      },
      color:{
        'footer':'#356C07',
        'custom-text': '#356C07',
      }
    },
  },
  plugins: [],
}