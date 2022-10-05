<template>
  <div>
    <div>
      <input type="text" placeholder="Value" v-model="value">
<!--      <input type="text" placeholder="Type" v-model="category">-->
      <select v-model="category">
        <option
          v-for="category of categoryList"
          :value="category"
          :key="category"
        >{{ category }}</option>
      </select>
      <input type="text" placeholder="Date" v-model="date">
      <button @click="addPayment">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    date: '',
    category: '',
    value: ''
  }),
  methods: {
    addPayment () {
      // console.log('add', this.currenDate)
      const { value, category, date, currenDate } = this
      const data = {
        value,
        category,
        // date: date ? date : currenDate
        date: date || currenDate
      }
      // console.log(data)

      this.$emit('add-payment', data)
    }
  },
  computed: {
    currenDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style module>

</style>
