<template>
  <div class="row">
    <div class="col-md-3" v-for="item in items">
      <div class="card-group">
        <div class="card">
          <router-link :to="{path:'/item-details/'+item.id}">
            <img :src="item.photo" class="card-img-top" alt="">
          </router-link>
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">Price: {{item.price}}</p>
          </div>
          <div class="card-footer">
            <button @click="addToCart(item)" class="btn btn-block btn-info">Add To cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Inventory",
    data() {
      return {
        //items: []
      }
    },
    computed:{
      items(){
        return this.$store.getters.getInventory
      }
    },
    methods: {
      fetchItem() {
        axios.get('http://localhost:3000/items').then(responce => {
          //this.items = responce.data
          this.$store.commit('setInventoryData',responce.data)
        })
      },
      addToCart(item){
        //this.$store.commit("addToCartItem", item)
        //alert('Hiiiiiiii')
        this.$store.commit('addToCart',item)
      }
    },
    mounted() {
      this.fetchItem()
    },

  }
</script>

<style scoped>

</style>
