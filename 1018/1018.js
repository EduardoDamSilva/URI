var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = Number(lines.shift());

var notas100 = Math.floor(valor/100)
var notas50 = Math.floor((valor % 100) / 50)
var notas20 = Math.floor((valor % 100 % 50) / 20)
var notas10 = Math.floor((valor % 100 % 50 % 20) / 10)
var notas5 = Math.floor((valor % 100 % 50 % 20 % 10) / 5)
var notas2 = Math.floor((valor % 100 % 50 % 20 % 10 % 5) / 2)
var notas1 = Math.floor((valor % 100 % 50 % 20 % 10 % 5 % 2) / 1)


console.log(valor)
console.log(notas100 + " nota(s) de R$ 100,00")
console.log(notas50 + " nota(s) de R$ 50,00")
console.log(notas20 + " nota(s) de R$ 20,00")
console.log(notas10 + " nota(s) de R$ 10,00")
console.log(notas5 + " nota(s) de R$ 5,00")
console.log(notas2 + " nota(s) de R$ 2,00")
console.log(notas1 + " nota(s) de R$ 1,00")

