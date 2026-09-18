// Exercicios de <Fundamentos:
// Exerc.01: Olá,Mundo
console.log("__Exercicios de Fundamentos___");
console.log("Good Evening Guys...")
console.log()
console.log("04_Arrays:");
const nomes = ["Ana", "Joel", "Jonas", "Paulo", "João",  "Elais"]
for(let i =0; i < nomes.length; i++){
  console.log(nomes[i]);
}
console.log("05ªConverter horario");
function converterHorario(horario24){
    const hora = horario24.split(":")[0]
    const minuto = horario24.split(":")[1]
    const [hora, minuto] = horario24.split(":")
    console.log(hora, minuto)
}
converterHorario("22:55")
console.log()

console.log("The  End")