<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <add-category></add-category>
        <table class="table table-hover">
          <thead>
          <tr class="error">
            <th scope="col">#</th>
            <th scope="col">Category Name</th>
            <th scope="col">Category Description</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(category, i) in categories">
            <th scope="row">{{++i}}</th>
            <td>{{category.name}}</td>
            <td>{{category.description}}</td>
            <td>
              <edit-category :id="category.id"></edit-category>
              <router-link :to="{path:'/home/category-edit/'+category.id}">
                <v-icon title="delete">delete</v-icon>
              </router-link>

            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import EditCategory from './EditCategory'
  import AddCategory from './AddCategory'

  export default {
    components: {
      'edit-category': EditCategory,
      'add-category': AddCategory
    },
    data: () => ({
      dialog: false,

    }),

    created(){
      this.$store.dispatch('fetchCategoryInfo')
    },

    computed:{
      categories()
      {
        return this.$store.getters.getCategories
      }

    },
    methods: {
      editCategory(id){
        this.$axios.post('http://127.0.0.1:8000/api/auth/me', id).then(res=>{
          //alert('Id Sending')
          console.log(res)
        }).catch(err=>{
          alert('Id Not send')
        })
      }
    },
    updated() {
      //this.$store.dispatch('fetchCategoryInfo')
    }
  }
</script>
<style scoped>

</style>
