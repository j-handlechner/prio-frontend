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
  },
  routeRules: {
    // Product page generated on-demand, revalidates in background
    '/library/**': {ssr: false},
    '/**': {ssr: false} // just for development
  },
  build: {
    transpile:
        process.env.NODE_ENV === 'production'
            ? [
              'naive-ui',
              'vueuc',
              '@css-render/vue3-ssr',
              '@juggle/resize-observer'
            ]
            : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
          process.env.NODE_ENV === 'development'
              ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
              : []
    }
  }
})
