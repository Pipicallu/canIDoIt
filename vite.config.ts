import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";

// Merge Vite and Vitest types
const config: UserConfig & { test?: InlineConfig } = {
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
};

export default defineConfig(config);
