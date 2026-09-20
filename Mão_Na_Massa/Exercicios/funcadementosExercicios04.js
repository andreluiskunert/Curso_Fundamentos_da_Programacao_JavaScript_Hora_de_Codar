//  Fundamentos 
// Sábado_D'Noite, 12/09/2026
console.log("FundamentosExercícios04")
var minhaVariavel = "Good Evening_My Friend";
console.log(minhaVariavel);
console.log("Exerc04.")
console.log("Convertendo horario:")
function converterHorario(horario24) {
    // const hora = horario24.split(":") [0]
    // const minuto = horario24.split(":") [1]  
    const [hora, minuto] = horario24.split(":");
    // 15/12= 3, 23 % 12 = 11
    const hora12 = hora % 12 || 12;
    let periodo = "AM";
    if (hora > 12) {
        periodo = "PM";
    }
    console.log(`${hora12} : ${minuto} : ${periodo}`)  
}
converterHorario("22:52");
converterHorario("22:55");
converterHorario("23:05");
converterHorario("00:02");
converterHorario("00:52");
console.log()
console.log("The End")
