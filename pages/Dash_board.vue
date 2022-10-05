<template>
  <div>
    <div class="header">My personal costs: {{ totalCost }}</div>
    <AddPaymentForm
      @add-payment="addPayment"
      :categoryList="categoryList"
    />
    <PaymentsDisplay
      :paymentsList="paymentsList"
      test="test"
      show
    />
  </div>
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Dash_board',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  computed: {
    ...mapGetters(['paymentsList', 'categoryList', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData', 'addNewPayment']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment (data) {
      this.addNewPayment(data)
    }
  },
  created () {
    this.fetchCategoryData()
    this.fetchData()
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>
