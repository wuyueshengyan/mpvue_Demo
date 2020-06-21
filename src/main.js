import Vue from 'vue'
import App from './App'
import banner from '@/components/swiper'
import picture from '@/components/picture'
import { request } from './utils/request'
Vue.prototype.$request = request
Vue.component('banner', banner)
Vue.component('Picture', picture)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()