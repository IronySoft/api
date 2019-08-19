<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>

          <div class="card-body">
            <form @submit.prevent="registerMethod">


              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input v-model="register.name" id="name" type="text" class="form-control " name="name" required autocomplete="name" autofocus>


                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input v-model="register.email" id="email" type="email" class="form-control " name="email"  required autocomplete="email">


                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input v-model="register.password" id="password" type="password" class="form-control " name="password" required autocomplete="new-password">



                </div>
              </div>

              <div class="form-group row">
                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                <div class="col-md-6">
                  <input v-model="register.password_confirmation" id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "create",
      methods:{
          registerMethod(){
            this.$axios.post('http://127.0.0.1:8000/api/register', this.register).then(response=>{
              console.log(response)
            }).catch(error=>{
              console.log(error.response)
              if (status===500){
                alert('hey');
              }
              alert('No')
            })

          },
        token() {
          let token = localStorage.getItem('token')

          if (!token) {
            this.$router.push('/register')
          } else
            this.$router.push('/home')
        },
      },
      data(){
          return{
            register:{
              name:'',
              email:'',
              password:'',
              password_confirmation:'',
            }
          }
      },
      mounted() {
          this.token()
      }

    }
</script>

<style scoped>

</style>
