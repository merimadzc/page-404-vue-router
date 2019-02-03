# page-404-vue-router

## Creating router and routes 
```
import Router from 'vue-router'
/* import your Home and PageNotFound components */

Vue.use(Router)

const router = new Router({
  mode: 'history',
  /* Routes outes */
  routes: [
    { path: '/home', component: Home }, // Home Page component
    { path: '*', component: PageNotFound } // 404 Page component
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
