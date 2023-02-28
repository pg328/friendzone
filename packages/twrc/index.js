/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./src/_app.tsx", "./src/index.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#010101"
        }
      }
    },
  },
  plugins: [],
};
