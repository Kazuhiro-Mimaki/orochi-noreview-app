/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: 'node',
  },
  resolve: {
    alias: {
      '@': __dirname + '/src',
    },
  },
})
