// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    }
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  modules: ["nuxt-icon", "@nuxthq/ui", "nuxt-swiper"],
})