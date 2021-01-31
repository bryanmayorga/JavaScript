'use strict';

const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let suma=0;
for (let i=0;i<notas.length;i++){
    suma+=notas[i];
}
console.log('La suma con el bucle "for" es',suma);

suma=0;
for(const valor of notas){
    suma+=valor;
}

console.log('La suma con el bucle "for of" es',suma);