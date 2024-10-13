/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'max': '376px' },
    },
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      margin: {
        '18': '4.5rem',
        '9.5': '2.375rem',
        '2': '68px',
        '1': '38px'
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



