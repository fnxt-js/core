import {defineConfig} from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const base = '/core';
// https://astro.build/config

// https://astro.build/config
export default defineConfig({
    integrations: [
        // Enable Preact to support Preact JSX components.
        preact(),
        // Enable React for the Algolia search component.
        react(),
        tailwind(),
    ],
    site: 'https://fnxt-js.github.io',
    base
});
process.env.base = base;
