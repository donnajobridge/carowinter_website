<template>
  <v-container fluid>
    <v-row justify='start'>
      <v-col cols=12 sm=6 v-for='(card, index) in sortedArticlesByDate' :key='index'>
        <v-card flat color='grey lighten-5' height='auto'>
          <v-row justify='center'>
            <v-col cols=6>
              <v-img :height="getHeight" contain :src="getImage(card.image)"></v-img>
            </v-col>

            <v-col cols=6 align-self='center'>
              <v-card-text>
                <v-row class='pb-sm-1 pb-md-2'>
                  {{card.date}}
                </v-row>
                <v-row class='pb-sm-1 pb-md-2'>
                  <a class='teal--text font-weight-bold':href='card.link' target='_blank'>{{card.title}}</a>
                </v-row>
                <v-row class='pb-sm-1 pb-md-2'>
                  {{card.publication}}
                </v-row>
                <v-row>
                  <a v-if='card.pdf' class='teal--text font-weight-bold':href='getPdf(card)' target='_blank'>[ PDF ]</a>
                </v-row>
              </v-card-text>
            </v-col>
          </v-row>
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
    sortedArticlesByDate(){
      return this.allArticles
      .sort((a,b)=>(a.date2 > b.date2)? -1 : 1)
    },
    getHeight(){
      let size = this.$vuetify.breakpoint.name;
      console.log('size', size)
      switch(size){
        case 'xs': return '150px'
        break;
        case 'sm': return '200px'
        break;
        default: return '250px'

      }
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
    getPdf: function(object){
      let pdfs = require.context('../../public/assets/pdf/', false, /\.pdf$/)
      return pdfs('./' + object.pdf)

    },


  }
};

</script>
<style>


</style>
