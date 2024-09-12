/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        EN: ["EN", "sans-serif"],
        ENNormal: ["EN-Normal", "sans-serif"], // Ensures 'sf' is used and falls back to sans-serif
        KH: ["KH", "sans-serif"],
      },
      colors: {
        primary: "#961114", // Example primary color
        boldText: "#161616", // Example secondary color
        text: "#504E4E", // Example accent color
        bgColor: "#F7F7F7",
        // Add more colors as needed
      },
    },
  },
  plugins: [],
};
