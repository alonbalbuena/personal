export default defineNuxtConfig({
  target: 'static', router: {
    base: '/personal/_nuxt/'
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    documentDriven: true,
    layoutFallbacks: ['theme'],
  }
});
