'use strict';
class cuadrado {
    constructor(lado) {
      this.perimetro = lado * 4;
      this.area = lado*lado;
  
      console.log(`El cuadrado con lado de ${lado} cm tiene de perímetro de ${this.perimetro} cm y su área ${this.area} cm2`);
    }
  };
  
  const small = new cuadrado(2);
  const medium = new cuadrado(5);
  const big = new cuadrado(10);