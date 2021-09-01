//1 String, Number & Boolean
let message: string = 'Ola bruna'
message.toUpperCase()
console.log(message)

let total: number
total = 10.5
console.log(total)

let isOpen: boolean
isOpen = true
console.log(isOpen)

//2 Any, void, never

let stock: any = 89
stock = null

let strock: undefined
strock = undefined 

function showInformation(name: string = "Bruna"): void {
  console.log(name)
} 

function error() : never {
  throw new Error('error')  
}

//3 Array, Tuple & Enum

let items: number[]
items = [1,2,3,4,5]

let itens: [number, string, boolean]
itens = [1, 'bruna', false]

enum Colors {
  white = '#fff', 
  black = '#000'
}

let white: Colors = Colors.white
console.log(white)

 //4 Type Union

let age: number | string
age = 20
age = 'vinte'

function showPet(pet: 'dog' | 'cat') {
  console.log(pet)
}
showPet('cat') 

//5 Type Aliases
type Pet = 'dog' | 'cat' | 'zebra'

function displayPet(pet: Pet) {
  console.log(pet)
}
displayPet('dog') 

//6 Type Inference

let mensagem = 'Cataline'
// window.addEventListener('click', (event) => {
//   console.log(event.target)
// })

//7 Type Assertion
// const inputName = document.querySelector('#name') as HTMLInputElement
// inputName.value 
