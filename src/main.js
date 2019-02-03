import Vue from 'vue'
import App from './App.vue'
/* vue-router */
import Router from 'vue-router'
/* Components */
import Home from './components/Home'
import PageNotFound from './components/404'
/* Style */
import './style.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '*', component: PageNotFound }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')