// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/assets/fonts.css",
    "@/styles/main.scss",
    "@/styles/mixins.scss",
    "primevue/resources/themes/lara-light-blue/theme.css"
  ],
  modules: [
      '@nuxtjs/tailwindcss'
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
