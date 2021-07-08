module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#BAE6FD",
        white: "#FFFFFF",
        hover: "#38BDF8",
      },
      backgroundImage: (theme) => ({
        "hero-pattern":
          "url('https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        // "footer-texture": "url('/img/footer-texture.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
