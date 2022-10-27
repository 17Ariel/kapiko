/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "san-serif"],
        fira: ["Fira Sans", "san-serif"],
      },
      height: {
        90: ["90vh"],
      },
      width: {
        small: ["30rem"],
        medium: ["32rem"],
      },
      backgroundImage: {
        coverimg: "url('/public/img/backgound.jpg')",
        bgimg: "url('/public/img/cover.png')",
        capuccino: "url('/public/img/capuccino.jpg')",
        espresso: "url('/public/img/espresso.jpeg')",
        mocha: "url('/public/img/mocha.jpg')",
        barako: "url('/public/img/barako.jpeg')",
        landing: "url('/src/assets/backgound.jpg')",
      },
      colors: {
        primary: ["#97572A"],
        dark: ["#333"],
      },
      screns: {
        sm: ["490px"],
        md: ["680px"],
        lg: ["1024px"],
        xl: ["1280px"],
        xxl: ["1536px"],
      },
    },
  },
  plugins: [],
};
