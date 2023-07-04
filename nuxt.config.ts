// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: false 
  },
  typescript: {
    shim: false,
  },

  routeRules: {
    '/': { },
    // '/users/**': { swr: true },
  },
})
