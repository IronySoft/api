<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>

            </v-toolbar>
            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="submitLoginInfo">
                <v-text-field :rules="emailRules" v-model="form.email" prepend-icon="email" name="email" label="Email"
                              type="email"></v-text-field>
                <v-text-field :rules="passwordRules" v-model="form.password" id="password" prepend-icon="lock"
                              name="password" label="Password" type="password"></v-text-field>
                {{form.email}}
                {{form.password}}
                <v-card-actions>
                  <router-link :to="{path:'/register'}">Register?</router-link>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" :disabled="!valid" type="submit">Login</v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

</template>

<script>
  import {Form, HasError, AlertError} from 'vform'


  export default {
    data() {
      return {
        valid: true,

        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],

        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length <= 30 && v.length >= 5) || 'Password must be between 4 to 10 characters'
        ],
        form: new Form({
          email: '',
          password: '',
        })

      }
    },

    methods: {
      submitLoginInfo() {
        if (this.$refs.form.validate()) {
          this.$bus.$emit('loadingStatus', true);

          let that = this
          this.$axios.post('http://127.0.0.1:8000/api/auth/login', this.form)
            .then(function (res) {
              console.log(res);
              localStorage.setItem('token', res.data.access_token);
              localStorage.setItem('type', res.data.token_type);
              let token = localStorage.getItem('token')
              let type = localStorage.getItem('type')
              console.log(token)
              if (res.status !== 200) {
                alert('Not Possible')
              } else {
                if (token) {
                  that.$bus.$emit('loadingStatus', false);


                  that.$router.push('/home')
                } else {
                  that.$bus.$emit('loadingStatus', false);
                  that.$Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    type: 'error',
                    confirmButtonText: 'Cool'
                  })
                }
              }
            }).catch(function (err) {
            if (err) {
              that.$bus.$emit('loadingStatus', false);
              that.$iziToast.error({
                position: 'topCenter',
                title: 'Error',
                message: "Email or Password doesn't match",
              });
            }

          })
        }
      },
    },
    mounted() {
      if (localStorage.getItem('token')) {
        this.$router.push('home')
      }
    }
  }
</script>

<style scoped>

</style>
