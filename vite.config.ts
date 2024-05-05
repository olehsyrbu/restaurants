import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, './src') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      { find: '@store', replacement: resolve(__dirname, './src/store') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
    ],
  },
});
