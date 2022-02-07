import { Component } from '@angular/core';

@Component({
  selector: 'pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})

export class PagoComponent {

  constructor() { }

  codeInfo(){
    alert("El número de seguridad consta de tres dígitos y se encuentra en la parte posterior de la tarjeta");
  }
}
