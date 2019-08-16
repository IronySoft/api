<template>
<v-app>
    <Nav></Nav>
    <div>
        <router-view></router-view>
      <img v-model="img" v-if="img" src="../static/img/loading.gif">
    </div>

    <!--<div class="row">-->
      <!--<img v-model="img" v-if="img" src="../static/img/loading.gif">-->
    <!--</div>-->
    <my-footer></my-footer>
</v-app>
</template>

<script>
  import Nav from './components/front/includes/Nav'

  import Footer from './components/front/includes/Footer'
  // import Nav from './components/views/Nav'

  export default {
    name: 'App',
    components: {
      Nav,
      'my-footer': Footer,
      //Cart
    },
    data() {
      return {
        img: false
      }
    },
    created() {
      this.$bus.$on('loadingStatus', pay => {
        this.img = pay
      })
    }
  }
</script>

<style>
  .container {
    margin-top: 10px;
  }
</style>
