import { alias } from '../../alias'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    '@nuxt/devtools',
    "@unocss/nuxt",
    "@vite-pwa/nuxt",
    "@element-plus/nuxt",
  ],
  alias,
  css: [
    '@unocss/reset/tailwind.css',
    'uno.css',
  ],
  components: [{ path: '../../packages/ui/src/components', extensions: ['vue'] }],
  typescript: {
    strict: true,
    shim: false,
  },
  vite: {
    optimizeDeps: {
      // include: ['mermaid'],
      exclude: ['pinia'],
    },
  },
  app: {
    head: {
      title: 'Quick Web',
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'quick web tool' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  }, 

})