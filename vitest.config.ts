import path, { join } from "path";
import { defineConfig } from "vitest/config";
import { loadEnvFile } from "process";

loadEnvFile(path.resolve(__dirname, "test/.env.test"));

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": join(__dirname, "./src/"),
    },
  },
});