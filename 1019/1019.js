var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valorHora = Number(lines.shift());

var horas = parseInt(valorHora/3600)
var resto = valorHora % 3600
var minutos = parseInt(resto/60)
var segundos = resto % 60

console.log(`${horas}:${minutos}:${segundos}`)

