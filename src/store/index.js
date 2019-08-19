//
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    brands: [],
    users: [],
  },

  getters: {
    getBrands(state) {
      return state.brands
    }, getUsers(state) {
      return state.users
    },
  },
  mutations: {
    fetchBrands(state, data) {
      state.brands = data
    }, fetchUsers(state, data) {
      state.users = data
    },
  },
  actions: {

    fetchBrands(context) {

      axios.get('http://127.0.0.1:8000/api/auth/brand').then(response => {
        console.log(response.data.data)

        context.commit('fetchBrands', response.data.data)
      }).catch(error => {
        alert('Server Error')
      })
    }, fetchUsers(context) {

      axios.get('http://127.0.0.1:8000/api/auth/user').then(response => {
        console.log(response.data.data)

        context.commit('fetchUsers', response.data.data)
      }).catch(error => {
        alert('Server Error')
      })
    },
  }

});

export default store;

