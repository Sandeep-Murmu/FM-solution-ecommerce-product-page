import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  base: "/FM-solution-ecommerce-product-page",
  plugins: [react(), eslint()],
});
