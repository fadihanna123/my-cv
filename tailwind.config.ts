import { NextConfig } from "next";

const config: NextConfig = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};

export default config;
