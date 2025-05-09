import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "patsy-portfolio",
  plugins: [react()],
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["portfolio-patsy.onrender.com", "ronimeepatsyportfolio.onrender.com"],
  },
  build: {
    outDir: "dist",
    assetsDir: "public",
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
