/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // colores personalizados para la marca institucional
        'institucional-dorado': '#c29b47', 
        // color blanco para el fondo de la marca institucional
        'institucional-claro': '#fdfaf5',
      }
    },
  },
  plugins: [],
}