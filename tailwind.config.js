const Image = require("next/image");

const { fontFamily } = require("tailwindcss/defaultTheme");

const backgroundImage = (imageUrl) => ({
  backgroundImage: `url(${imageUrl})`,
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "/images/background_1_768x1024.png"("/images/bejelentkezes.png"),
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {},
      backgroundImage: {
        logo_image: "url('/images/middle3.jpg')",
        "hero-pattern_2048": backgroundImage(
          Image.loader("/images/background.png", {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          })
        ),
        "hero-pattern_768": backgroundImage(
          Image.loader("/images/background_1_768x1024.png", {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          })
        ),
        rolunk_bg: "url('/images/feature2bg.jpg')",
        rolunk_second: "url('/images/feature2_2nd.jpg')",
        bejelentkezes: backgroundImage(
          Image.loader("/images/bejelentkezes.png", {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          })
        ),
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
