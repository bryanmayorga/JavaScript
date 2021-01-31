'use strict';
let promedio=0;
const times = [60, 75, 79, 80, 55, 59];
const suma_total=times.reduce((acumulador,valor_actual)=>(acumulador+valor_actual),0);
promedio=suma_total/times.length;
console.log("Promedio",promedio);
