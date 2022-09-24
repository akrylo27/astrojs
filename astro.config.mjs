import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  server: {
    host: true
  },
  integrations: [vue()],
  output: 'server',
  adapter: node()
});