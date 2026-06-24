import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Configuración de Vite.
 * Con los componentes y páginas ya en .jsx, no se necesita ningún loader
 * especial: el plugin de React maneja .jsx de forma nativa.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
