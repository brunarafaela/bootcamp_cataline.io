import express from 'express'
import {v4 as uuid} from 'uuid'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

interface User {
  id: string,
  name: string,
  email: String
}

const users: User[] = [] 

//Métodos http -> get, post, put, delete
//http://localhost:3333/users

//Parametros
// - Query - filtro de nformacoes, paginacoes
// - Route - especificar, identificar um recurso em atualizacao e exclusao
// - Request body - enviar requisicoes, atualizar
 
app.get('/users', (request, response) => {
  return response.json(users)
  // const {perPage, currentPage} = request.query
  // console.log(perPage)
  // console.log(currentPage)
})

app.post('/users', (request, response) => {
  // const body = request.body
  // console.log(body)
  // return response.json({message: 'Criando usuário'})
  const { name, email } = request.body
  const user = { id: uuid(), name, email}

  users.push(user)
  return response.json(user)
})

app.put("/users/:id", (request, response) => {
  // const {id} = request.params
  // console.log(id)
  // return response.json({ message: "Atualizando usuário" });

  const {id} = request.params
  const { name, email} = request.body
  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex < 0 ) {
    return response.status(404).json({error: 'User not found.'})
  }
  const user = { id, name, email}
  users[userIndex] = user
  return response.json(user)

});

app.delete("/users/:id", (request, response) => {
  // return response.json({ message: "Excluindo usuário" });
  const {id} = request.params
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex < 0) {
    return response.status(404).json({ error: "User not found." });
  }

  users.splice(userIndex, 1)

  return response.status(204).send()  
});


app.listen('3333', () => {
  console.log('Back-end started')
})