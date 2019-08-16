<template>
  <div class="justify-content-center">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submitLoginInfo"
    >
      <v-text-field
        v-model="form.email"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      {{form.email}}
      <v-text-field
        v-model="form.password"
        :rules="emailRules"
        label="Password"
        type="password"
        required
      ></v-text-field>
      {{form.password}}
      <v-btn
        :disabled="!valid"
        class="btn btn-primary"
        type="submit"
      >
        Login
      </v-btn>

    </v-form>

  </div>
</template>

<script>
  import {Form, HasError, AlertError} from 'vform'

  export default {
    data() {
      return {
        valid: true,

        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 20) || 'Name must be less than 10 characters'
        ],

        emailRules: [
          v => !!v || 'Password is required',
          v => (v && v.length <= 20 && v.length >= 5) || 'Password must be between 4 to 10 characters'
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
          this.$http.post('http://127.0.0.1:8000/api/auth/login', this.form)
            .then(function (res) {

              localStorage.setItem('token', res.body.access_token);
              let token= localStorage.getItem('token')
              if (token){
                that.$bus.$emit('loadingStatus', false);
                that.$router.push('/home')
              }else {
                that.$bus.$emit('loadingStatus', true);
              }

            }).catch(function (err) {
            alert('No')
          })
        }
      },
    },
    mounted() {
      if (localStorage.getItem('token')){
        this.$router.push('home')
      }
    }
  }
</script>

<style scoped>

</style>
