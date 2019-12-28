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
          right
          height='auto'
          hide-overlay
        >
          <v-card class="mx-auto">
            <v-list>
              <v-list-item v-for='mainTab in mainTabs' :key="mainTab.name" @click="goToPage(mainTab.link)">
                <v-list-item-content>
                  <v-list-item-title class='' v-text="mainTab.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item v-for="articleClass in articleClasses" :key='articleClass.title' @click='emitArticleTab(articleClass.tab)'>
                <v-subheader>
                  {{articleClass.title}}
                </v-subheader>
              </v-list-item>

          </v-list>
        </v-card>

      </v-navigation-drawer>
    </v-row>
    </v-container>


    <v-toolbar-items class='pl-8 hidden-xs-only'>
      <v-btn class='teal--text font-weight-bold' v-show=showHome text to='/'>home</v-btn>
      <v-menu
      v-model="val"
      close-on-click
      close-on-content-click
      z-index=10
      open-on-hover
      offset-y
      width='auto'
      height='auto'
      >

        <template v-slot:activator="{ on }">
            <v-btn class='teal--text font-weight-bold' @click="emitArticleTab('all')" text v-on="on" to='/articles' >articles</v-btn>
        </template>

        <v-card class="mx-auto">
          <v-list subheader>
            <v-list-item v-for="articleClass in articleClasses" :key='articleClass.title' @click='emitArticleTab(articleClass.tab)'>
              <v-list-item-content>
                <v-list-item-title v-text="articleClass.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-card>
      </v-menu>
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
    articleTab: 'all',
    mainTabs:[
      {
        name: 'HOME',
        link: '/',
        icon: 'mdi-home'
      },

      {
        name: 'ABOUT',
        link: '/about',
        icon: 'mdi-information-outline'
      },
      {
        name: 'ARTICLES',
        link: '/articles',
        icon: 'mdi-book-open-variant'
      },

    ],
    articleClasses: [
      {
        title: 'Bloomberg Businessweek',
        option: 'bloomberg',
        tab: 'bloom'
    },
    {
      title: 'The New York Times + More',
      option: 'notBloomberg',
      tab: 'nyt'
    },
    {
      title: 'Some Favorites',
      option: 'favorite',
      tab: 'fav'
    },
    ]

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
    },
    emitArticleTab: function(event){
      this.$emit('click', event)
      this.$router.push('/articles')
    }
  },
}
</script>
