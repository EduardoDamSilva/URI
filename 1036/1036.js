var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valores = lines.shift().split(" ");
const A = Number(valores.shift())
const B = Number(valores.shift())
const C = Number(valores.shift())

const delta = Math.pow(B, 2) - 4 * A * C

if(delta > 0 && A > 0){
    const formulaDeBaskaraX1 = (-B + Math.sqrt(delta)) / (2 * A)
    const formulaDeBaskaraX2 = (-B - Math.sqrt(delta)) / (2 * A)
    console.log(`R1 = ${formulaDeBaskaraX1.toFixed(5)}\nR2 = ${formulaDeBaskaraX2.toFixed(5)}`)
} else {
  console.log('Impossivel calcular')
}

