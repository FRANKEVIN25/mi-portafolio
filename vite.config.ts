import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  // 🚨 AÑADE ESTA LÍNEA AQUÍ
  base: '/mi-portafolio/', 

  plugins: [
    vue(),
    tailwindcss(),
    sitemap({
      hostname: "https://Frank.dev",
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
    // port: 3000,
    // strictPort: true,
    // host: true,
    // watch: {
    //   usePolling: true,
    // },
  },
  // build: {
  //   outDir: "dist",
  // ...
  // },
});