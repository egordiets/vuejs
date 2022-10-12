<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn to="/dashboard">Dashboard</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <MyButton>
        <template>
          <v-icon></v-icon>
        </template>
      </MyButton>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MyButton from '@/components/Button.vue'

export default {
  name: 'App',
  components: {
    MyButton
  },

  data: () => ({
    //
  })
}
</script>
