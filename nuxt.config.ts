// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "@/styles/main.scss",
    "@/styles/mixins.scss"
  ],
  modules: [
      '@nuxtjs/tailwindcss'
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in"},
  }
})
