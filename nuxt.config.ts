// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src:"https://widget.develop.m3.sale/widget-init.js",        
          type: 'text/javascript',
          async: true,
        },
      ],
    }
  },
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
