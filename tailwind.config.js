module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#BAE6FD",
        white: "#FFFFFF",
        // gray: "#71717A",
        hover: "#38BDF8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
