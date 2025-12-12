// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://127.0.0.1:3000/graphql',
      },
    },
  },
})