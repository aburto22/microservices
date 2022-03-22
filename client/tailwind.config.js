module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        60: "15rem",
      },
      backgroundImage: {
        radial: "radial-gradient(circle at 50% 40%, #242424, #171717 80%)",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
