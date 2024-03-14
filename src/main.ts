import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";


import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(VueApexCharts)

app.mount('#app')


app.config.globalProperties.$apexcharts = ApexCharts;

// Add this when into a TypeScript codebase
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $apexcharts: typeof ApexCharts;
  }
}
