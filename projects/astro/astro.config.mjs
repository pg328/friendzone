import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sanity from 'astro-sanity'
import sanityConfig from 'api/src/sanity/sanity.config'
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [
    mdx(), 
    tailwind(), 
    sanity(sanityConfig),
    preact({compat: true})
  ],
});
