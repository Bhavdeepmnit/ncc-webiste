/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mnit: {
          blue: "#161982", // Updated Navy blue
          red: "#C41E3A", // Cardinal red
          gold: "#FFD700", // Gold
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
