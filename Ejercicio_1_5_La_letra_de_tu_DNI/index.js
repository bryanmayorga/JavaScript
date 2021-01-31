'use strict';

const dni = prompt('Ingrese número de DNI, Documento Nacional de Identidad');

console.log('DNI', dni);
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni < 0 || dni > 99999999) {
  alert('El número introducido no es correcto');
} 
//Calculo el residuo
else {
  const letra_DNI = letras[dni%23];
  alert('La letra del DNI es '+ letra_DNI);
  console.log('Letra del DNI', letra_DNI);
};

