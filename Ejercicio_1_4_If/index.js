'use strict';

var numero1=5;
var numero2=8;

console.log('Número 1: ',numero1,' ,Numero 2: ',numero2)
if(numero1 < numero2) {
    console.log("Número 1 no es mayor que Número 2");
}

if(numero2 > 0) {
    console.log("Número 2 es positivo");
}

if(numero1 < 0) {
    console.log("Número 1 es negativo o distinto de cero");
}

if(++numero1 != numero2) {
    console.log("Incrementar en 1 unidad el valor de Número 1 no lo hace mayor o igual que Número 2");
}