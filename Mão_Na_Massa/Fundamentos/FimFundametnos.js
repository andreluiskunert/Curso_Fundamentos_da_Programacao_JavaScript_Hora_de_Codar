// Terça-feira_D'noite, 15/09/2026
console.log("FimFundamentos")
var minhaVariavel = "Good Evening_My Friend";
console.log(minhaVariavel);
console.log()
// quarta-feira_D'noite 16/09/2026
console.log("===Concatenação===") // = +
const minhaStringNova = "Hey guys,whats up?";
console.log(minhaStringNova);
const minhaString3 = minhaStringNova + "Bora codar em JavaScript,Devs..."; // = +
console.log(minhaString3);
console.log("===Interpolação===");
const minhaString4 = `${minhaStringNova} Como vocÊ está?`; //=+
console.log(minhaString4);
console.log(minhaString4.length); // qtde de caracteres
console.log(minhaString4[5]);
console.log(minhaString4.toUpperCase());
console.log("===Data & Hora====")
const agora = Date();
console.log(agora);
const natal = new Date(2026, 12, 25);
console.log("Este o natal sera :" + natal);
console.log("=== Math===");
console.log(Math.PI);
console.log(Math.round(3.6));
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));

console.log()
console.log("The End")