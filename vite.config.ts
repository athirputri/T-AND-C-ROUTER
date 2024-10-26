import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      pages: "/src/pages",
      components: "/src/components",
      routes: "/src/routes",
      lib: "/src/lib",
      context: "/src/context",
    },
  },
});
