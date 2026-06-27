import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path';

// Custom plugin to inline all compiled CSS directly into the HTML to remove render-blocking CSS requests
function inlineCssPlugin() {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      if (!ctx || !ctx.bundle) return html;
      const cssAssets = Object.keys(ctx.bundle).filter(key => key.endsWith('.css'));
      if (cssAssets.length === 0) return html;

      let newHtml = html;
      cssAssets.forEach(key => {
        const asset = ctx.bundle[key];
        const content = asset.source;
        const baseName = key.split('/').pop();
        
        // Match the link tag injected by Vite for this specific CSS file
        const linkRegex = new RegExp(`<link[^>]*href=["']?[^"']*/?assets/${baseName}["']?[^>]*>`, 'g');
        newHtml = newHtml.replace(linkRegex, '');
        
        // Inline the CSS content inside a style tag in the head
        newHtml = newHtml.replace('</head>', `<style>${content}</style></head>`);
      });
      return newHtml;
    }
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
    inlineCssPlugin(),
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
