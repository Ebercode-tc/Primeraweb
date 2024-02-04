/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'index.html',
    'code.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'],
        // Agrega otras fuentes personalizadas si es necesario
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

