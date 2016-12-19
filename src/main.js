import Vue from 'vue'
import App from './App'

import router from './router'
import firebase from 'firebase'
import moment from 'moment'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

  firebase.initializeApp(process.env.FIREBASE)

  Vue.filter('upper', (value) => {
    if(typeof value === 'string') {
      return value.toUpperCase()
    }
    return value
  })

  const ticker = new Vue({
    data: () => ({
      tick: 0
    }),
    created () {
      setInterval(() => {
        this.tick = Date.now()
      }, 1000)
    }
  })

  Vue.filter('fromNow', (value) => {
    ticker.tick
    return moment(value).fromNow()
  })

new Vue({
  el: '#app',
  router,
  ...App
})