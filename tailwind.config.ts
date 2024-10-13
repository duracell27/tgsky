const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violetDark: "#4b2a93",
        violetLight: "#673dc2",
        violetBorder: "#7055aa",
        violetLink: "#c7a7e7",
        gray: "#999",
        yellowLight: "#FF9",
        whiteGray: "#ddd",
        typeGreen: "#0C0",
        typeBlue: "#00ffff",
        typeYellow: "#ffff00",
        typeViolet: "#B56DFF",
        typeOrange: "#F0823F",
      },
    },
  },
  plugins: [],
};
export default config;
