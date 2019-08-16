<template>
  <div class="text-xs-center">
    <v-menu open-on-hover top offset-y>

      <template dark v-slot:activator="{ on }">
        <v-toolbar-side-icon v-on="on">

        </v-toolbar-side-icon>
      </template>


      <v-list>
        <v-list-tile >
          <v-list-tile-title @click="logout" >
            Logout
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title @click="login">
              Login
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }),
    methods: {
      logout() {
        localStorage.clear()
        this.$router.push('/')
        this.check = true

      }, login() {
        this.$router.push('/')
        this.check = true
      },

    },
  }
</script>

<style scoped>

</style>
