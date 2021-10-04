<template>
  <div>
    <h1>Home</h1>
    <ul>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/sobre">Sobre</NuxtLink>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    
  })
</script>

<style>
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>