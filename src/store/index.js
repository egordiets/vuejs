import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from '@/store/categoryList'

Vue.use(Vuex)

const API_DATA = {
  page1: [
    { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
    { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
    { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
  ],
  page2: [
    { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 6, date: '25.03.2020', category: 'Food', value: 200 }
  ],
  page3: [
    { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
    { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
    { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
  ],
  page4: [
    { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 6, date: '25.03.2020', category: 'Food', value: 200 }
  ]
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
      // state.paymentsList = paymentsList
      const newUniwIdsObg = paymentsList.filter((item) => {
        var paymentsListByPage = state.paymentsListByPage
        return paymentsListByPage.indexOf(item.id) // Uncaught TypeError не могу понять почему
      })

      const uniqIds = newUniwIdsObg.map(obj => obj.id)
      state.paymentsList.push(...newUniwIdsObg)
      state.paymentsListByPage.push(...uniqIds)
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
