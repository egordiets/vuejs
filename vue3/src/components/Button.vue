<template>
  <button @click="clickHandler">Click</button>
</template>

<script>
export default {
  name: 'Button',
  // emits: ['custom-event-1', 'custom-event-2'],
  emits: {
    'custom-event-1': null,
    'custom-event-2': (payload) => {
      return payload?.name && payload?.role;
    }
  },
  methods: {
    clickHandler () {
      const user = {
        name: 'User',
        // role: 'admin'
      }
      this.$emit('custom-event-1', 'data1')
      this.$emit('custom-event-2', user)
    }
  }
}
</script>

<style scoped>

</style>
