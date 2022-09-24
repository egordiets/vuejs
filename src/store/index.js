import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from '@/store/categoryList'

Vue.use(Vuex)

const API_DATA = {
  page1: [{
    value: 169,
    category: 'Food',
    date: '28.03.2020'
  },
  {
    value: 360,
    category: 'Transport',
    date: '24.03.2020'
  },
  {
    value: 532,
    category: 'Sport',
    date: '24.03.2020'
  }],
  page2: [],
  page3: []
}

export default new Vuex.Store({
  state: {
    paymentsListByPage: {},
    paymentsList: []
    // categoryList: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    // categoryList: (state) => state.categoryList,
    totalCost: ({ paymentsList }) => paymentsList
      .reduce((total, { value }) => total + value, 0)
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    // SET_CATEGORY_LIST (state, categoryList) {
    //   state.categoryList = categoryList
    // },
    ADD_PAYMENT_DATA (state, payment) {
      state.paymentsList.push(payment)
    }
    // EDIT_PAYMENT_DATA (state, editedPayment) {
    //   state.paymentsList[1] = editedPayment
    //   state.paymentsList = [...state.paymentsList]
    //   // Vue.set(this.state.paymentsList, 1, editedPayment)
    // }
  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = API_DATA.page1

        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 1000)
    },
    // fetchCategoryData ({ commit }) {
    //   setTimeout(() => {
    //     const categoryList = ['Food', 'Transport', 'Education', 'Sport']
    //
    //     commit('SET_CATEGORY_LIST', categoryList)
    //   }, 1000)
    // },
    fetchPageData ({ commit, state }, page) {
      if (!this.state[page]) {
        // fetching page data from API
        // commit mutation to paymentsListByPage
      }
    },
    addNewPayment ({ commit }, newPayment) {
      commit('ADD_PAYMENT_DATA', newPayment)
    }
  },
  modules: {
    categoryList
  }
})
