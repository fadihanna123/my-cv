import { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  distDir: "build",
  images: { unoptimized: true },
  reactStrictMode: true,
  env: {
    serviceId: process.env.NEXT_PUBLIC_SERVICE_ID as string,
    templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
    publicKey: process.env.NEXT_PUBLIC_API_KEY as string,
  },
};

export default config;
