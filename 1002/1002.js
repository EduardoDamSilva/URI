var input = require('fs').readFileSync('./stdin', 'utf8');

var lines = input.split('\n');

var a = Number(lines.shift())
var n = 3.14159

var area = n * a * a

console.log('A=' + area.toFixed(4))