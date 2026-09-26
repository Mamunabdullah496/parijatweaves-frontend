/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f2703c",
          dark: "#1a1a1a",
          cream: "#fdf1e7",
        },
      },
    },
  },
  plugins: [],
};
