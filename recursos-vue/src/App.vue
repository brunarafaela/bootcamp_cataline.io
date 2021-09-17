<template>
  <h1> {{count}}</h1>
  <button @click="increment">incrementar</button>
  <button @click="decrease">diminuir</button>
  <button @click="reset">resetar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue' //tipagem typescript

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment(){
      this.count ++ 
    },
    decrease(){
      this.count --
    },
    reset(){
      this.count = 0
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log(oldValue)
      console.log(newValue)
    }
  }
})
</script>

