import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import Login from "./components/Login";
import Home from "./components/Home";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/about', component: HelloWorld }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')