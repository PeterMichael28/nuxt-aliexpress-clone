// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
 devtools: { enabled: true },
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },
 modules: [
  'nuxt-icon',
  'nuxt-lodash',
  '@pinia/nuxt',
  '@pinia-plugin-persistedstate/nuxt',
  '@nuxtjs/tailwindcss',
 '@nuxtjs/supabase'
 ],
 build: {
  transpile: ['pinia-plugin-persistedstate'],
 },
 runtimeConfig: {
  public: {
   stripePk: process.env.STRIPE_PK_KEY,
  },
 },
    // ...
    supabase: {
      // Options
      redirectOptions: {
        login: '/login',
        callback: '/',
        exclude: [],
      }
    
    },

  
 app: {
  head: {
   script: [{ src: 'https://js.stripe.com/v3/', defer: true }],
  },
 },
});



