/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/baiviet.html}"],
  theme: {
    extend: {
      colors: {
        'custom-text': '#356C07',
        'footer': '#356C08',
        'mucluc': '#0000004D'
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      margin: {
        '18': '4.5rem', 
        '9.5': '2.375rem',
        '2' :'68px',
        '1':'38px'
      },
    },
    },
  plugins: [],

 
}



