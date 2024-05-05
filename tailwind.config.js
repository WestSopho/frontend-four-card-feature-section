/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
            'poppins': ['Poppins', 'sans-serif']
        },
        colors: {
            "EA5454": "#EA5454",
            "44D3D2" : "#44D3D2",
            "FCAE4A" : "#FCAE4A",
            "549EF2" : "#549EF2",
            "4D4F62" : "#4D4F62",
            "FAFAFA": "#FAFAFA",
        },
      },
    },
    plugins: [],
  }