/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#153A8B",
        transparent: "transparent",
        fg: "var(--fg)",
        bg: "var(--bg)",
        tx: "var(--text-color)",
        white: "#fff",

        "gray-1": "var(--gray1)",
        "gray-2": "var(--gray2)",
        "gray-3": "var(--gray3)",
        "gray-4": "var(--gray4)",
        "gray-5": "var(--gray5)",
        "gray-6": "var(--gray6)",

        "black-1": "var(--black1)",
        "black-2": "var(--black2)",
        "black-3": "var(--black3)",
        "black-4": "var(--black4)",
        "black-5": "var(--black5)",
        "black-6": "var(--black6)",
        "black-7": "var(--black7)",
        "black-8": "var(--black8)",
        "black-9": "var(--black9)",
        "black-10": "var(--black10)",
      },
      screens: {
        pc: "600px",
        mobile: {
          min: "1px",
          max: "599px",
        },
      },
      maxWidth: {
        page: 1072,
        content: 600,
      },
      width: {
        page: 1072,
        content: 600,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
