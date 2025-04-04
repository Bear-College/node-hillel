import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'src', // Define the root directory
  build: {
    outDir: '../dist', // Output directory for production build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'), // Entry point
      },
    },
  },
  css: {
    postcss: './postcss.config.js', // Enable PostCSS processing
  },
  server: {
    open: true, // Auto-open in browser
    port: 5173, // Custom port
  },
});