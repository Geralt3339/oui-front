import Vue from 'vue'
import VueToast from 'vue-toast-notification'
// import 'vue-toast-notification/dist/theme-default.css'
import 'vue-toast-notification/dist/theme-sugar.css'

Vue.use(VueToast)

export const showToast = (options) => Vue.$toast.open(options)