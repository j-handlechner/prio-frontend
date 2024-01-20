import sliderQuestion from "./api/src/api/slider-question/controllers/slider-question";
import sliderUserAnswer from "./api/src/api/slider-user-answer/controllers/slider-user-answer";
import surveyResult from "./api/src/api/survey-result/controllers/survey-result";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss'],
  strapi: {
    url: 'https://prio-api.gasser-bastian.at',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
    entities: [sliderQuestion, sliderUserAnswer, surveyResult]
  },
  devtools: { enabled: true },
  css: [
    "@/assets/fonts.css",
    "@/styles/main.scss",
    "@/styles/mixins.scss",
    "primevue/resources/themes/lara-light-blue/theme.css",
    "/assets/global.css"
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in"},
  },
  routeRules: {
    '/**': {ssr: false} // just for development
  },
    build: {
        transpile: ["primevue"]
    }
})
