import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./dist/stats.html", // Output file
      open: true, // Automatically open the report
      gzipSize: true, // Show gzip size
      brotliSize: true, // Show brotli size
    }),
    compression({ algorithm: "brotliCompress" }),
  ],
  base: "/",
  build: {
    sourcemap: true,
  },
});
