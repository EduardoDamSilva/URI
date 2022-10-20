var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ')
var A = Number(valores.shift())
var B = Number(valores.shift())
var C = Number(valores.shift())


var areaTriangulo = A * C / 2
var areaCirculo = 3.14159 * Math.pow(C, 2)
var areaTrapezio = (A + B) * C / 2
var areaQuadrado = Math.pow(B, 2)
var areaRetangulo = A * B

console.log("TRIANGULO: " + areaTriangulo.toFixed(3))
console.log("CIRCULO: " + areaCirculo.toFixed(3))
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3))
console.log("QUADRADO: " + areaQuadrado.toFixed(3))
console.log("RETANGULO: " + areaRetangulo.toFixed(3))