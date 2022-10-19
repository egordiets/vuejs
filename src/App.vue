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
    <transition name="fade">
        <MdalWindowAddPayment
        v-if="showModal"
        :settings="modalStteings"
        />

      </transition>
  </v-app>
</template>

//jvnjdfnvkvmfkm

<script>
import MyButton from '@/components/Button.vue'

export default {
  name: 'App',
  components: {
    MyButton,
    ModalWindowAddPayment: () => import(/* webpackChunkName: "ModalWindow" */ '@/components/ModalWindowAddPayment.vue')
  },

  data: () => ({
    showModal: false,
    modalStteings: {}
  }),
  methods: {
    modalOpen (settings) {
      this.modalSettings = settings
      this.showModal = true
    },

    modalClose () {
      this.showModal = false
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
  }
}
</script>
