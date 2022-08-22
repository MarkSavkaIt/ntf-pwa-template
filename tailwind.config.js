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
      backgroundSize: {
        16: "16px",
      },
      backgroundPosition: {
        "search-position": "18px 14px",
      },
      backgroundImage: {
        search: "url('assets/svg/search.svg')",
      },
    },
    fontFamily: {
      display: [
        "Oswald",
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
      ],
    },
  },
  plugins: [],
};
