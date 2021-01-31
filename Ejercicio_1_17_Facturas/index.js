'use strict';
class Factura{
    constructor(cliente,elementos){
      this.cliente = cliente;
      this.elementos = elementos;
      this.informacion = {
        baseImponible: 0,
        iva: 12,
        total:0,
        formaPago: ""
        };
    this.calculaTotal = () => {
        for (var i = 0; i <this.elementos.length; i++) {

            this.informacion.baseImponible += this.elementos[i].precio*this.elementos[i].cantidad;
        }
        this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
    }

    this.imprimirValorTotal = function () {
        this.calculaTotal();
        console.log("El valor total es USD",this.informacion.total);
    }
}
}
class Cliente {
    constructor(nombre, direccion, telefono, nif) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.nif = nif;
    }
}

class Elemento {
    constructor(descripcion, cantidad, precio) {
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
    }
  }

  var nuevoCliente = new Cliente("Bryan Mayorga", "Ambato-Ecuador", "+593 984688711", "1804416368");
  var nuevosElementos = [new Elemento("Patatas", "10", "5"), new Elemento("Zanahorias", "5", "0.5"),new Elemento("Sandías", "1", "3")];
  var nuevaFactura = new Factura(nuevoCliente, nuevosElementos);
  console.log(nuevoCliente);
  console.log(nuevosElementos);
  console.log(nuevaFactura.informacion);
  nuevaFactura.imprimirValorTotal();