var input = require('fs').readFileSync('./stdin', 'utf8');

var lines = input.split('\n');

var a = Number(lines.shift())
var b = Number(lines.shift())

var media = (a * 3.5 + b * 7.5) / 11
console.log('MEDIA = ' + media.toFixed(5))