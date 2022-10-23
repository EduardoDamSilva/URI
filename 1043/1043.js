var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const A = Number(lines.shift())
const B = Number(lines.shift())
const C = Number(lines.shift())

if ((A > Math.abs(B - C) && A < B + C) || (B > Math.abs(A - C) && B < A + C) || (C > Math.abs(A - B) && C < A + B)){
  const perimetro = A + B + C
  console.log(`Perimetro = ${perimetro.toFixed(1)}`)
} else {
  const areaTrapezio = (A + B) * C / 2
  console.log(`Area = ${areaTrapezio.toFixed(1)}`)
}




