/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: { colors: { "primary-bg": "#171717", "primary-blue": "#153A8B" } },
  },
  plugins: [],
};
