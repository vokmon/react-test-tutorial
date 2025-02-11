import path, { join } from "path";
import { defineConfig } from "vitest/config";
import { loadEnvFile } from "process";

loadEnvFile(path.resolve(__dirname, ".env.test"));

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ['test/playwright/**/*.test.tsx', 'test/playwright/**/*.test.ts'],
    browser: {
      provider: 'playwright', // or 'webdriverio'
      enabled: true,
      // at least one instance is required
      instances: [
        { browser: 'chromium', globals: true },
      ],
      // headless: true,
    },
    // reporters: ["html"]
  },
  resolve: {
    alias: {
      "@": join(__dirname, "../../src/"),
    },
  },
});