var input = require('fs').readFileSync('stdin', 'utf8');

var [a]= input.split()
var valor = parseFloat(a)
let cedula = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let aux = 0
console.log("NOTAS:")
for (let i = 0; i < 6; i++) {
    aux = parseInt(valor / cedula[i])
    console.log(`${aux} nota(s) de R$ ${cedula[i].toFixed(2)}`)
    valor = valor % cedula[i]
}
console.log("MOEDAS:")
for (let j = 6; j < cedula.length; j++) {
    aux = parseInt(valor / cedula[j])
    console.log(`${aux} moeda(s) de R$ ${cedula[j].toFixed(2)}`)
    valor = valor % cedula[j] + 0.00001
}





















/* ERRO! Por conta da impressisão das linguagens ao fazerem divisões */

/* var valor = Number(lines.shift()) */

/* Notas */
/* var notas100 = parseInt(valor / 100)
var resto = valor % 100
var notas50 = parseInt(resto / 50)
resto = resto % 50
var notas20 = parseInt(resto / 20)
resto = resto % 20
var notas10 = parseInt(resto / 10)
resto = resto % 10
var notas5 = parseInt(resto / 5)
resto = resto % 5
var notas2 = parseInt(resto / 2)
resto = resto % 2 */

/* Moedas */
/* var moeda1 = parseInt(resto / 1)
resto = resto % 1
var moeda05 = parseInt(resto / 0.5)
resto = resto % 0.5
var moeda025 = parseInt(resto / 0.25)
resto = resto % 0.25
var moeda010 = parseInt(resto / 0.1)
resto = resto % 0.1
var moeda005 = parseInt(resto / 0.05)
resto = resto % 0.05
var moeda001 = Math.floor(resto / 0.01)
 */
/* Exibição */
/* console.log(
  `NOTAS:
${notas100} nota(s) de R$ 100.00
${notas50} nota(s) de R$ 50.00
${notas20} nota(s) de R$ 20.00
${notas10} nota(s) de R$ 10.00
${notas5} nota(s) de R$ 5.00
${notas2} nota(s) de R$ 2.00
MOEDAS:
${moeda1} moeda(s) de R$ 1.00
${moeda05} moeda(s) de R$ 0.50
${moeda025} moeda(s) de R$ 0.25
${moeda010} moeda(s) de R$ 0.10
${moeda005} moeda(s) de R$ 0.05
${moeda001} moeda(s) de R$ 0.01`) */


/* console.log("NOTAS:")
console.log(notas100 + " nota(s) de R$ 100.00")
console.log(notas50 + " nota(s) de R$ 50.00")
console.log(notas20 + " nota(s) de R$ 20.00")
console.log(notas10 + " nota(s) de R$ 10.00")
console.log(notas5 + " nota(s) de R$ 5.00")
console.log(notas2 + " nota(s) de R$ 2.00")
console.log("MOEDAS:")
console.log(moeda1 + " moeda(s) de R$ 1.00")
console.log(moeda05 + " moeda(s) de R$ 0.50")
console.log(moeda025 + " moeda(s) de R$ 0.25")
console.log(moeda010 + " moeda(s) de R$ 0.10")
console.log(moeda005 + " moeda(s) de R$ 0.05")
console.log(moeda001 + " moeda(s) de R$ 0.01") */
