module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/Pages/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        deepRed: "#e03c43",
      },
      fontSize: {
        10: "10px",
        40: "40px",
        xs: "10px",
        sm: "12px",
        tiny: "14px",
        base: "16px",
        lg: "18px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "6xl": "60px",
        "7xl": "70px",
      },
      fontFamily: {
        sans: ["Manrope, sans-serif, monospace"],
      },
      spacing: {
        22: "88px",
        23: "92px",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
