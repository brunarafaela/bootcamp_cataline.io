import express from 'express'

const app = express()

//Métodos http -> get, post, put, delete
//http://localhost:3333/users

app.get('/users', (request, response) => {
  return response.json(['usuario 1', 'usuario 2'])
})

app.post('/users', (request, response) => {
  return response.json({message: 'Criando usuário'})
})

app.put("/users", (request, response) => {
  return response.json({ message: "Atualizando usuário" });
});

app.delete("/users", (request, response) => {
  return response.json({ message: "Excluindo usuário" });
});


app.listen('3333', () => {
  console.log('Back-end started')
})