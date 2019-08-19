//
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    brands: [],
  },

  getters: {
    getBrands(state) {
      return state.brands
    },
  },
  mutations: {
    fetchBrands(state, data){
      state.brands = data
    }
  },
  actions:{

    fetchBrands(context){

      axios.get('http://127.0.0.1:8000/api/auth/brand').then(response => {
        //that.brands = response.data.data
        console.log(response.data.data)

        context.commit('fetchBrands' ,response.data.data)
      }).catch(error => {
        alert('Server Error')
      })
    }
  }

});

export default store;

