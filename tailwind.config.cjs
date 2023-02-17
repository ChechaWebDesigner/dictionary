/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "semi-black": "#1a1a1a"
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
