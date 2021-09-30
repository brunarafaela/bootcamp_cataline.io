<template>
  <div>
    <h1 class="static" :class="{active: isActive, 'text-danger': hasError}">
    hwllow
   </h1>
    <h1 :class="['static', { 'text-danger': hasError}, className]">
    hwllow
  </h1>
  </div>
  
</template>

<script lang="ts"> 
import { defineComponent } from 'vue' 

export default defineComponent({
  data() {
    return { 
      isActive: true,
      hasError: false,
      className: 'bruna-lima'
    }
  },
  computed: {
    
  },
  methods: { 
  },
  directives: {
  }
})
</script>

<style scoped> 
</style> 

