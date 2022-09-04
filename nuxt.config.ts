import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static', router: {
    base: '/personal/'
  }, vite: {
    base: '/personal'
  }
});