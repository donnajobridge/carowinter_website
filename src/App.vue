<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application a {
  text-decoration: none !important;
}
.body {
  font-family: 'Hiragino Mincho ProN W6', Times New Roman, Times, serif !important;
}

.v-application {
  font-family: 'Hiragino Mincho ProN W6', Times New Roman, Times, serif !important;
}
.no-text-transform {
  text-transform: none !important;
}

.teal {
  background-color: #009999 !important;
}

.teal--text {
  color: #009999 !important;
}
.h-big {
  height: 300px important!;
}
.h-small {
  height: 150px important!;
}
</style>
