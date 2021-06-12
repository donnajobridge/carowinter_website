<template>
  <div>
    <toolbar :showHome=showHome @click='articleTab=$event'></toolbar>
    <v-main>
      <v-container fluid class='overflow-x-hidden'>
        <router-view :articleTab='articleTab'></router-view>
      </v-container>
    </v-main>
    <footer_caro></footer_caro>
  </div>
</template>

<script>

import toolbar from '../components/toolbar.vue'
import footer_caro from '../components/footer.vue'

export default {
  name: 'carowinter',
  components: {toolbar, footer_caro
  },
  data: () => ({
    articleTab: 'all',
  }),
  computed: {
    showHome(){
      return this.$route.path != '/'
    },
  },
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
