const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {},
      backgroundImage: {
        logo_image: "url('/images/middle3.jpg')",
        "hero-pattern_2048": "url('/images/background.png')",
        "hero-pattern_768": "url('/images/background_1_768x1024.png')",
        rolunk_bg: "url('/images/feature2bg.jpg')",
        rolunk_second: "url('/images/feature2_2nd.jpg')",
        bejelentkezes: "url('/images/bejelentkezes.jpg')",
        training_gif: "url('/images/training_gif.gif')",
      },
      colors: {
        "nk-white": "#EDEDED",
        "nk-red": "#DA0037",
        "nk-grey": "#444444",
        "nk-black": "#171717",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
