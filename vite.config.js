import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/React Portfolio 2/",
  build: {
    outDir: "build",
  },
});
