<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add New Category</v-btn>
      </template>
      <v-form ref="form" @submit.prevent="saveCategoryInfo">
        <v-card>
          <v-card-title>
            <span class="headline">Provide Category Info</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>

                <v-flex xs12>
                  <v-text-field v-model="category.name" label="Category Name*" required></v-text-field>
                </v-flex>
                {{category.name}}
                <span class="error" v-if="errorMessage">{{errorMessage}}</span>
                <v-flex xs12>
                  <v-textarea
                    v-model="category.description"
                    label="Category Description*"
                    rows="1"
                  ></v-textarea>

                  <span class="error" v-if="errorMessageD">{{errorMessageD}}</span>

                </v-flex>

              </v-layout>
            </v-container>
            <small class="error">*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false || $refs.form.reset()">Close</v-btn>
            <v-btn type="submit" color="blue darken-1" flat @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: "AddCategory",
    data() {
      return {
        dialog: false,
        errorMessage: '',
        errorMessageD: '',
        category: [
          {
            name: '',
            description: '',
          }
        ]
      }
    },
    methods: {
      saveCategoryInfo() {

        //this.$axios.post('http://127.0.0.1:8000/api/auth/save?token='+localStorage.getItem('token'),
          this.$axios.post('http://127.0.0.1:8000/api/auth/save',
          {
            name:this.category.name,
            description:this.category.description,
          })

          .then(function (res) {
          console.log(res)
        }).catch(function (err) {
          alert('No Data')
        })
      }
    },
    watch: {
      'category.name': function () {
        if (this.category.name.length < 5) {
          this.errorMessage = 'Name at least 5'
        } else {
          this.errorMessage = ''
        }
      },
      'category.description': function () {
        if (this.category.description.length < 5) {
          this.errorMessageD = 'Description at least 5'
        } else {
          this.errorMessageD = ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
