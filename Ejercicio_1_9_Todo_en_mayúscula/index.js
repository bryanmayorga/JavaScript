'use strict';

const topics = ['JavaScript', 'Variables', 'funciones', 'condicionales', 'bucles'];

//Primera Opción
const ConvertirMayusculas= topics.map(function(palabra){
    return palabra.toUpperCase()});

console.log("Array original",topics);

console.log("Conversión a mayúsculas",ConvertirMayusculas);

ConvertirMayusculas.reverse();
console.log("Orden inverso",ConvertirMayusculas);

