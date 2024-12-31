// tailwind.config.cjs
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7340",
        "primary-btn": "#ff7440",
        "primary-text": "#111",
        "primary-bg": "#FEFEFE",
      },
      fontSize: {
        small: "1.8rem",
        medium: "2.4rem",
        large: "5.2rem",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
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
  },
  plugins: [],
};
