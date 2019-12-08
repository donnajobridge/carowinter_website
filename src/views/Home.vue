<template>
  <v-container fluid>
    <v-row justify='center'>
      <v-col cols=6 sm=4 md=3 v-for='(card, index) in topArticles' :key='index'>
        <v-card flat color='grey lighten-3' height='auto' :href="getArticleLink(card)" target='_blank'>
          <v-img max-height='400px' contain :src="getImage(card.image)">
            </v-img>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>


import topArticles from '../articles/top_articles.js'
export default {
  name: 'home',
  components: {
  },
  data: () => ({
    topArticles,
    }),

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
