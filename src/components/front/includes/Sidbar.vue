<template>
  <span>

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
      <router-link :to="{path:'/register'}">
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>supervised_user_circle</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Account</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </router-link>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <router-link v-if="!checker" :to="{name:'brand.index'}">
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>category</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Brand</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </router-link>

     <template v-if="checker">
        <router-link   :to="{name:'user.index'}">
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>category</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>User</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      </router-link>
     </template>

    </v-list>
  </span>
</template>

<script>
  export default {
    data() {
      return {
        checker:''
      }
    },
    mounted() {
      this.token()

    },
    methods: {
      token() {
        let token = localStorage.getItem('token')

        if (!token) {
          this.$router.push('/login')
        } else
          this.$router.push('/home')
      },
      type(){
        let typ = localStorage.getItem('type')
        if (typ === 'bearer') {
          this.checker =true
          return true
        } else {
          this.checker =false
          return false
        }

      }

    },

    created() {
      this.type()
    },

    watch: {
      $route(to, from) {
        this.type()
      }
    },

  }
</script>

<style scoped>

</style>
