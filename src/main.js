import Vue from 'vue'
import App from './App'

import router from './router'
import firebase from 'firebase'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

  const config = {
    apiKey: "AIzaSyAzcEEZOrdHe5OamHy9T59QpGgxk-poVb4",
    authDomain: "twisser-5cc2d.firebaseapp.com",
    databaseURL: "https://twisser-5cc2d.firebaseio.com",
    storageBucket: "twisser-5cc2d.appspot.com",
    messagingSenderId: "666599122913"
  }

  firebase.initializeApp(config)

  Vue.filter('upper', (value) => {
    if(typeof value === 'string') {
      return value.toUpperCase()
    }
    return value
  })

new Vue({
  el: '#app',
  router,
  ...App
})