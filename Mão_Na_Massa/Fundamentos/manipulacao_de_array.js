//domingo_d'noite,20/09/2026
console.log("__Manipulação de Arrays___");
console.log("Good Evening Guys...")
console.log()
const frutas = ["Maça", "Laranja"]
frutas.unshift("Acerola")
console.log(frutas)
frutas.shift()
console.log(frutas)
console.log( "§ map, filter, reduce -> arrow function....")
const numeros = [1 , 2, 3, 4, 5, 6, 7]
console.log("Numero do Array é : ", numeros)
console.log("find => retorna o primeiro elemento do critério")
const numeroPar = numeros.find((num) => num % 2 === 0)
console.log(numeroPar)
console.log("Filter => retorna todos os elementos que batem com o criterio")
const numerosPares = numeros.filter((num) => num % 2 === 0)
console.log("Todos os numeros pares são:", numerosPares)
console.log()
console.log("The End")