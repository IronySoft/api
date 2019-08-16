<template>
  <div>
    <v-toolbar dark>

      <v-toolbar-side-icon @click.stop="drawer = !drawer">

      </v-toolbar-side-icon>

      <router-link :to="{path:'/'}">
        <v-toolbar-title>Shopping Cart Home</v-toolbar-title>
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
              <v-list-tile-title>John Leider</v-list-tile-title>
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
        check: false,
        drawer: null,

      }
    },


   props: {
      source: String
    },
    components: {
      'my-side-bar':Sidbar,
      Dropdown1
    }

  }
</script>

<style scoped>

</style>
