/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Este es el dorado/mostaza de tu imagen
        'institucional-dorado': '#c29b47', 
        // Un blanco hueso para fondos suaves
        'institucional-claro': '#fdfaf5',
      }
    },
  },
  plugins: [],
}