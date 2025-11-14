import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = process.env.VITE_BASE || '/'; // set VITE_BASE=/xceed-website/ for gh-pages

export default defineConfig({
  plugins: [react()],
  base
});
