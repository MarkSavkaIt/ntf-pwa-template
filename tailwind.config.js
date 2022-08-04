/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mintify-gray-100": "#25272E",
        "mintify-gray-200": "#2B2C33",
        "mintify-gray-300": "#373943",
        "mintify-active": "#38F2AF",
      },
      gridTemplateColumns: {
        sidebar: "1fr 3fr",
      },
    },
  },
  plugins: [],
};
