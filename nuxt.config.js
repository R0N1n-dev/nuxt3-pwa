// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  head: {
    title: "Nuxt 3 PWA",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      //{ name: "theme_color", content: "#00ffff" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt"],
  css: ["boxicons/css/boxicons.min.css"],
  pwa: {
    strategies: "injectManifest",
    srcDir: "./",
    filename: "sw.js",
    workbox: {
      cleanupOutdatedCaches: true,
      /* globPatterns: [
        // all packaged resources are stored here
        "/*",
        // add HTML and other resources for the root directory
        "*.{svg,png,jpg}",
        "*.html",
        //"manifest.webmanifest",
        // be careful, not to add sw.js
      ],*/
    },
    manifest: {
      name: "Test Nuxt PWA",
      short_name: "Test",
      theme_color: "#ffffff",
      id: "/",
      description: "Vue PWA ",
      display: "standalone",
      background_color: "#ffffff",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  },
});
