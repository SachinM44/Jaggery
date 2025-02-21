/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#08163c",
        "custom-yellow": "#FFDA63",
        "custom-card-blue": "#13234f",
      },
    },
  },
  plugins: [],
};
