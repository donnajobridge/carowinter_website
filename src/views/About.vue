<template>
  <v-container>
    <v-row align='center' justify='space-around'>
      <v-col cols=11 sm=5 md=4 align-self='center'>
        <v-card flat color='grey lighten-5' class="mx-auto">
          <v-img max-height='400px' contain
            :src="getImage('200-Winter-Caroline.jpg')">
          </v-img>
        </v-card>
        </v-col>
        <v-col cols=11 sm=6>
        <v-card flat color='grey lighten-5' class="mx-auto">
          <v-card-text class='black--text'>
            Caro is a senior writer at Bloomberg. She was awarded the XX fellowship from MIT in 2017. She currently lives in Berlin with her husband Alex and son Johannes.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

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
  },
};
</script>
