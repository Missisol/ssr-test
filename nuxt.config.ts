// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          innerHTML: `
          <m3sale-widget api-key="1258562c-bc46-4a21-9deb-5e852fc3eba0"></m3sale-widget>
          <script async src="https://widget.develop.m3.sale/widget-init.js"></script>         
          `,
          type: 'text/javascript',
          tagPosition: 'head',
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
