import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ["**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "app"),
      "@assets": path.resolve(__dirname, "app/assets"),
      "@components": path.resolve(__dirname, "app/components"),
      "@utils": path.resolve(__dirname, "app/utils"),
      "@styles": path.resolve(__dirname, "app/styles"),
      "@tests": path.resolve(__dirname, "app/tests"),
    },
  },
});
