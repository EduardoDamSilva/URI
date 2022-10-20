var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var infoItem1 = lines.shift().split(' ')
var infoItem2 = lines.shift().split(' ')

var codigoPeca1 =  infoItem1.shift()
var numeroPeca1 = infoItem1.shift()
var valorUnit1 = infoItem1.shift()

var codigoPeca2 = infoItem2.shift()
var numeroPeca2 = infoItem2.shift()
var valorUnit2 = infoItem2.shift()

var valorFinal = numeroPeca1 * valorUnit1 + numeroPeca2 * valorUnit2
console.log('VALOR A PAGAR: R$ ' + valorFinal.toFixed(2))

