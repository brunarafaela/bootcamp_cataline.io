<template>
  <div>
        <!-- <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
        </transition> -->

    <!-- <button @click="show = !show">toggle</button>
    <transition name="fade" enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__bounce"
     @before-enter="beforeEnter"
     @after-enter="afterEnter"
     :appear="true"
     mode="out-in"
    >
      <h1 v-if="show">Front-end</h1>
      <h1 v-else>Back-end</h1>
    </transition> -->

    <ul>
      <li @click="view = 'Home' ">Home</li>
      <li @click="view = 'About' " >Sobre</li>
      <li @click="view = 'Contact' " >Contato</li>
    </ul>
   
   <transition
    name="fade" enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__bounce"
     @before-enter="beforeEnter"
     @after-enter="afterEnter"
     :appear="true"
     mode="out-in"
    > 
      <component :is="view"/>
    </transition>

   <button @click="filterAZ">filtro a-z</button>   
   <button @click="filterZA">filtro z-a</button>   

   <transition-group
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
     :appear="true"
     mode="out-in"
    > 
        <li v-for="user in users" :key="user">
          {{user}}
        </li>
    </transition-group>

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
import 'animate.css'

export default defineComponent({ 
  data() {
    return { 
      show: true,
      user: {
      },
      view: 'Home',
      users: ['bruna', 'rafaela', 'viana', 'lima']
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
    filterAZ() {
      this.users.sort()
    },
    filterZA() {
      this.users.sort().reverse()
    },
    action(event: string){
      console.log(event)
    },
        // --------
          // ENTERING
          // --------
          beforeEnter(element: HTMLElement) {
            element.classList.add('test')
          },
          // enter(el, done) {
          //   // ...
          //   done()
          // },
          afterEnter(element: HTMLElement) {
            element.classList.add('test2')
          },
          // enterCancelled(el) {
          //   // ...
          // },
      
          // // --------
          // // LEAVING
          // // --------
          // beforeLeave(el) {
          //   // ...
          // },
          // leave(el, done) {
          //   // ...
          //   done()
          // },
          // afterLeave(el) {
          //   // ...
          // },
          // // disponível apenas com v-show
          // leaveCancelled(el) {
          //   // ...
          // }
    
  }, 
  directives: {
  }
})
</script>

<style> 
/* .fade-enter-from, .fade-leave-to {
  opacity: 0
}

.entrada, .saida {
  transition: opacity 0.5s;
}
 
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.entrada {
  background: green;
}

.saida { 
  background: red;
} */

.v-move {
  transition: all 0.5s;
}

.test {
  background: pink;
}

.test2 {
  background: blueviolet;
}
</style> 


