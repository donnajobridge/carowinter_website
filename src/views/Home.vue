<template>
  <v-container fluid>
    <v-row justify='center'>
      <v-col cols=6 sm=4 md=3 v-for='(card, index) in randomArticles' :key='index'>
        <v-card flat color='grey lighten-3' height='auto' :href="getArticleLink(card)" target='_blank'>
          <v-img max-height='400px' contain :src="getImage(card.image)">
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
  computed: {
    frontPage(){
      return this.allArticles
      .filter(obj => obj.frontPageSpot>0)
      .sort((a,b)=>(a.frontPageSpot > b.frontPageSpot)? 1 : -1)
    },
    randomArticles(){
      let n=12;
      // Shuffle array
      const shuffled = this.allArticles.sort(() => 0.5 - Math.random());
      // Get sub-array of first n elements after shuffled
      let selected = shuffled.slice(0, n);
      return selected;
      },
  },
  methods: {
    getImage: function(name){
      let ext = name.substr(name.length-3);
      let images;
      switch(ext){
        case 'svg':
          images = require.context('../../public/assets/', false, /\.svg$/)
          return images('./' + name)
          break;
        case 'jpg':
          images = require.context('../../public/assets/', false, /\.jpg$/)
          return images('./' + name)
          break;
        case 'png':
          images = require.context('../../public/assets/', false, /\.png$/)
          return images('./' + name)
          break;
        case 'pdf':
          images = require.context('../../public/assets/pdf/', false, /\.pdf$/)
          return images('./' + name)
      }
    },
    getArticleLink: function(object){
      if (object.pdf){
        let pdfs = require.context('../../public/assets/pdf/', false, /\.pdf$/)
        return pdfs('./' + object.pdf)
      }
      else {
        return object.link
      }
    },


  }
};

</script>
<style>



</style>
