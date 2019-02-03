import Vue from 'vue'
import App from './App.vue'
/* vue-router */
import Router from 'vue-router'
/* Components */
import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
   // { path: '*', component: PageNotFound }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')