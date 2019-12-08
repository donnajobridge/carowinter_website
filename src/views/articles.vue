<template>
  <v-container fluid>
    <v-row justify='center'>
      <v-col cols=6 sm=4 md=3 v-for='(card, index) in allArticles' :key='index'>
        <v-card flat color='grey lighten-3' height='auto' >
          <v-img max-height='400px' contain :src="getJpgImage(card.image)">
            </v-img>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import allArticles from '../articles/all_articles.js'

export default {
  name: 'home',
  components: {
  },
  data: () => ({
    allArticles,
  }),


  methods: {
    getSvgImage: function(name){
      let images = require.context('../../public/assets/', false, /\.svg$/)
      return images('./' + name + ".svg")
    },
    getJpgImage: function(name){
      let images = require.context('../../public/assets/', false, /\.jpg$/)
      return images('./' + name + ".jpg")
    },
  }
};

</script>
<style>


</style>
