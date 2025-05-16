// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        // main React shell
        "index": path.resolve(__dirname, "index.html"),

        // ASORTYMENT pages
        "asortyment/index": path.resolve(__dirname, "asortyment", "index.html"),
        "asortyment/odziez-pogrzebowa": path.resolve(__dirname, "asortyment", "odziez-pogrzebowa.html"),
        "asortyment/trumny-pogrzebowe": path.resolve(__dirname, "asortyment", "trumny-pogrzebowe.html"),
        "asortyment/urny-pogrzebowe": path.resolve(__dirname, "asortyment", "urny-pogrzebowe.html"),
        "asortyment/wiazanki-pogrzebowe": path.resolve(__dirname, "asortyment", "wiazanki-pogrzebowe.html"),
        "asortyment/wience-pogrzebowe": path.resolve(__dirname, "asortyment", "wience-pogrzebowe.html"),

        // USŁUGI pages
        "uslugi/index": path.resolve(__dirname, "uslugi", "index.html"),
        "uslugi/ekshumacja-zwlok": path.resolve(__dirname, "uslugi", "ekshumacja-zwlok.html"),
        "uslugi/kremacja-zwlok": path.resolve(__dirname, "uslugi", "kremacja-zwlok.html"),
        "uslugi/oprawa-muzyczna": path.resolve(__dirname, "uslugi", "oprawa-muzyczna.html"),
        "uslugi/organizacja-pogrzebow": path.resolve(__dirname, "uslugi", "organizacja-pogrzebow.html"),
        "uslugi/transport-zwlok": path.resolve(__dirname, "uslugi", "transport-zwlok.html"),
      },
    },
  },
}));
