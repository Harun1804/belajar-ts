let username: string = 'aegis'
let age: number = 24
let active: boolean = false
const gender: string = 'Male'

let cars: string[] = ['lamborghini', 'toyota', 'ferrari']
let person: {
  name: string,
  age: number
}

person = {
  name: 'harun',
  age: 24
}

let greeting : (name: string) => string

greeting = function (name: string) {
  return `Hello ${name}`
}