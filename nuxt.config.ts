// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_YOUTUBE,
    },
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

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    'shadcn-nuxt',
    '@tresjs/nuxt',
  ],
    shadcn: {
      prefix: '',
      componentDir: './components/ui'
    },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light',    // fallback value if not system preference found
    classSuffix: ''       // This ensures dark mode works with 'dark' class
  }
})