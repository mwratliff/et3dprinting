import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/HelloWorld.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).mount('#app');
