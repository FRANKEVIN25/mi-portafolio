import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  // Cambia 'mi-portafolio' por el nombre de tu repositorio de GitHub
  base: process.env.NODE_ENV === 'production' ? '/mi-portafolio/' : '/',

  plugins: [
    vue(),
    tailwindcss(),
    sitemap({
      hostname: "https://FRANKKEVIN25.github.io/mi-portafolio", // Cambia esto
      outDir: "dist",
      i18n: {
        defaultLanguage: "pt-BR",
        strategy: "prefix",
        languages: ["pt-BR", "en"],
      },
    }),
  ],
  server: {
    port: (process.env.PORT as unknown as number) || 3000,
  },
});