<template>
  <v-app-bar app flat height='90px' color='grey lighten-5'>
    <v-container class='hidden-sm-and-up'>
      <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer
          v-model="drawer"
          app
          temporary
          enable-resize-watcher
          clipped
          height='auto'
          hide-overlay
        >
          <v-card class="mx-auto">
            <v-list>
              <v-list-item v-for='(button, index) in buttons' :key="index" @click="goToPage(button.link)">

                <v-list-item-icon>
                  <v-icon>{{button.icon}}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="button.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

          </v-list>
        </v-card>

      </v-navigation-drawer>

    </v-container>

    <v-toolbar-title class='pr-8 pr-sm-0'> <router-link to="/"> <img height='70px' :src="getSvgImage('carowinter')"/> </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class='hidden-xs-only navy--text'>
      <v-btn class='teal--text no-text-transform' v-show=showHome text to='/'>home</v-btn>
      <v-btn class='teal--text no-text-transform' text to='/articles'>articles</v-btn>
      <v-btn class='teal--text no-text-transform' text to='/about'>about</v-btn>


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
        name: 'home',
        link: '/',
        icon: 'mdi-home'
      },
      {
        name: 'articles',
        link: '/articles',
        icon: 'mdi-book-open-variant'
      },
      {
        name: 'about',
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
