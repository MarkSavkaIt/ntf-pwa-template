/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-mintify-100": "#25272E",
        "gray-mintify-200": "#2B2C33",
        "gray-mintify-300": "#373943",
      },
      gridTemplateColumns: {
        sidebar: "1fr 3fr",
      },
    },
  },
  plugins: [],
};
