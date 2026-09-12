//  Fundamentos 
// Sábado_D'tarde, 12/09/2026
console.log("Fundamentos02")
var minhaVariavel = "Good Afternoom_My Friend";
console.log(minhaVariavel);
var meuObjeto = {};
var meuArray = {};
var meuNull = null;
var meuUNdefined = undefined;
// tipos de dados de cada deles
console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUNdefined);
// let e const 
let x = 10;
const y = 5;
// // y = 10;
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/home/desenvolvedor-full-stack/Home/Hora de Codar_2026/Curso Fundamentos da Programação_JS/Curso_Fundamentos_da_Programacao_JavaScript_Hora_de_Codar/Mão_Na_Massa/Fundamentos/fundamentos02.js:18:3)
//     at Module._compile (node:internal/modules/cjs/loader:1521:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1623:10)
//     at Module.load (node:internal/modules/cjs/loader:1266:32)
//     at Module._load (node:internal/modules/cjs/loader:1091:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
//     at node:internal/main/run_main_module:28:49

// Node.js v20.20.0
console.log(typeof x, y);
console.log(x, y)
console.log("Quarto Operações da Aritmetica")
console.log("x + y:" , x + x + y);
console.log("x * y:" , x * y);
console.log("x / y:"  , x / y);
console.log("x - y:" , x - y);
console.log("Operadores de Comparação:");
console.log(x == y);
console.log(x != y);
console.log("5" === 5); // sempre usei
console.log("5" == 5); // nunca usei
console.log("5" !== 5); // sempre usei
console.log("Operadores Lógicos: AND{&&} ou OR{||}")
console.log("AND -> &&")
console.log("Exemplo{10 > 5 && 20 > 5:}",10 > 5 && 20 > 5);
console.log("Exemplo{10 > 5 && 20 < 5:}",10 > 5 && 20 < 5);
console.log("Exemplo{10 > 5 && 20 < 5:}",10 > 5 && 20 > 5);
console.log("OR -> ||")
console.log("Exemplo{10 > 5 && 20 > 5:}",10 > 5 || 20 > 5);
console.log("Exemplo{10 > 5 && 20 < 5:}",10 > 5 || 20 < 5);
console.log("Exemplo{10 > 5 && 20 < 5:}",10 > 5 || 20 > 5)
console.log()


console.log("The End");