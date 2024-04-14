import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import astroExpressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'
import million from 'million/compiler'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['oslo'],
    },
    plugins: [
      tailwindcss(),
      million.vite({
        mode: 'react',
        server: true,
        auto: {
          threshold: 0.05,
          skip: ['useBadHook', /badVariable/g],
        },
      }),
    ],
  },
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    react(),
    starlight({
      title: 'SALO AI',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/tailwind.css'],
      editLink: {
        baseUrl: 'https://github.com/Frikadellios/salo-ai',
      },
      logo: {
        src: './src/assets/favicon.svg',
        replacesTitle: false,
      },
      components: {
        Header: './src/components/Header.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        Footer: './src/components/ConditionalFooter.astro',
      },
    }),
    astroExpressiveCode(),
    mdx(),
  ],
})
