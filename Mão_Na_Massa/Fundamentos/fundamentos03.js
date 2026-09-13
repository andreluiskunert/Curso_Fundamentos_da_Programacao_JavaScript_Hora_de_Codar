// Sábado_D'noite, 12/09/2026
console.log("Fundamentos03")
var minhaVariavel = "Good Evening_My Friend";
console.log(minhaVariavel);
//--///--
console.log("Conversão de tipos:")
const meuNumero2 = "753";
const meuNumeroConvertido =  Number(meuNumero2);
console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);
// -- // ---
console.log("Estrutura de Condição - if, else, else if:")
const idade = 24;
if(idade < 13){
  console.log("Criança")
} else if(idade < 20){
  console.log("Adolescente")
}
else {
    console.log("Adulto")
}
if(true){
    console.log("Isso executado...")
}
console.log("Switch:")
const fruta = "Maça"; // Obs.: o defaut pra quanto não houve nenhuma resposta verdadeira
switch (fruta) {
    case "Banana":
        console.log("Banana é a fruta")
        break;
    case "Maça":
        console.log("Maça é a fruta")
       break;
    default:
        console.log("Fruta não encontrada")
        break;
}

console.log("The End")