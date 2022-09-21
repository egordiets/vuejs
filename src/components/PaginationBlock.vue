<template>
  <div>
    <div class="paginate">
      <a
        href="#"
        class="page-link"
        :class="{ 'page-link_active': page === selectedPage }"
        v-for="page of pageCount" :key="page"
        @click="selectPage(page)"
      >
        {{ page }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationBlock',
  props: {
    listLength: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 5
    },
    startPage: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    selectedPage: null
  }),
  computed: {
    pageCount () {
      return Math.ceil(this.listLength / this.pageSize)
    }
  },
  methods: {
    selectPage (page) {
      this.selectedPage = page
      this.$emit('select-page', this.selectedPage)
    }
  },
  created () {
    this.selectedPage = this.startPage
  }
}
</script>

<style lang="scss" scoped>
.paginate {
  display: flex;
  justify-content: center;
}
.page-link {
  display: flex;
  align-items: center;
  margin: 4px;
  text-decoration: none;
  color: #000;

&:hover {
   cursor: pointer;
 }

&_active {
   color: dodgerblue;
   font-weight: 500;
 }
}
</style>
