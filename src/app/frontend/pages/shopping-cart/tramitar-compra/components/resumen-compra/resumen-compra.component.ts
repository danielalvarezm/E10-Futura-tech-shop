import { Component } from '@angular/core';

@Component({
  selector: 'resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.css']
})

export class ResumenCompraComponent {

  total = Number(localStorage.getItem('price'));
  products = JSON.parse(localStorage.getItem('products'));
  

  constructor() { }

}
