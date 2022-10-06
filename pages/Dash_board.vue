<template>
  <div>
    <div class="header">My personal costs: {{ totalCost }}</div>
<!--    <AddPaymentForm-->
<!--      @add-payment="addPayment"-->
<!--      :categoryList="categoryList"-->
<!--    />-->
    <PaymentsDisplay
      :paymentsList="paymentsList"
      test="test"
      show
    />
<!--    <button @click="addPaymentModal">Add Payment</button>-->
<!--    <button @click="authModal">Auth</button>-->
    <button @click="authModal">Auth</button>
    <button @click="addPayment">Add Payment</button>
<!--    <ModalWindowAddPayment-->
<!--      v-if="showModal"-->
<!--      @close="close"-->
<!--      :settings="modalSettings"-->
<!--    />-->
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
// import ModalWindowAddPayment from '@/components/ModalWindowAddPayment.vue'
// import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Dash_board',
  data: () => ({
    showModal: false,
    modalSettings: {}
  }),
  components: {
    PaymentsDisplay
    // ModalWindowAddPayment
    // AddPaymentForm
  },
  computed: {
    ...mapGetters(['paymentsList', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment () {
      this.$modal.show({ title: 'Add new payment', content: 'addPaymentForm' })
    },
    // addPaymentModal () {
    //   this.showModal = true
    //   this.modalSettings = {
    //     title: 'Add new payment',
    //     content: 'addPaymentForm'
    //   }
    // },
    authModal () {
      // this.showModal = true
      // this.modalSettings = {
      //   title: 'Authorization',
      //   content: 'auth'
      // }
      this.$modal.show({ title: 'AuthPay', content: 'auth' })
    }
    // close () {
    //   this.showModal = false
    // }
    // addPayment (data) {
    //   this.addNewPayment(data)
    // }
  },
  created () {
    this.fetchCategoryData()
    this.fetchData()
    console.log(this.$route)
  },

  mounted () {
    if (this.$route.params.payment) this.addPayment()
  }
}
</script>

<style scoped>

</style>
