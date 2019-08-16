<template>
  <span v-if="item===true">

    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

        <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <router-link :to="{name:'category'}">
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>category</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Category</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </router-link>
      <router-link :to="{name:'category'}">
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>account_balance</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Supplier</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </router-link>
      <router-link :to="{name:'category'}">
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>commute</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Product</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </router-link>
      <router-link :to="{name:'category'}">

      </router-link>
      <router-link :to="{name:'category'}">
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>book</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Shop</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </router-link>

    </v-list>
  </span>
</template>

<script>
  export default {
    data() {
      return {
        right: null,
        item: false
      }
    },
    mounted() {
      this.tokening()

    },
    methods: {
      tokening() {
        let token = localStorage.getItem('token')
        if (!token) {
          this.item = false
        } else
          this.item = true
      }
    },

    // watch: {
    //   'item': function () {
    //     alert('Hi')
    //   }
    // },

  }
</script>

<style scoped>

</style>
