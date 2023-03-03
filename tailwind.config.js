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
        logo_image: "url('../public/images/middle3.jpg')",
        "hero-pattern_2048": "url('../public/images/background.jpg')",
        "hero-pattern_768": "url('../public/images/background_1_768x1024.jpg')",
        rolunk_bg: "url('../public/images/feature2bg.jpg')",
        rolunk_2048: "url('../public/images/feature2.jpg')",
        rolunk_second: "url('../public/images/feature2_2nd.jpg')",
        bejelentkezes: "url('../public/images/bejelentkezes.jpg')",
        training_gif: "url(../public/images/training_gif.gif')",
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
