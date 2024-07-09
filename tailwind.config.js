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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
