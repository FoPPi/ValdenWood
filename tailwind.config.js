/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}

