<template>
  <v-container>
  <!-- donna -->
      <v-row align='center' justify='space-around'>
        <v-col cols=11 sm=5 md=4 align-self='center'>
          <v-card flat color='grey lighten-5'
            class="mx-auto"
          >
            <!-- <v-img max-height='400px' contain
              :src="getJpgImage('200-Winter-Caroline')"
            >
            </v-img> -->
          </v-card>
          </v-col>
          <v-col cols=11 sm=6>
          <v-card
            flat
            color='grey lighten-5'
            class="mx-auto"
          >

            <v-card-text class='black--text'>
              {{bioText}}
            </v-card-text>


          </v-card>
        </v-col>

      </v-row>


  </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: "about",
  components: {
  },
  data: () => ({
    bioText: "Caroline Elke Winter was born in West Germany and grew up mostly in western Massachusetts. Before joining Bloomberg Businessweek as a staff writer in 2010, she was a Fulbright fellow and freelanced articles for The New York Times Magazine, Spiegel International, and other publications. In 2017, she was awarded a Knight Science Journalism fellowship at MIT, where she spent much of her time learning about the human microbiome. She now lives in Berlin, Germany, with her husband and son, and bikes everywhere. This site features a selection of her work, including many profiles of scientists, tinkerers, and business tycoons.",
    edu: [
      {
        year: '2008',
        degree: 'M.A.',
        major: 'Journalism',
        school: 'Columbia University'
      },
      {
        year: '2002',
        degree: 'B.A.',
        major: "Journalism",
        school: 'Wesleyan University'
      },
    ],

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
