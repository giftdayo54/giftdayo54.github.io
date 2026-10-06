import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Base path: set VITE_BASE=/REPOSITORY/ for project pages (deploy.yml does this automatically).
export default defineConfig({ plugins: [react()], base: process.env.VITE_BASE || '/' });
