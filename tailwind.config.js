/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary' : ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'hero' : "url('/src/img/hero.jpg')",
        'clienteHero' : "url('/src/img/cliente_Hero.jpg')" 
      }
    }
  },
  plugins: [],
}

