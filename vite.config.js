// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { createHtmlPlugin } from 'vite-plugin-html'
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Hridesh Bharati - Portfolio',
        short_name: 'Hridesh Portfolio',
        description: 'Full Stack Developer Portfolio',
        theme_color: '#00a884',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Hridesh Bharati | Full Stack Developer',
          description: 'Professional portfolio of Hridesh Bharati - Full Stack Developer',
          keywords: 'Hridesh Bharati, Full Stack Developer, Web Development, React, Node.js',
          url: 'https://hrideshbharati.com',
          image: '/og-image.png'
        }
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['bootstrap', 'bootstrap-icons', 'framer-motion'],
          utils: ['axios', '@emailjs/browser']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 5173,
    host: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})