import Vue from "@vitejs/plugin-vue";
import * as path from "path";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [Vue(), Icons()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // test: {
  //   include: ["**/*.spec.ts"],
  // },

  // If want to serve your backend app update proxy prop
  // server: {
  //   proxy: {
  //     "/example-route/v1": "http://localhost:[YOUR-PORT]/",
  //   },
  // },
});
