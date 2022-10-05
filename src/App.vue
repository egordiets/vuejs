<template>
  <div id="app">
<!--    <Counter v-if="show"/>-->
<!--    <Counter v-show="show"/>-->
<!--    <button @click="show = !show">Show / Hide</button>-->
    <header>
      <div class="header">My personal costs: {{ totalCost }}</div>
    </header>
    <main>
      <AddPaymentForm
        @add-payment="addPayment"
        :categoryList="categoryList"
      />
      <PaymentsDisplay
        :paymentsList="paymentsList"
        test="test"
        show
      />
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CalcCom from '@/components/CalcCom.vue'
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import AddPaymentForm from '@/components/AddPaymentForm.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    // Counter
    PaymentsDisplay,
    AddPaymentForm
  },
  data: () => ({
    // page: 1,
    // n: 3
  }),
  computed: {
    ...mapGetters(['paymentsList', 'categoryList', 'totalCost'])
    // paymentsList () {
    //   return this.$store.state.paymentsList
    // }
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData', 'addNewPayment']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    // fetchPaymentsData () {
    //   return [
    //     {
    //       date: '28.03.2020',
    //       category: 'Food',
    //       value: 169
    //     },
    //     {
    //       date: '24.03.2020',
    //       category: 'Transport',
    //       value: 360
    //     },
    //     {
    //       date: '24.03.2020',
    //       category: 'Food',
    //       value: 532
    //     }
    //   ]
    // },
    addPayment (data) {
      // console.log('App.vue: ', data)
      // this.paymentsList.push(data)
      // this.$store.commit('ADD_PAYMENT_DATA', data)
      // this.ADD_PAYMENT_DATA(data)
      this.addNewPayment(data)
    }
    // onChangePage (p) {
    //   this.page = p
    //   this.fetchData(p)
    // }
  },
  created () {
    this.fetchCategoryData()
    this.fetchData()
    // setTimeout(() => {
    //   this.$store.commit('EDIT_PAYMENT_DATA', {
    //     date: '24.03.2020',
    //     category: 'Transport',
    //     value: 3600
    //   })
    // }, 2000)
    // console.log(this.$store.state)
    // setTimeout(() => {
    //   this.paymentsList = this.fetchPaymentsData()
    // }, 2000)

    // this.$store.commit('SET_PAYMENTS_LIST', this.fetchPaymentsData())
    // this.$store.dispatch('fetchData')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
