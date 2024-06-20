/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary-default)",
          100: "#e5e5e5",
          200: "#cccccc",
          300: "#b2b2b2",
          400: "#999999",
          500: "#7f7f7f",
          600: "#666666",
          700: "#4c4c4c",
          800: "#333333",
          900: "#191919",
        },
        secondary: {
          DEFAULT: "#5e54ce",
          100: "#e2e0f9",
          200: "#c5c1f2",
          300: "#a7a1eb",
          400: "#8982e4",
          500: "#6c62dd",
          600: "#564dcc",
          700: "#423a99",
          800: "#2f2766",
          900: "#1c1533",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          DEFAULT: "#CDCDE0",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
