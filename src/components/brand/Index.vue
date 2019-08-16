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
                        <v-btn @click="mode=false, brand.reset()" depressed color="red lighten-2" dark v-on="on">
                          <v-icon left>dashboard</v-icon>
                          Add New Brand
                        </v-btn>

                      </v-flex>
                    </template>

                    <v-card>
                      <v-form @submit.prevent="mode?update():create()" ref="form">

                        <v-card-title>
                          <span class="headline">{{mode?'Update':'Create'}} Brand</span>

                        </v-card-title>
                        <v-card-text>
                          <v-container grid-list-md>
                            <v-layout wrap>


                              <v-flex xs12>
                                <v-text-field v-model="brand.name" label="Name"
                                              hint="Give Full Name of Teacher"
                                              :rules="nameRules"
                                              required>

                                </v-text-field>
                                {{brand.name}}
                              </v-flex>
                              <v-flex xs12>
                                <v-text-field :rules="descriptionRules"
                                              v-model="brand.description" label="Description"
                                              hint="Give a valid description" required>

                                </v-text-field>
                                {{brand.description}}
                              </v-flex>

                            </v-layout>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="red darken-1" class="white--text" text @click="dialog = false">Close
                          </v-btn>
                          <v-btn color="blue darken-1" class="primary" type="submit"> Save
                            <!--{{mode? 'Update':'Create'}}-->
                          </v-btn>
                        </v-card-actions>
                      </v-form>
                    </v-card>

                  </v-dialog>
                </v-layout>

              </div>

              <h4 class="card-title" style="margin-left: 330px"> Manage Brand Information</h4>


            </div>

            <!--Card Body-->
            <div class="card-body">


              <table class="table table-hover">
                <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th class="text-center" scope="col">Action</th>
                </tr>
                </thead>

                <tbody>

                <tr v-for="(brand, index) in brands">
                  <th>{{index++}}</th>
                  <td>{{brand.name}}</td>
                  <td>{{brand.description}}</td>


                  <td class="text-center">

                    <button @click="editBrand(brand)" class="btn btn-primary btn-sm"
                            type="button">
                      <i class="fa fa-edit"></i>
                    </button>

                    <button @click="destroyBrand(brand)" class="btn btn-danger btn-sm"
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
        brand: new Form({
          name: '',
          description: '',
        }),
        id: '',

        brands: [],
        mode: false,

        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ], descriptionRules: [
          v => !!v || 'Description is required',
          v => (v && v.length >= 5) || 'Description must be at-least 5 characters',
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
          this.$axios.post('http://127.0.0.1:8000/api/auth/brand', this.brand).then(res => {
            that.index()
            that.brand.reset()

          }).catch(err => {
            alert('No')
          })
          //console.log(this.teacher)
        } else {
          this.dialog = true
        }
      },
      index() {
        let that = this
        this.$axios.get('http://127.0.0.1:8000/api/auth/brand').then(responce => {
          that.brands = responce.data.brands
          //alert(responce)
        }).catch(error => {
          alert('No')
        })
      },
      token() {
        let token = localStorage.getItem('token')
        if (!token) {
          this.$router.push('/')
        } else {
          this.$router.push('/brand')
        }
      },

      editBrand(brand) {
        this.id = brand.id
        this.mode = true
        this.brand.reset()
        this.brand.fill(brand)
        this.dialog = true


      },
      update() {
        let that = this
        if (this.$refs.form.validate()) {
          this.dialog = false
          this.$axios.put('http://127.0.0.1:8000/api/auth/brand/' + this.id, this.brand).then(res => {
            that.index()
            that.brand.reset()

          }).catch(err => {
            alert()
          })
        } else {
          this.dialog = true
        }
      },
      destroyBrand(brand) {
        if (confirm('Are you sure?')) {
          let that = this
          this.dialog = false
          this.$axios.delete('http://127.0.0.1:8000/api/auth/brand/' + brand.id)
            .then(res => {
            that.index()
            that.brand.reset()

          }).catch(err => {
            alert('Data not deleted')
          })
        }

      }
    },
    mounted() {
      this.index()
      this.token()

    }
  }
</script>

<style scoped>
</style>
