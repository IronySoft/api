// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueResource from 'vue-resource';
import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(VueResource);
import { Form, HasError, AlertError } from 'vform'
import Swal from 'sweetalert2'
import iziToast from 'izitoast'
import axios from 'axios'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.use(Vuetify)
Vue.config.productionTip = false;

let bus = new Vue();
Vue.prototype.$bus = bus;
Vue.prototype.$Swal = Swal;


Vue.prototype.$iziToast = iziToast;
Vue.prototype.$axios = axios;

router.beforeEach((to,from,next)=>{
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

  next()
})
// that.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

// that.$axios.defaults.headers.common = {
//   'Authorization': 'Bearer ' + token,
// };
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

/* Alternative way*/

//import Vuex from 'vuex'
//Vue.use(Vuex);
//import {storage} from "./store/index";
//const store = new Vuex.Store(storage)
