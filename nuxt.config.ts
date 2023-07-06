// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: false 
  },
  modules: [
    ['@pinia/nuxt', {
      autoImports: [
        'defineStore', 'skipHydrate' // import { defineStore } from 'pinia'
      ],
    }],
  ],
  typescript: {
    shim: false,
  },
  routeRules: {
    '/': { },
    // '/users/**': { swr: true },
  },
})
