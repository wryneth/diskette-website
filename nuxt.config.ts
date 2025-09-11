// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Example for Apple Touch Icon:
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      apiKey: process.env.YOUTUBE,
      kitKey: process.env.KIT,
    },
  },
  hotjar: {
    hotjarId: 6501775,
    scriptVersion: 6,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: true
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    'shadcn-nuxt',
    '@tresjs/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-module-hotjar'
  ],
    shadcn: {
      prefix: '',
      componentDir: './components/ui'
    },
  colorMode: {
    preference: 'system'
  }
})