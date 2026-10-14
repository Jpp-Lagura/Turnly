// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/icon/module'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app/',
  css: [
    '~/assets/css/layout.css',  // color variables
    '~/assets/css/main.css',
    '~/assets/css/auth.css',   // resets + base typography
  ]
})
