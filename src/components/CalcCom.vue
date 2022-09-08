<template>
  <div>
    <div class="main">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }}
    </div>
    <div class="keyboard">
<!--      <button @click="result = +op1 + +op2">+</button>-->
<!--      <button @click="result = op1 + op2">+</button>-->
      <button @click="sum">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="mult">*</button>
      <button @click="power">^</button>
      <button @click="idiv">//</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcCom',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0
  }),
  methods: {
    sum () {
      this.result = this.op1 + this.op2
    },
    div () {
      this.result = this.op1 / this.op2
    },
    sub () {
      this.result = this.op1 - this.op2
    },
    mult () {
      this.result = this.op1 * this.op2
    },
    power () {
      this.result = Math.pow(this.op1, this.op2)
    },
    idiv () {
      if (this.op1 / this.op2 >= 0) {
        this.result = Math.floor(this.op1 / this.op2)
      } else {
        this.result = Math.ceil(this.op1 / this.op2)
      }
    }
  }
}
</script>
