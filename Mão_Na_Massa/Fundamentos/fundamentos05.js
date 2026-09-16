// Terça-feira_D'noite, 15/09/2026
console.log("Fundamentos05")
var minhaVariavel = "Good Evening_My Friend";
console.log(minhaVariavel);
console.log()
console.log("Funções")
function cumprimentar(nome) {
    console.log("Olá Devs aqui quem fala é " + nome)
}
// invocacao = nome()
 cumprimentar("André Luis")
//  Escopo de varriaveis
let cor = "azul";
// let cor = "Verde";

function mostrarCor() {
    let cor = "Azul_Claro";
   console.log(cor);
}
console.log(cor);
mostrarCor();

//  hoisting = içamento
testHoisting();
function testHoisting(){
    console.log("Deu certo");

}
// arrow function
const testeArrow = () => console.log("Isso tambem é uma função...");
 testeArrow();
 // truthy e falsy
 const minhaVariavel1 = "" // falsey
 const minhaVariavel2 = "Algum texto";

if (minhaVariavel1) {
    console.log("é Verdadeiro...")
    
} else{
    console.log("é falso...")
}
if (minhaVariavel2) {
    console.log("é Verdadeiro...")
} else {
      console.log("é falso...")
}
// minhaVariavel1()
// minhaVariavel2()
// array, listas 
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0]);
numeros.push(6); // acrescenta 
console.log(numeros)
numeros.pop()// tirar
console.log(numeros) 
console.log()
console.log("The End")