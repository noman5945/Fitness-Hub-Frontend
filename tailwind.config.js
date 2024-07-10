/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('src/assets/Hero/Hero-bg.jpg')",
        "benefits-section-bg": "url('src/assets/Benfits/benefitsBG.jpg')",
      },
      fontFamily: {
        sans: ["Roboto", "Open Sans", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
        display: ["Oswald"],
        body: ["Open Sans"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
