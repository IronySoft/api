<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card-group">
        <div class="card">
          <img :src="item.photo" class="card-img-top" alt="">

        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">Price:{{item.description}}</p>
            <p class="card-text text-danger"><b><i>Price:{{item.price}} tk.</i></b></p>
          </div>
          <div class="card-footer">
            <button @click="addToCart(item)" class="btn  btn-info">Add To cart</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "ItemDetails",
    data() {
      return {
        item: []
      }
    },
    methods: {
      fetchItemDetails() {
        var self = this;
        axios.get('http://localhost:3000/item/' + this.$route.params.id).then(function (responce) {
          //alert('Hi')
          //console.log(responce.data)
          self.item = responce.data
        })
      },
      addToCart(item){
        this.$store.commit('addToCart', item)
      }
    },
    mounted() {
      this.fetchItemDetails()
    }
  }
</script>

<style scoped>

</style>
