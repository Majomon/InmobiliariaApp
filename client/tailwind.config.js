/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    // Agrega una clase personalizada para el fondo SVG del footer
    backgroundImage: {
      "footer-bg": "url('./src/assets/Footer.svg')", // Ajusta la ruta según la ubicación del archivo
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
