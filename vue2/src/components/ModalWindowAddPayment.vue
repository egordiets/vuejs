<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <div>{{ title }}</div>
      <div :class="$style.content">
<!--        <AddPaymentForm v-if="settings.content === 'addPaymentForm'"-->
<!--          @add-payment="addPayment"-->
<!--          :categoryList="categoryList"-->
<!--        />-->
<!--        <Auth v-if="settings.content === 'auth'"/>-->
        <component :is="settings.content"/>
      </div>
      <footer :class="$style.footer">
        <button @click="close">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import Auth from '@/components/AuthPay.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ModalWindowAddPayment',
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    AddPaymentForm,
    Auth
    // AddPaymentForm: import(/* webpackChunkName: "AddPaymentForm" */ '@/components/AddPaymentForm.vue'),
    // Auth: import(/* webpackChunkName: "Auth" */ '@/components/Auth.vue')
  },
  computed: {
    // ...mapGetters(['categoryList']),
    title () {
      return this.settings?.title || 'Modal window'
    }
  },
  methods: {
    ...mapActions(['addNewPayment']),
    addPayment (data) {
      this.addNewPayment(data)
    },

    close () {
      // this.$emit('close')
      this.$modal.hide()
    }
  },

  mounted () {
    console.log(this.$modal)
  }
}
</script>

<style module>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
}
.content {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
}
</style>
