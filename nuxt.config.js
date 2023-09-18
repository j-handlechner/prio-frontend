// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  devtools: { enabled: true },
  css: [
    "@/assets/fonts.css",
    "@/styles/main.scss",
    "@/styles/mixins.scss",
    "primevue/resources/themes/lara-light-blue/theme.css"
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in"},
  },
  routeRules: {
    '/library/**': {ssr: false},
    '/**': {ssr: false} // just for development
  },
    build: {
        transpile: ["primevue"]
    }
})
