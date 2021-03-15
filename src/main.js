import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps"
import VueApexCharts from 'vue-apexcharts'
import { DatePicker } from 'ant-design-vue';
import Antd from 'ant-design-vue';
import VueMaterial from 'vue-material'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.use(VueMaterial)
Vue.use(Antd);
Vue.use(DatePicker);

import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'ant-design-vue/dist/antd.css'; 
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;
// Google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB0CuuQ5YQNoIc91Ser9cbum8gYy0oOf4w",
    libraries: 'places,drawing,visualization',
  }
});

moment.locale('id');

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
