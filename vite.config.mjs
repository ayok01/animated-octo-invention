import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  optimizeDeps: {
    include: ['three']
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});