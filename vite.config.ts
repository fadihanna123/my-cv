import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  plugins: [react()],
});
