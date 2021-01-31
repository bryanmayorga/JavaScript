'use strict';
//Primer opción
const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const filtrar_par = number.filter(function(numero_par){
if(numero_par%2==0){
    return numero_par;
}    
else{
    return;
}
});
console.log("Array de números pares ",filtrar_par);

const filtrar_impar = number.filter(function(numero_impar){
    if(numero_impar%2==1){
        return numero_impar;
    }    
    else{
        return;
    }
    });
console.log("Array de números impares ",filtrar_impar);

//Segunda opción
const pares = number.filter(each => each%2 === 0);
const impares = number.filter(each => each%2 !== 0);

console.log('pares', pares);
console.log('impares', impares);