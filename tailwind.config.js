/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#D45D79",
        "secondary": "#261C2C",
        "blue": "#293B5F",
        "dark-gray": "#555555",
        "dim-gray": "#666666",
        "silver": "#AAAAAA",
        "hero": "#F4F5FA",
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      container: {
        center: true,
        padding: '3rem',
        maxWidth: '1280px',
      }, 
    },
  },
  plugins: [],
}

