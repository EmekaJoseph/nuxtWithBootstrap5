// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'vue-select/dist/vue-select.css',
    '@vuepic/vue-datepicker/dist/main.css',
    'sweetalert2/dist/sweetalert2.min.css',
    'vue3-easy-data-table/dist/style.css'
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
})

// ############ Commands ####################

// https://pinia.vuejs.org/ssr/nuxt.html#Installation
// npx nuxi@latest module add pinia

// npm install -S vue-sweetalert2