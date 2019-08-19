<template><h1>Hello</h1>
  <!--<v-carousel-->
    <!--cycle-->
    <!--height="400"-->
    <!--hide-delimiter-background-->
    <!--show-arrows-on-hover-->
  <!--&gt;-->
    <!--<v-carousel-item-->
      <!--v-for="(slide, i) in slides"-->
      <!--:key="i"-->
    <!--&gt;-->
      <!--<v-sheet-->
        <!--:color="colors[i]"-->
        <!--height="100%"-->
      <!--&gt;-->
        <!--<v-row-->
          <!--class="fill-height"-->
          <!--align="center"-->
          <!--justify="center"-->
        <!--&gt;-->
          <!--<div class="display-3">{{ slide }} Slide</div>-->
        <!--</v-row>-->
      <!--</v-sheet>-->
    <!--</v-carousel-item>-->
  <!--</v-carousel>-->
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

<style scoped>

</style>
