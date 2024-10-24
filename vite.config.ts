import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    port: 3000,
    host: true,
    watch: {
      usePolling: true,
    },
  },
  base: "",
  build: {
    outDir: "dist",
  },
  plugins: [react(), viteTsconfigPaths()],
});
