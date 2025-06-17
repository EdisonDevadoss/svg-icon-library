import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'svg-icon-lib',
      formats: ['es'],
      fileName: (format) => `index.es.js`,
    },
    rollupOptions: {
      external: ['lit'],
    },
  },
})