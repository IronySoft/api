<template>
  <div >
    <ul class="list-group">
      <li class="list-group-item">Shopping Cart</li>
      <li class="list-group-item" v-for="(cartItem,i) in items" :key="i">
        <div class="row">
          <div class="col-sm-4 col-md-4 ">
            <img class="cartItem" :src="cartItem.photo" width="75px" height="100px">
          </div>
          <div class="col-sm-6 col-md-6">
            <ul class="list-group">
              <li class="list-group-item">{{cartItem.title}}</li>
              <li class="list-group-item">Price: {{cartItem.price}} tk.</li>
            </ul>
          </div>
          <div class="col-sm-2 col-md-1">
            <button @click="removeItem(i)" class="btn btn-danger">X</button>
          </div>
        </div>
      </li>
      <li class="list-group-item">Sub-total: {{totall}}</li>
      <li class="list-group-item">
        <button class="btn btn-primary btn-block justify-content-around">View Cart</button>
        <button class="btn btn-primary btn-block justify-content-around">Checkout</button>

      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    data() {
      return {
        x:'D'
      }
    },
    computed: {
      totall() {
        var sum=0;
        this.items.forEach(item=>{
          sum+=parseFloat(item.price)
        });
        return sum.toFixed(2);
      },
      items(){
        return this.$store.getters.getCart
      }
    },
    methods:{
      removeItem(i){
        this.$store.commit('removeItem',i)
      }
    }
  }
</script>

<style scoped>

</style>
