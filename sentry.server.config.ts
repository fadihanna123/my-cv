import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://51aa710bd43c547a9a025ec1a4373b4f@o4509742575845376.ingest.de.sentry.io/4510223468658768",
  enabled: process.env.NODE_ENV === "production",
  tracesSampleRate: 1,
  enableLogs: true,
  sendDefaultPii: true,
});
