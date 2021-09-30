<template>
    <div>
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
    <div>
      <ul>
        <li v-for="product in products" v-bind:key="product.id">
          {{product.name}}
        </li>
      </ul>
    </div>
    <div>
      <form>
      <input type="text" placeholder="Nome" v-model.lazy="form.name"/>
  
      <input type="number" placeholder="Idade" v-model.number="form.age"/>
  
      <textarea rows="2" placeholder="Descrição" v-model.trim="form.message"></textarea>
  
      <input type="checkbox" v-model="form.newsletter"/> Newsletter <br />
  
      <input type="radio" name="color" value="vermelho" v-model="form.color"/> Vermelho
      <input type="radio" name="color" value="verde" v-model="form.color" /> Verde
      <input type="radio" name="color" value="azul" v-model="form.color" /> Azul
  
      <select v-model="form.fruit">
        <option disabled selected>Selecione uma fruta</option>
        <option value="uva">Uva</option>
        <option value="banana">Banana</option>
        <option value="morango">Morango</option>
      </select>
    </form>
  
    <p>Nome: {{ form.name }}</p>
    <p>Idade: {{ form.age }}</p>
    <p>Mensagem: {{ form.message }}</p>
    <p>Newsletter: {{ form.newsletter }}</p>
    <p>Cor: {{ form.color }}</p>
    <p>Fruta: {{ form.fruit }}</p>
    </div>
    </div>

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

     form: {
        name: '',
        age: 0,
        message: '',
        newsletter: false,
        color: '',
        fruit: ''
     }

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
    },
    sendForm(){
      //axios.post('/register', form)
    }
  }
})
</script>

<style scoped>

input[type='email'],
  input[type='text'],
  select,
  textarea {
    display: block;
  }
  
  form {
    padding-bottom: 1rem;
    border-bottom: 2px solid #000;
  }
  .danger{
    color:red;
  }
  .success{
    color: green;
  }
</style>

