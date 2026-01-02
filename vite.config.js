import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { createHtmlPlugin } from 'vite-plugin-html'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Hridesh Bharati - Portfolio',
        short_name: 'Hridesh Portfolio',
        description: 'Full Stack Developer Portfolio',
        theme_color: '#00a884',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    }),

    compression(),

    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Hridesh Bharati | Full Stack Developer',
          description: 'Professional portfolio of Hridesh Bharati',
          keywords: 'Full Stack Developer, React, Node.js',
          url: 'https://hrideshbharati.com',
          image: '/og-image.png'
        }
      }
    })
  ],

  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['bootstrap', 'bootstrap-icons', 'framer-motion'],
          utils: ['axios']
        }
      }
    }
  },

  server: {
    port: 5173,
    host: true
  }
})
