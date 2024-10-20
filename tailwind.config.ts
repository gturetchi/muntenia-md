import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "San Francisco",
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        primary: "#666758",
        secondary: "#5c3b2f",
        tertiary: "#cecac0",
        quaternary: "#8a7463",
      },
      fontSize: {
        xxxl: "10rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
