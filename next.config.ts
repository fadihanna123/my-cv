import { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  distDir: "build",
  basePath: "",
  images: { unoptimized: true },
};

export default config;
