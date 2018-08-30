import Vue from 'vue'
import App from './App.vue'
import router from './router'

//MIT Lisenssi https://github.com/vuetifyjs/vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import finland from './i18n/vuetify/fi_FI.ts'


Vue.use(Vuetify,{
	lang:{
		locale:{finland},
		current:'finland'
	}
})
Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App)
}).$mount('#app')
