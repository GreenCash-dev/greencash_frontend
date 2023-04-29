import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { checker } from 'vite-plugin-checker';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@src', replacement: '/src' },
    ],
  },
  plugins: [react(), checker({ typescript: true, eslint: { lintCommand: 'eslint ./src --ext .ts, .tsx' } })],
  publicDir: false, // vite의 public 폴더 설정을 비활성화합니다.
});
