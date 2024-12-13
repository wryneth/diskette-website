// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  modules: ['@primevue/nuxt-module', '@nuxt/ui'],

  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },

  compatibilityDate: '2024-12-12'
})