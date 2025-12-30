import { withSentryConfig } from "@sentry/nextjs";
import { NextConfig } from "next";

const config: NextConfig = {
  distDir: "build",
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "skillicons.dev" }],
  },
  env: {
    serviceId: process.env.NEXT_PUBLIC_SERVICE_ID as string,
    templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
    publicKey: process.env.NEXT_PUBLIC_API_KEY as string,
  },
};

export default withSentryConfig(config, {
  org: "fadi-2q",
  project: "my-cv",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
