import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() 
  ],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'config': path.resolve(__dirname, 'src/config'),
      'styles': path.resolve(__dirname, 'src/styles'),
    }
  }
});