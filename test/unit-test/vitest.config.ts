import path, { join } from "path";
import { defineConfig } from "vitest/config";
import { loadEnvFile } from "process";

loadEnvFile(path.resolve(__dirname, ".env.test"));

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ['**/*.test.tsx', '**/*.test.ts'],
    setupFiles: ['setup/setup-vitest.ts'],
    root: "test/unit-test"
  },
  resolve: {
    alias: {
      "@": join(__dirname, "../../src/"),
    },
  },
});