<template>
  <div>
    <div class="error" v-if="error">{{ error }}</div>
    <div class="main">
      <input type="number" v-model.number="op1">
      <input type="number" v-model.number="op2">
      = {{ result }}
    </div>
    <div class="keyboard">
<!--      <button @click="result = +op1 + +op2">+</button>-->
<!--      <button @click="result = op1 + op2">+</button>-->
      <!-- <button @click="sum">+</button>
      <button @click="sub">-</button>
      <button @click="div">/</button>
      <button @click="mult">*</button>
      <button @click="power">^</button>
      <button @click="idiv">//</button> -->
      <button
        v-for="operation of operations"
        @click="calculate(operation)"
        :key="operation">
        {{ operation }}
      </button>
      <br/>
      <div class="keyb">
        <input type="checkbox" id="checkbox" v-model="showkeybord" :checked="showkeybord">
        <label for="checkbox">Отобразить экранную клавиатуру</label>
      </div>
      <div v-show="showkeybord">
        <div>
          <button
          v-for="digit of digits"
          @click="keybordDigit(digit)"
          :key="digit">
          {{ digit }}
        </button>
        <button @click="backspace">Backspace</button>
        </div>
        <div>
          <input type="radio" id="operand1" value="op1" v-model="selctedOperand">
          <label for="operand1">Операнд 1</label>
          <input type="radio" id="operand2" value="op2" v-model="selctedOperand">
          <label for="operand2">Операнд 2</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcCom',
  data: () => ({
    op1: 0,
    op2: 0,
    result: 0,
    error: '',
    operations: ['+', '-', '/', '*', '^', '//'],
    digits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    showkeybord: false,
    selctedOperand: 'op1'
  }),
  methods: {
    calculate (operation) {
      this.error = ''

      switch (operation) {
        case '+': this.sum(); break
        case '-': this.sub(); break
        case '/': this.div(); break
        case '*': this.mult(); break
        case '^': this.power(); break
        case '//': this.idiv(); break
      }
    },
    sum () {
      const { op1, op2 } = this
      this.result = op1 + op2
    },
    div () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя!'
        return
      }
      this.result = op1 / op2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    mult () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    power () {
      const { op1, op2 } = this
      this.result = Math.pow(op1, op2)
    },
    idiv () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя!'
      } else if (op1 / op2 >= 0) {
        this.result = Math.floor(op1 / op2)
      } else {
        this.result = Math.ceil(op1 / op2)
      }
    },
    keybordDigit (digit) {
      const operandValue = this[this.selctedOperand]

      if (typeof operandValue === 'number') {
        this[this.selctedOperand] = Number(`${operandValue}${digit}`)
      }
    },
    backspace () {
      const operandValue = this[this.selctedOperand]

      if (typeof operandValue === 'number') {
        this[this.selctedOperand] = Math.trunc(operandValue / 10)
      }
    }
  }
}
</script>
