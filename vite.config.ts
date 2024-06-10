import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  plugins: [react()],
});
