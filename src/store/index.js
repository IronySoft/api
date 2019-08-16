//
// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {
//     inventory: [],
//     cart: [],
//     categories: [],
//   },
//
//   getters: {
//     getInventory(state) {
//       return state.inventory
//     },
//     getCart(state) {
//       return state.cart
//     },getCategories(state) {
//       return state.categories
//     },
//
//   },
//   mutations: {
//
//     fetchCategoryInfo(state, data){
//       state.categories = data
//     }
//   },
//   actions:{
//     fetchCategoryInfo(context){
//       axios.post('http://127.0.0.1:8000/api/auth/category-info').then(res=>{
//         console.log(res.data.categories)
//
//         context.commit('fetchCategoryInfo',res.data.categories)
//       }).catch(err=>{
//         alert('No Cat data')
//       })
//     }
//   }
//
// });
//
// export default store;
//
