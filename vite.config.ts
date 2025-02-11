import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    open: "index.html",
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(currentDir, "src"),
      styles: path.resolve(currentDir, "src/styles"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "styles/utilities/variables" as *;
        @use "styles/utilities/typography" as *;
        @use "styles/utilities/normalize" as *;
        @use "styles/utilities/breakpoints" as *;
        @use "styles/layout/body" as *;
        @use "styles/layout/grid" as *;
        `,
      },
    },
  },
});
