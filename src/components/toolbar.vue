<template>
  <v-app-bar app flat height='90px' color='grey lighten-5'>
    <v-toolbar-title class='pr-10 pr-sm-0'> <router-link to="/"> <img :height="getHeight" :src="getSvgImage('carowinter')"/> </router-link>
    </v-toolbar-title>
    <v-container class='hidden-sm-and-up'>
      <v-row justify='end'>
      <v-app-bar-nav-icon x-large color='black'  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer
          v-model="drawer"
          app
          clipped
          height='auto'
          hide-overlay
        >
          <v-card class="mx-auto">
            <v-list>
              <v-list-item v-for='(button, index) in buttons' :key="index" @click="goToPage(button.link)">

                <!-- <v-list-item-icon>
                  <v-icon color='teal'>{{button.icon}}</v-icon>
                </v-list-item-icon> -->

                <v-list-item-content>
                  <v-list-item-title class='' v-text="button.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

          </v-list>
        </v-card>

      </v-navigation-drawer>
    </v-row>
    </v-container>



    <!-- <v-spacer></v-spacer> -->

    <v-toolbar-items class='pl-4 hidden-xs-only'>
      <v-btn class='teal--text font-weight-bold' v-show=showHome text to='/'>home</v-btn>
      <v-btn class='teal--text font-weight-bold' text to='/articles'>articles</v-btn>
      <v-btn class='teal--text font-weight-bold' text to='/about'>about</v-btn>


    </v-toolbar-items>

</v-app-bar>

</template>

<script>
export default {
  name: "toolbar",
  data: () =>({
    drawer: false,
    val: false,
    buttons:[
      {
        name: 'HOME',
        link: '/',
        icon: 'mdi-home'
      },
      {
        name: 'ARTICLES',
        link: '/articles',
        icon: 'mdi-book-open-variant'
      },
      {
        name: 'ABOUT',
        link: '/about',
        icon: 'mdi-information-outline'
      },

    ],

  }),
  props: {
    showHome:{
      default: false,
      type: Boolean
    },
  },
  computed: {
    getHeight(){
      if(this.$vuetify.breakpoint.name =='xs'){
        return '40px'
      }
      else {return '70px'}
    },
  },
  methods: {
    getSvgImage: function(name){
      let images = require.context('../../public/assets/', false, /\.svg$/)
      return images('./' + name + ".svg")
    },
    goToPage: function(path){
      this.$router.push(path)
    }
  },
}
</script>
