<template>
    <a v-bind:href="product.url" v-bind:class="productClass">
      {{product.name}}
    </a>
    <p>{{company}} é legal</p>
    <p v-text="company"></p>  
    <p>Acesse: <span v-html="link" /></p>  
    <a href="#interno" v-on:click.prevent="something">link interno</a><br />
    <a href="#interno" v-on:click.once="something">link interno</a><br />
    <input type="text" @keyup="something" /><br />
    <input type="text" @keyup.enter="something" /><br />
    <input type="text" @keyup.k="something" /><br />
    <p v-once>estoque inicial: {{stock}}</p>
    <p>estoque atualizado: {{stock}}</p>
    <button @click="stock++">aumentar estoque</button>
    <div>
      <h1 v-if="sex=== 'Masculino' ">masculino</h1>
      <h1 v-else-if="sex === 'Feminino' ">feminino</h1>
      <h1 v-else>outro</h1>
    </div>
    <h1 v-show="sex === 'Masculino' ">Masculino</h1>

</template>

<script lang="ts"> 
import { defineComponent } from 'vue' 

export default defineComponent({
  data() {
    return {
      product: {
        name: 'camisa',
        url: 'https://loja.com/produtos/12345',
        stock: true
      },
      products: [
          { id: 1, name: 'Camisa', stock: true },
          { id: 2, name: 'Bota', stock: false },
          { id: 3, name: 'Chapéu', stock: false },
          { id: 4, name: 'Cinto', stock: true }
        ],
      company: 'cataline',
      link: '<a href="https://google.com.br">cataline</a>',
      stock: 1,
      sex: 'Feminino',

    }
  },
  computed: {
    productClass():string {
      return this.product.stock ? 'success': 'danger'
    }
  },
  methods: {
    something(){
      console.log('hwllow cataline')
    }
  }
})
</script>

<style>
  .danger{
    color:red;
  }
  .success{
    color: green;
  }
</style>

