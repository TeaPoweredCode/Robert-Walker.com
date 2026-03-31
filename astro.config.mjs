// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: []
  },
  integrations: [mdx()],
  fonts: [{
    provider: fontProviders.google(),
    name: "Roboto",
    cssVariable: "--font-roboto",
    subsets: ["latin"],
    weights: [300,400,500,700],
    styles: ["normal"],
  }]
});