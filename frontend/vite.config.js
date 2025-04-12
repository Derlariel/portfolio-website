// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  resolve:{
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    // หากต้องการใช้ daisyUI
    {
      daisyui: {
        themes: ["light","synthwave"],
      },
    },
  ],
});
