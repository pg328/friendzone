/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,astro,mdx}","./src/*.{ts,tsx,astro,mdx}", "./src/_app.tsx" ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#9f2937"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
