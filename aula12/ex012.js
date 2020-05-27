var agora = new Date() // Para pegar a data do sistema
var hora = agora.getHours() // o getHours() pega a hora do sistema
console.log(`Agora são exatamente ${hora} horas`)
if(hora < 12){
    console.log(`Bom Dia!`)
}else if(hora <= 18){
    console.log(`Boa Tarde!`)
}else{
    console.log(`Boa Noite!`)
}