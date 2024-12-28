import { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  distDir: "build",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default config;
