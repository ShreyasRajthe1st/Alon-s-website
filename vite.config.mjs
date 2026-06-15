import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8085,
  },
  build: {
    rollupOptions: {
      // Single-page SimpliiGood site. The old Linoxa real-estate sub-pages
      // (about/service/technology/pricing) are intentionally NOT built so the
      // template residue never deploys. Re-add inputs here if those pages are rebuilt.
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
