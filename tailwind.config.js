/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        headerbg: "url('/src/images/oseni-header-image.jpg')",
      },
      fontFamily: {
        custom: ["Bodoni Moda", "sans"], // Add your font family name here
      },
    },
  },
  plugins: [],
};
