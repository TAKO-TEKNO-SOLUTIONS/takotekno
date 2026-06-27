import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import Critters from 'critters'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path';

// Critical CSS plugin — inlines above-fold CSS in HTML, loads rest async
function criticalCssPlugin() {
  return {
    name: 'critical-css',
    apply: 'build',
    async closeBundle() {
      const critters = new Critters({
        path: './dist',
        publicPath: '/',
        preload: 'swap',       // font-display: swap for non-critical fonts
        inlineFonts: false,    // don't inline fonts — they're self-hosted woff2
        pruneSource: false,    // keep original CSS file (still needed for below-fold)
        logLevel: 'warn',
      });
      const fs = await import('fs');
      const htmlPath = './dist/index.html';
      const html = fs.readFileSync(htmlPath, 'utf-8');
      const processed = await critters.process(html);
      fs.writeFileSync(htmlPath, processed);
      console.log('[critical-css] Critical CSS inlined ✓');
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss({
      config: {
        content: [
          './index.html',
          './src/**/*.{vue,js,ts,jsx,tsx}',
          './src/**/*.{html,css}',
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      },
    }),
    criticalCssPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  build: {
    // Inline assets smaller than 4KB directly into JS/CSS to avoid extra requests
    assetsInlineLimit: 4096,
    rollupOptions: {
      plugins: [
        // Exclude legacy .woff files — only serve modern .woff2 (supported by all modern browsers)
        {
          name: 'exclude-woff',
          resolveId(id) {
            if (id.endsWith('.woff') && !id.endsWith('.woff2')) {
              return { id, external: true };
            }
          },
        },
      ],
      output: {
        // Split vendor code into separate chunks for better caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('@vue')) return 'vue-vendor';
            if (id.includes('@fontsource')) return 'fonts';
            if (id.includes('lucide')) return 'icons';
            return 'vendor';
          }
        },
      },
    },
  },
})
