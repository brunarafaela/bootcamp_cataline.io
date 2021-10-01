<template>
  <div>
    <ul>
      <li @click="currentView = 'Home' ">Home</li>
      <li @click="currentView = 'About' " >Sobre</li>
      <li @click="currentView = 'Contact' " >Contato</li>
    </ul>

    <component :is="currentView"/>

    <ButtonStyled text="Facebook" color="primary" v-bind:user="user">
      <template v-slot:before>
        <i class="fab fa-facebook-f"></i>
      </template>
    </ButtonStyled>
    <ButtonStyled text="Cadastrar" color="primary" @passarinho="action($event)"/>
    <ButtonStyled text="Error" color="danger" />
    <ButtonStyled text="Salvo!" color="success" />
    <ButtonStyled v-bind:text="123" color="success" />
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue' 
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

export default defineComponent({ 
  data() {
    return { 
      user: {
      },
      currentView: 'Home'
    }
  },
  components :{
    Home,
    About,
    Contact
  },
  computed: {
  },
  methods: { 
    action(event: string){
      console.log(event)
    }
  }, 
  directives: {
  }
})
</script>

<style> 
</style> 

