var input = require('fs').readFileSync('./stdin', 'utf8');

var lines = input.split('\n');

var a = Number(lines.shift())
var b = Number(lines.shift())

var soma = a + b

console.log('SOMA = ' + soma);