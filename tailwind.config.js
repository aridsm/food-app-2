/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["red-theme"]: "#C53F3F",
        ["red-hover"]: "#D54A4A",
        ["white-beige"]: "#F7F6F3",
        ["mostard"]: "#E5D54A",
      },
      screens: {
        xl: "1200px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
