var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dias = Number(lines.shift())

var anos = parseInt(dias/365)
var resto = dias % 365
var meses = parseInt(resto/30)
var dias = resto % 30

console.log(anos + ' ano (s)')
console.log(meses + ' mes (es)')
console.log(dias + ' dia (s)')
