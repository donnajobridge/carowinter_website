<template>
  <v-footer absolute app padless color='grey lighten-5'>
    <v-card
      flat

      tile
      width="100%"
      class="grey lighten-5 text-center"
    >
    <v-divider class='mb-0'></v-divider>
      <v-card-text class='mb-n6'>
        <v-btn

          v-for="(icon, index) in icons" :key='index'
          class="mx-4"
          icon
          :href='icon.href'
        >
          <v-icon color='black' size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>


    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "footer_caro",
  data: () =>({
    icons: [
      {icon:'mdi-email', href: 'mailto:  caro@carowinter.com'},
      {icon:'mdi-linkedin-box', href: 'https://www.linkedin.com/in/caroline-elke-winter-4675216/'}
    ],
  })
}


</script>
