import Vue from 'vue'
import App from './App.vue'
import wb from './registerServiceWorker'
import router from './router'
import store from './store'

// Custom Styles
import './assets/styles/styles.css'

// Bottstrap 4.6
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// FontAwesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$workbox = wb
