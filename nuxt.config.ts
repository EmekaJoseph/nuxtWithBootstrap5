// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // For static hosting
  ssr: false,

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'vue-select/dist/vue-select.css',
    '@vuepic/vue-datepicker/dist/main.css',
    'sweetalert2/dist/sweetalert2.min.css',
    'vue3-easy-data-table/dist/style.css',
    '@marcoschulte/vue3-progress/style'
    // 'main.css'
  ],

  plugins: [
    './plugins/bootstrap.client.ts',
    './plugins/plugins.client.ts'
  ],

  modules: ['@pinia/nuxt'],
  pinia: {
    // ##### make pinia look for all folders that have stores
    // storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },

  // routeRules: {
  //   '/auth/dashboard': { redirect: '/account/dashboard' },
  // },


  // Build configuration
  app: {
    // buildAssetsDir: '_nuxt/'
  },

})

// ############ Commands ####################

// https://pinia.vuejs.org/ssr/nuxt.html#Installation
// npx nuxi@latest module add pinia

// npm install -S vue-sweetalert2