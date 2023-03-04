import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sanity from 'astro-sanity'
import sanityConfig from 'api/src/sanity/sanity.config'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	integrations: [
    mdx(), 
    tailwind(), 
    sanity(sanityConfig),
    react(),
  ],
  output: 'server',
  adapter: vercel({
    analytics: true,
    includeFiles: ['../../packages/api/src/sanity/sanity.config.ts']
  })
});
