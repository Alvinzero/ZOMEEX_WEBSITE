import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// WordPress remains the source of product media during the migration.
// Vite proxies those files so the React app can use the same upload URLs.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/wp-content': 'http://localhost:8000',
    },
  },
  preview: {
    port: 4173,
  },
});
