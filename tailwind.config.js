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
        "hero-pattern_2048": "url('../public/images/background.jpg')",
        "hero-pattern_360": "url('../public/images/background_360x800.jpg')",
        "hero-pattern_768": "url('../public/images/background_1_768x1024.jpg')",
        "hero-pattern_1280":
          "url('../public/images/background_1_1280x720.jpg')",
        rolunk: "url('../public/images/feature2.jpg')",
        bejelentkezes: "url('../public/images/bejelentkezes.jpg')",
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
