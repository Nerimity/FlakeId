import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/flakeid.js'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['esm', 'cjs'],
  target: 'es2022',
})