import path, { join } from "path";
import { defineConfig } from "vitest/config";
import { loadEnvFile } from "process";

loadEnvFile(path.resolve(__dirname, ".env.test"));

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ['test/unit-test/**/*.test.tsx', 'test/unit-test/**/*.test.ts'],
  },
  resolve: {
    alias: {
      "@": join(__dirname, "../../src/"),
    },
  },
});