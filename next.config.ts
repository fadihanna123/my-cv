import { NextConfig } from "next";

const { NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_API_KEY } =
  process.env;

const config: NextConfig = {
  output: "export",
  distDir: "build",
  images: { unoptimized: true },
  reactStrictMode: true,
  env: {
    serviceId: NEXT_PUBLIC_SERVICE_ID as string,
    templateId: NEXT_PUBLIC_TEMPLATE_ID as string,
    publicKey: NEXT_PUBLIC_API_KEY as string,
  },
};

export default config;
