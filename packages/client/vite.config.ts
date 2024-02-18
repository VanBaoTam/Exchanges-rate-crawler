import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve("./src/components"),
      "@constants": resolve("./src/constants"),
    },
  },
  plugins: [react()],
});
