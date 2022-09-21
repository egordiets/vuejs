<template>
  <div>
    <div v-for="(item, index) in pageList" :key="index">{{ item }}</div>
    <PaginationBlock
      @select-page="selectPage"
      :list-length="items.length"
      :page-size="this.pageSize"
    />
  </div>
</template>

<script>
import PaginationBlock from '@/components/PaginationBlock.vue'

export default {
  name: 'PaymentsDisplay',
  components: {
    PaginationBlock
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 5
    }
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    showItems: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    pageList () {
      const { currentPage, pageSize } = this
      const start = (currentPage - 1) * pageSize
      const end = start + pageSize

      return this.items.slice(start, end)
    }
  },
  methods: {
    selectPage (page) {
      this.currentPage = page
    }
  }
}
</script>
