import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export const BASE = "/oli-portfolio";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: BASE,
});
