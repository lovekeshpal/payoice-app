/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1753ES",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        gblack: ["Geist-Black", "sans-serif"],
        gbold: ["Geist-Bold", "sans-serif"],
        gregular: ["Geist-Regular", "sans-serif"],
        glight: ["Geist-Light", "sans-serif"],
        gthin: ["Geist-Thin", "sans-serif"],
        gmedium: ["Geist-Medium", "sans-serif"],
        gsemibold: ["Geist-SemiBold", "sans-serif"],
        gextrabold: ["Geist-ExtraBold", "sans-serif"],
        gextralight: ["Geist-ExtraLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
