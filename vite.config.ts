import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
      https: {
        key: fs.readFileSync('C:/Users/Fadi_Dev/cert.key'),
        cert: fs.readFileSync('C:/Users/Fadi_Dev/cert.crt'),
      },
  },

  plugins: [react()],
});
