/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Habilita el modo oscuro basado en la clase 'dark'
  theme: {
    extend: {
      // Aquí puedes extender tu tema con más colores, tipografías, etc.
      colors: {
        // Definición de colores personalizados (si los necesitas)
        'dark-bg': '#121212',
        'dark-text': '#ffffff',
        'light-bg': '#ffffff',
        'light-text': '#000000',
      },
    },
  },
  plugins: [],
}