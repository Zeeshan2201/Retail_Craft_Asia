import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunks for better loading performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          ui: ['lucide-react']
        }
      }
    },
    // Generate source maps for production debugging
    sourcemap: false,
    // Optimize assets
    assetsDir: 'assets'
  },
  // Optimize dev server
  server: {
    port: 3000,
    open: true
  },
  // Define environment variables for SEO
  define: {
    __SITE_URL__: JSON.stringify('https://retailcraftasia.com'),
    __SITE_NAME__: JSON.stringify('Retail Craft Asia')
  }
})
