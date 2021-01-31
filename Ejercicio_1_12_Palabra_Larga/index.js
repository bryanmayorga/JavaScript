'use strict';
const words = ['Environmental', 'Systems', 'Research', 'Institute'];

const largo_palabra=words.reduce((acumulador,palabraActual)=>{


    if(acumulador.length > palabraActual.length){
        return acumulador;
    }
    else{
        return palabraActual;
    }
});
console.log("Array de palabras:",words);
console.log("Palabra más larga:",largo_palabra);