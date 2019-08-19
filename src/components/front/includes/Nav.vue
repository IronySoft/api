<template>
  <div>
    <v-toolbar dark>

      <v-toolbar-side-icon @click.stop="drawer = !drawer">

      </v-toolbar-side-icon>

      <router-link v-if="!checker" :to="{path:'/brand'}">
        <v-toolbar-title>User Brand</v-toolbar-title>
      </router-link>
      <router-link v-if="checker" :to="{path:'/user'}">
        <v-toolbar-title>User Info</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <router-link :to="{path:'/'}">
          <v-btn flat>Home</v-btn>
        </router-link>

      </div>
      <Dropdown1></Dropdown1>
    </v-toolbar>
    <v-layout>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary

      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

          <my-side-bar></my-side-bar>



      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<script>
  import Sidbar from './Sidbar'
  import Dropdown1 from './Dropdown1'

  export default {
    name: "Nav",
    data() {
      return {
        checker: '',
        drawer: null,
        name:''

      }
    },


   props: {
      source: String
    },
    components: {
      'my-side-bar':Sidbar,
      Dropdown1
    },
    methods:{
      user_name(){
        this.name = localStorage.getItem('name')
        let type = localStorage.getItem('type')
        if (type==='bearer') {
          this.checker =true
        }else {
          this.checker =false
        }
      }
    },
    mounted() {
       this.user_name()
    }

  }
</script>

<style scoped>

</style>
