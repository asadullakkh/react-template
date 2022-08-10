const screens = {};
for (let i = 1440; i >= 320; i--) {
  screens[`-${i}`] = { max: `${i}px` };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ...screens,
      },
      colors: {
        black: {
          200: "#11142D",
        },
      },
    },
  },
  plugins: [],
};
