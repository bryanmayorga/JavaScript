'use strict';

const frase = prompt('Ingrese una frase:');

function MayusMinus(cadena) {

  var resultado = `La cadena "${cadena}" está formada por `;

  if (cadena === cadena.toUpperCase()) {
    resultado = "solo mayúsculas";
  } else if (cadena === cadena.toLowerCase()) {
    resultado = "solo minúsculas";
  } else {
    resultado = "minúsculas y mayúsculas";
  }
  return resultado
}

alert(MayusMinus(frase));
