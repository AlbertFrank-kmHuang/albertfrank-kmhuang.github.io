import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://albertfrank-kmhuang.github.io',
  output: 'static',

  redirects: {
    '/life': '/life/music',
  },
});