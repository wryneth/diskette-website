// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]

    }

  },

  runtimeConfig: {
    public: {
      youtubeApiKey: process.env.VUE_APP_YOUTUBE_API_KEY || '' // Default to empty string if not set
    }
  },


  modules: [
    '@primevue/nuxt-module',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/color-mode'
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },

  compatibilityDate: '2024-12-12'
})