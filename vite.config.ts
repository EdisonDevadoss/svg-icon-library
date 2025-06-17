import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'icon-svg-lib',
      formats: ['es'],
      fileName: () => `index.es.js`,
    },
    rollupOptions: {
      external: ['lit'],
    },
  },
})