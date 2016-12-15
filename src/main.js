// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Profile from './components/Profile'
import About from './components/About'
import VueRouter from 'vue-router'

import '!script!jquery'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile/:name', component: Profile },
    { path: '/about', component: About },
    { path: '*', redirect: '/' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})
