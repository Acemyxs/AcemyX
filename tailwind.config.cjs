// tailwind.config.cjs
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff7340",
        "primary-btn": "#ff7440",
        "primary-text": "#111",
        "primary-bg": "#F5F5F5",
      },
      fontSize: {
        small: "1.8rem",
        medium: "2.4rem",
        large: "5.2rem",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
