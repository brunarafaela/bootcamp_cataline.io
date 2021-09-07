// //Mostrar a cidade do usuário

//Interfaces 

//Propriedade opcional com ?

// type UF = 'PE' | 'SP' | 'MG'

// interface User { 
//    name?: string,
//    address?: {
//     city: string, 
//     UF: UF
//   }
// }

// function showCity(user: User) {
//   return user.address?.city
//   return user.name?.toLocaleUpperCase()
// } 

// const response = showCity({
//   name: 'bruna lima',
//   address: {
//     city: 'sao paulo',
//     UF: 'SP'
//   }
// })

// console.log(response)

//Read only 

// interface User {
//   readonly name: string,
//   age: number
// }

// let user: User = {
//   name: 'bruna', 
//   age: 29,
// }

// user.age = 30
// user.name = 'brunar'

//Extends, implements 

// interface Veiculo {
//   rodas: number,
//   acelerar:() => void,
//   frear:() => void
// }

// interface Moto extends Veiculo {
//   capacete: boolean,
//   empinar: () => void 
// }

// let bross: Moto
// bross.acelerar

// class CriarVeiculo implements Veiculo {
//   rodas: number
//   constructor(rodas: number) {
//     this.rodas = rodas 
//   }

//   acelerar() {
//     console.log('vrum vrum')
//   }
// }

// //Pick & Omit - pegar e omitir

// interface Post {
//   id: number
//   title: string
//   description: string
// }

// type PostPreview = Pick<Post, 'id' | 'description'>

// let post: PostPreview
// post.description