/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      baskerville: ["New Baskerville"],
      share: ["Share Regular", "Georgia"],
      trade: ["Trade Gothic Regular"],
    },
    extend: {},
  },
  plugins: [],
};
