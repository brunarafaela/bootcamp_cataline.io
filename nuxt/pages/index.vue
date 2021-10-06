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
    data() {
      return {
        title: 'Teste de title'
      }
    },
   head(this: any) {
     return {
        title: this.title,
        htmlAttrs: {
          lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
   }
   },
    mounted() {
      const posts = this.$axios.$get('/posts')
    }
    
  })
</script>

<style>
a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>