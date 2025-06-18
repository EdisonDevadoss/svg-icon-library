import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    tailwindcss(),
    dts(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'icon-svg-lib',
      formats: ['es'],
      fileName: () => `index.es.js`,
    },
    rollupOptions: {
      external: ['lit', /^lit\/.*/],
      output: {
        assetFileNames: 'index.css'
      },
    },
    cssCodeSplit: false,
  },
  css: {
    modules: false,
  },
})