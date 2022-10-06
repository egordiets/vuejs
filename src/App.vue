<template>
  <div id="app">
<!--    <Counter v-if="show"/>-->
<!--    <Counter v-show="show"/>-->
<!--    <button @click="show = !show">Show / Hide</button>-->
    <!-- <header>
      <div class="header">My personal costs: {{ totalCost }}</div>
    </header> -->
    <header>
      <nav>
<!--      <nav @click.prevent="pushHistory">-->
<!--        <a href="/#dashboard" class="router-link">Dashboard</a>-->
<!--        <a href="/#about" class="router-link">About</a>-->
<!--        <a href="/#notfound" class="router-link">Not Found</a>-->
<!--        <a href="/dashboard" class="router-link">Dashboard</a>-->
<!--        <a href="/about" class="router-link">About</a>-->
<!--        <a href="/notfound" class="router-link">Not Found</a>-->
        <router-link to="dashboard" class="router-link">Dashboard</router-link>
        <router-link to="about" class="router-link">About</router-link>
        <router-link to="notfound" class="router-link">Not Found</router-link>
      </nav>
    </header>
    <main>
      <!-- <AddPaymentForm
        @add-payment="addPayment"
        :categoryList="categoryList"
      />
      <PaymentsDisplay
        :paymentsList="paymentsList"
        test="test"
        show
      /> -->
<!--      <Dashboard v-if="page === 'dashboard'"/>-->
<!--      <About v-if="page === 'about'"/>-->
<!--      <NotFound v-if="page === 'notfound'"/>-->
      <router-view/>
      <button @click="goToPage">About</button>
    </main>
    <transition name="fade">
      <ModalWindowAddPayment
        v-if="showModal"
        :settings="modalSettings"
      />
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CalcCom from '@/components/CalcCom.vue'
// import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
// import AddPaymentForm from '@/components/AddPaymentForm.vue'
// import { mapActions, mapMutations, mapGetters } from 'vuex'
// import About from '../pages/About.vue'
// import NotFound from '../pages/NotFound'
// import Dashboard from '../pages/Dashboard'
// import ModalWindowAddPayment from '@/components/ModalWindowAddPayment.vue'

export default {
  name: 'App',
  components: {
    // Counter
    // PaymentsDisplay,
    // AddPaymentForm,
    // About,
    // NotFound,
    // Dashboard
    ModalWindowAddPayment: () => import(/* webpackChunkName: "ModalWindow" */ '@/components/ModalWindowAddPayment.vue')
  },
  data: () => ({
    // page: 'dashboard'
    // show: true
    // paymentsList: []
    showModal: false,
    modalSettings: {}
  }),
  methods: {
    // goToPage () {
    //   // this.$router.push('about')
    //   this.$router.push({
    //     name: 'about',
    //     params: {
    //       a: 'qwerty'
    //     }
    //   })
    modalOpen (settings) {
      this.modalSettings = settings
      this.showModal = true
    },

    modalClose () {
      this.showModal = false
    }
    // setPage () {
    //   // console.log(e.target)
    //   // this.page = window.location.hash.slice(1)
    //   this.page = window.location.pathname.slice(1)
    //   console.log(this.page)
    // },
    // pushHistory (e) {
    //   if (!e.target.classList.contains('router-link')) return
    //   window.history.pushState({}, '', e.target.href)
    //   this.setPage()
    // }
  },
  // computed: {
  //   ...mapGetters(['paymentsList', 'categoryList', 'totalCost'])
  //   // paymentsList () {
  //   //   return this.$store.state.paymentsList
  //   // }
  // },
  // methods: {
  //   ...mapActions(['fetchData', 'fetchCategoryData', 'addNewPayment']),
  //   ...mapMutations(['ADD_PAYMENT_DATA']),
  //   // fetchPaymentsData () {
  //   //   return [
  //   //     {
  //   //       date: '28.03.2020',
  //   //       category: 'Food',
  //   //       value: 169
  //   //     },
  //   //     {
  //   //       date: '24.03.2020',
  //   //       category: 'Transport',
  //   //       value: 360
  //   //     },
  //   //     {
  //   //       date: '24.03.2020',
  //   //       category: 'Food',
  //   //       value: 532
  //   //     }
  //   //   ]
  //   // },
  //   addPayment (data) {
  //     // console.log('App.vue: ', data)
  //     // this.paymentsList.push(data)
  //     // this.$store.commit('ADD_PAYMENT_DATA', data)
  //     // this.ADD_PAYMENT_DATA(data)
  //     this.addNewPayment(data)
  //   }
  //   // onChangePage (p) {
  //   //   this.page = p
  //   //   this.fetchData(p)
  //   // }
  // },
  // created () {
  //   this.fetchCategoryData()
  //   this.fetchData()
  //   // setTimeout(() => {
  //   //   this.$store.commit('EDIT_PAYMENT_DATA', {
  //   //     date: '24.03.2020',
  //   //     category: 'Transport',
  //   //     value: 3600
  //   //   })
  //   // }, 2000)
  //   // console.log(this.$store.state)
  //   // setTimeout(() => {
  //   //   this.paymentsList = this.fetchPaymentsData()
  //   // }, 2000)

  //   // this.$store.commit('SET_PAYMENTS_LIST', this.fetchPaymentsData())
  //   // this.$store.dispatch('fetchData')
  // }
  mounted () {
    // window.addEventListener('hashchange', this.setPage)
    // window.addEventListener('popstate', this.setPage)
    // console.log(this.$router)
    // console.log(this.$route)
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
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
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.router-link {
  margin: 0 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
