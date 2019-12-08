<template>
  <v-container>
  <!-- donna -->
      <v-row align='center' justify='space-around'>
        <v-col cols=11 sm=5 md=4 align-self='center'>
          <v-card flat color='grey lighten-5'
            class="mx-auto"
          >
            <v-img max-height='400px' contain
              :src="getJpgImage('200-Winter-Caroline')"
            >
            </v-img>
          </v-card>
          </v-col>
          <v-col cols=11 sm=6>
          <v-card
            flat
            color='grey lighten-5'
            class="mx-auto"
          >

            <v-card-text :class="{'title': $vuetify.breakpoint.smAndDown, 'headline':$vuetify.breakpoint.mdAndUp}">
              Caro is a senior writer at Bloomberg. She was awarded the XX fellowship from MIT in 2017. She currently lives in Berlin with her husband Alex and son Johannes..
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
