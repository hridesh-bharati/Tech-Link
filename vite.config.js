// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "0.0.0.0",
//     port: 5173,
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//         secure: false,
//       }
//     }
//   }
// });
// hb\vite.config.js
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'HB Techlink',
        short_name: 'HB',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#007aff',
        icons: [
          { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
});
