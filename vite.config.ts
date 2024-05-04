/// <reference types="vitest" />
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    css: true,
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,
    include: ['src/**/*.{test,spec}.{js,mjs,ts,mts,jsx,tsx}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
      './src/index.ts'
    ],
    coverage: {
      exclude: ['src/index.ts']
    }
  }
})
