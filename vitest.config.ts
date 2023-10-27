/// <reference types="vitest" />

import Vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [Vue(), Icons()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
