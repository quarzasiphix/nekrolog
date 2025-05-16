// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { componentTagger } from 'lovable-tagger';

// helper that always resolves from the project root
const r = (...p: string[]) => resolve(process.cwd(), ...p);

export default defineConfig(({ ssrBuild, mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),      // only in dev
  ].filter(Boolean),

  resolve: {
    alias: { '@': r('src') },                         // use '@/…' anywhere
  },

  server: {
    host: '::',
    port: 8080,
  },

  /**
   * ┌──────── client bundle ───────┐
   * │  npm run build               │  -> dist/client/ + manifest
   * └──────── server bundle ───────┘
   *                                │
   *   npm run build:ssr (called    │  -> dist/server/
   *   automatically from "build")  │
   */
  build: ssrBuild
    ? {
        ssr: r('src/entry-server.tsx'),
        outDir: 'dist/server',
      }
    : {
        ssrManifest: true,       // <── correct manifest for SSR
        outDir: 'dist/client',
      }
}));
