import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { plugin as markdown, Mode } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    markdown({ mode: [Mode.HTML, Mode.TOC, Mode.MARKDOWN] })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['gray-matter', 'vite-plugin-markdown'],
  },
});
