/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D45D79",
        secondary: "#261C2C",
        blue: "#293B5F",
        "dark-gray": "#555555",
        "dim-gray": "#666666",
        silver: "#AAAAAA",
        hero: "#F4F5FA",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg2.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      container: {
        center: true,
        padding: "4em",
        maxWidth: "1280px",
      },
      keyframes: {
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "slide-left": {
          from: {
            transform: " translateX(-100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-right": "fade-in-right 2s ease-in-out infinite",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "slide-left": "slide-left 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
