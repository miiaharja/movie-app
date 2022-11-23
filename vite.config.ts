import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), I18nHotReload()],
  build: {
    sourcemap: true,
  },
});

function I18nHotReload(): PluginOption {
  return {
    name: "i18n-hot-reload",
    handleHotUpdate({ file, server }) {
      if (file.includes("i18n") && file.endsWith(".json")) {
        console.log("Locale file updated");
        server.ws.send({
          type: "custom",
          event: "locales-update",
        });
      }
    },
  };
}
