<template>
  <div class="box"></div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
      }
    },
  //  head(this: any) {
  //    return {
  //       title: this.title,
  //       htmlAttrs: {
  //         lang: 'en'
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' },
  //     { name: 'format-detection', content: 'telephone=no' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  //  }
  //  },
    mounted() {
    }
    
  })
</script>

<style lang="scss" scoped>
.box {
width: 300px;
height: 300px;
/* background-color: color('success', 'darkest'); */
background-color: #000;
}
</style>