<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <!--Card Header-->
            <div class="card-header">
              <div class="card-tools">

                <v-layout justify-center>
                  <v-dialog v-model="dialog" persistent max-width="600px">

                    <template v-slot:activator="{ on }">
                      <v-flex>
                        <!--<v-btn @click="mode=false, user.reset()" depressed color="red lighten-2" dark v-on="on">-->
                        <!--<v-icon left>dashboard</v-icon>-->
                        <!--Add New user-->
                        <!--</v-btn>-->

                      </v-flex>
                    </template>

                    <v-card>
                      <v-form @submit.prevent="mode?update():create()" ref="form">

                        <v-card-title>
                          <span class="headline">{{mode?'Update':'Create'}} user</span>

                        </v-card-title>
                        <v-card-text>
                          <v-container grid-list-md>
                            <v-layout wrap>


                              <v-flex xs12>
                                <v-text-field v-model="user.name" label="Name"
                                              hint="Give Full Name of Teacher"
                                              :rules="nameRules"
                                              required>

                                </v-text-field>

                              </v-flex>
                              <v-flex xs12>
                                <v-text-field :rules="emailRules"
                                              v-model="user.email" label="Email"
                                              hint="Give a valid Email" required>

                                </v-text-field>

                              </v-flex>
                              <!--<v-flex xs12>-->
                              <!--<v-switch v-model="user.role_id" @change="changeToAdmin" class="mx-2"-->
                              <!--label="Make Admin ?"></v-switch>-->
                              <!--{{user.role_id}}-->
                              <!--</v-flex>-->

                            </v-layout>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="red darken-1" class="white--text" text @click="dialog = false">Close
                          </v-btn>
                          <v-btn color="blue darken-1" class="primary" type="submit">
                            {{mode? 'Update':'Create'}}
                          </v-btn>
                        </v-card-actions>
                      </v-form>
                    </v-card>

                  </v-dialog>
                </v-layout>

              </div>

              <h4 class="card-title" style="margin-left: 330px"> Manage user Information</h4>


            </div>

            <!--Card Body-->
            <div class="card-body">


              <table class="table table-hover">
                <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th class="text-center" scope="col">Action</th>
                </tr>
                </thead>

                <tbody>

                <tr v-for="(user, index) in users">
                  <th>{{index++}}</th>
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>


                  <td class="text-center">

                    <button @click="editUser(user)" class="btn btn-primary btn-sm"
                            type="button">
                      <i class="fa fa-edit"></i>
                    </button>

                    <button @click="destroyUser(user)" class="btn btn-danger btn-sm"
                            type="button">
                      <i class="fa fa-trash"></i>
                    </button>

                  </td>
                </tr>

                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>


    </div>
  </v-app>
</template>


<script>
  import Vue from 'vue'
  import {Form, HasError, AlertError} from 'vform'

  Vue.component(HasError.name, HasError)
  Vue.component(AlertError.name, AlertError)
  export default {
    name: "Index",
    data() {
      return {
        dialog: false,
        user: new Form({
          name: '',
          email: '',
          //role_id: 2,
        }),
        id: '',

        // users: [],
        mode: false,

        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 20) || 'Name must be less than 10 characters',
        ], emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],

      }
    },
    methods: {
      create() {
        this.mode = false
        let that = this
        this.dialog = false
        if (this.$refs.form.validate()) {
          this.dialog = false
          this.$axios.post('http://127.0.0.1:8000/api/auth/user', this.user).then(res => {
            // that.index()
            that.$store.dispatch('fetchUsers')
            that.user.reset()

          }).catch(err => {
            alert('No')
          })
          //console.log(this.teacher)
        } else {
          this.dialog = true
        }
      },

      changeToAdmin() {
        if (this.user.role_id === 1) {
          this.user.role_id = 2
        } else {
          this.user.role_id = 1
        }
      },
      editUser(user) {
        this.id = user.id
        this.mode = true
        this.user.reset()
        this.user.fill(user)
        this.dialog = true


      },
      update() {
        let that = this
        if (this.$refs.form.validate()) {
          this.dialog = false
          this.$axios.put('http://127.0.0.1:8000/api/auth/user/' + this.id, this.user).then(res => {
            that.$store.dispatch('fetchUsers')
            that.user.reset()

          }).catch(err => {
            alert()
          })
        } else {
          this.dialog = true
        }
      },
      destroyUser(user) {
        if (confirm('Are you sure?')) {
          let that = this
          this.dialog = false
          this.$axios.delete('http://127.0.0.1:8000/api/auth/user/' + user.id)
            .then(res => {
              that.$store.dispatch('fetchUsers')
              that.user.reset()

            }).catch(err => {
            alert('Data not deleted')
          })
        }

      }
    },
    mounted() {
      this.$store.dispatch('fetchUsers')

    },
    computed: {
      users() {
        return this.$store.getters.getUsers

      }
    },
    created() {
      let token = localStorage.getItem('token')
      let type = localStorage.getItem('type')
      if (token && type === 'bearer') {
        this.$router.push('/user')
      } else {
        this.$router.push('/brand')
      }
    }
  }
</script>


<style scoped>

</style>
