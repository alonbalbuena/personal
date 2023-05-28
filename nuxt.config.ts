export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  target: 'static', router: {
    base: '/personal/_nuxt/'
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    documentDriven: true,
    layoutFallbacks: ['theme'],
  },
  css: [
    'assets/css/main.css',
  ]
});
