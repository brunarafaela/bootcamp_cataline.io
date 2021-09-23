<template>
    <h1>{{count}}</h1>
    <button @click="count++">add</button>
    <button @click="destroyComponent">desmontar</button>

</template>

<script lang="ts">
import { defineComponent } from 'vue' //tipagem typescript

export default defineComponent({
  data() {
    return {
       count: 0
    }
  }, 
  beforeUnmount() {
    console.log('salvar a contagem no db ')
  },
  unmounted() {
    alert('obrigado por usar!')
  },
  methods: {
    destroyComponent (){
      this.$.appContext.app.unmount()
    }
  }
})
</script>

