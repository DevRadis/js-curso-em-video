var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} Horas.`)
  if (hora < 6) {
  console.log('Boa Madrugada!')
} else if (hora < 12) {
  console.log('Bom dia!')
} else if (hora < 18) {
  console.log('Boa tarde!')
} else if (hora < 0) {
  console.log('Boa Noite!')
}