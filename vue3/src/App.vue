<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div
      class="my-div"
      style="border: 1px solid #000; min-height: 50px; margin: 10px 0"
  ></div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Button @custom-event-1="event1" @custom-event-2="event2"/>
<!--  <teleport to=".my-div">-->
<!--    <p>Some text</p>-->
<!--    <Button @custom-event-1="event1" @custom-event-2="event2"/>-->
<!--  </teleport>-->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from "@/components/Button";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button
  },
  methods: {
    event1 (data) {
      console.log(data)
    },
    event2 (data) {
      console.log(data)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
