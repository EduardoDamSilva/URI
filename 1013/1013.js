var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(" ")
var a = Number(valores.shift())
var b = Number(valores.shift())
var c = Number(valores.shift())

var maiorAB = ((a + b + Math.abs(a - b)) / 2 )
var maiorXC = ((c + maiorAB + Math.abs(c - maiorAB)) / 2)

console.log(maiorXC + " eh o maior")
