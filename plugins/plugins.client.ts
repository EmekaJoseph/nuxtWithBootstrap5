// @ts-nocheck
import vSelect from 'vue-select'
import VueDatePicker from '@vuepic/vue-datepicker';
import VueSweetalert2 from 'vue-sweetalert2'
import EasyDataTable from 'vue3-easy-data-table';
import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('v-select', vSelect)
    nuxtApp.vueApp.component('VueDatePicker', VueDatePicker);
    nuxtApp.vueApp.use(VueSweetalert2);
    nuxtApp.vueApp.component('EasyDataTable', EasyDataTable);
    nuxtApp.vueApp.use(Vue3ProgressPlugin);

})