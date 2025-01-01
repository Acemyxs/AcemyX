// tailwind.config.cjs
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    
  theme: {
    extend: {
      colors: {
        /*DEFAULT*/
        "bg-color": "#FEFEFE",
        "text-color": "#030712",
        /* NEUTRAL */

        /*LIGHT*/
        "neutral-white-10": "#FFFFFF",
        "neutral-white-15": "#FFFDFF",
        "neutral-white-30": "#FEFEFE",
        "neutral-white-40": "#FAFAFA",
        "neutral-white-60": "#F6F6F6",

        /*DARK*/
        "neutral-black-10": "#747474",
        "neutral-black-15": "#6D6D6D",
        "neutral-black-30": "#646464",
        "neutral-black-40": "#5F5F5F",
        "neutral-black-60": "#080707",
        "neutral-black-80": "#0A0A0A",

        /* PRIMARY */
        "primary-10": "#A9AEB4",
        "primary-15": "#5D636A",
        "primary-30": "#585E65",
        "primary-40": "#474C52",
        "primary-60": "#030712",

        /* SECONDARY */
        "secondary-10": "#FFC0A8",
        "secondary-15": "#FEBBA2",
        "secondary-30": "#FFB499",
        "secondary-40": "#FFA888",
        "secondary-60": "#FF895D",
        "secondary-80": "#FF7340",
        "secondary-90": "#FF7340",

        /* ACCENT */
        "accent-10": "#93EABD",
        "accent-15": "#80E5B1",
        "accent-30": "#2CA94C",
        "accent-40": "#5292F4",
        "accent-60": "#864FD4",

        primary: "#ff7340",
        "primary-btn": "#ff7440",
        "primary-text": "#111",
        "primary-bg": "#FEFEFE",
      },
      fontSize: {
        small: "1.8rem",
        medium: "2.4rem",
        large: "5.2rem",

        /* Body font */
        // Paragraph
        xsm: [
          "12px",
          {
            lineHeight: "120%",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "120%",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "144%",
          },
        ],
        lg: ["18px"],

        //Headline
        title_1: [
          "10px",
          {
            lineHeight: "140%",
          },
        ],
        title_2: [
          "20px",
          {
            lineHeight: "144%",
          },
        ],

        /* HEADER */
        // Display
      
        "header_5": [
          "32px",
          {
            lineHeight: "120%",
          },
        ],
        "header_4": [
          "36px",
          {
            lineHeight: "130%",
          },
        ],
        "header_3": [
          "40px",
          {
            lineHeight: "120%",
          },
        ],
        "header_2": [
          "56px",
          {
            lineHeight: "120%",
          },
        ],
        "header_1": [
          "80px",
          {
            lineHeight: "1.1",
          },
        ],
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
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
  plugins: [],
};