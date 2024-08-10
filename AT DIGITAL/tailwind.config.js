/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary:'#6B3CC9',
        Secondary:'#F28D35',
        AnalogousIce:'#6A44F2',
        AnalogousBlue:'#1CBDDD',
        Triadic:'#52378C',
        Dark:'#78BF91',
        Text:'#2F2F2F',
        TextLight:'#545A75',
        TextSub:'#9C9991',
        AccentWhite:'#E2F2FE',
        AccentYarn:'#FFF8E0',
        Error:'#FF0335',
        Success:'#5EB30B'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin: '400', 
        light: '500', 
        normal: '600', 
        bold: '700', 
      },
    },
    fontFamily:{
      sans: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
        


