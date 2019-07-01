import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/firebase/firebase.js'
import './plugins/firebase/firestore.js'
import 'font-awesome/css/font-awesome.min.css' 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
