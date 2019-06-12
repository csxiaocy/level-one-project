import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'

import Moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/iconfont.css'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.prototype.moment = Moment

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueI18n)

const router = new VueRouter({
  mode: 'history',
  routes
})

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
