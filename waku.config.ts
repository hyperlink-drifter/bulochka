import { defineConfig } from 'waku/config';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  unstable_viteConfigs: {
    common: () => ({
      plugins: [tailwindcss(), svgr()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
          '@@': fileURLToPath(new URL('.', import.meta.url)),
        },
      },
    }),
  },
});
