<template>
  <v-footer>
    <v-card
      flat
      tile
      width="100%"
      class="teal text-center"
    >
      <v-card-text>
        <v-btn
          dark
          v-for="(icon, index) in icons" :key='index'
          class="mx-4"
          icon
          :href='icon.href'
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        Caroline Elke Winter
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
