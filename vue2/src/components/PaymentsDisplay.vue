<template>
  <v-container>
    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="5">Category</v-col>
      <v-col cols="2">Value</v-col>
    </v-row>
    <v-row v-for="({ value, category, date }, index) in paymentsList" :key="index">
      <v-col cols="1">{{ index + 1 }}</v-col>
      <v-col cols="4">{{ date }}</v-col>
      <v-col cols="5">{{ category }}</v-col>
      <v-col cols="2">{{ value }}</v-col>
    </v-row>
    <v-row>
      <v-pagination length="10"/>
    </v-row>
  </v-container>
  <!-- <div>
    <div v-for="(payment, index) in paymentsList" :key="index">{{ payment }}</div>
    <PaginationBlock
      @select-page="selectPage"
      :list-length="items.length"
      :page-size="this.pageSize"
    />
  </div> -->
</template>

<script>
// import PaginationBlock from '@/components/PaginationBlock.vue'

export default {
  name: 'PaymentsDisplay',
  // components: {
  //   PaginationBlock
  // },
  // data () {
  //   return {
  //     currentPage: 1,
  //     pageSize: 5
  //   }
  // },
  // props: {
  //   items: {
  //     type: Array,
  //     default: () => ([])
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  props: {
    paymentsList: {
      type: Array,
      default: () => ([])
      // required: true
    },
    show: Boolean
  },
  mounted () {
    this.paymentsList.forEach((i) => {
      console.log(i)
    })
  }
  // computed: {
  //   paymentsList () {
  //     const { currentPage, pageSize } = this
  //     const start = (currentPage - 1) * pageSize
  //     const end = start + pageSize

  //     return this.items.slice(start, end)
  //   }
  // },
  // methods: {
  //   selectPage (page) {
  //     this.currentPage = page
  //   }
  // }
}
</script>
