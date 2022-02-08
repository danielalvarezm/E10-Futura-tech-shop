import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '@app/backend/services/shoppingCart.service';

@Component({
  selector: 'pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})

export class PagoComponent {

  idProducts = []
  total = Number(localStorage.getItem('price'));
  products = JSON.parse(localStorage.getItem('products'));

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  codeInfo() {
    alert("El número de seguridad consta de tres dígitos y se encuentra en la parte posterior de la tarjeta");
  }

  pay() {
    this.shoppingCartService.getUser(localStorage.getItem('email')).subscribe(
      res => {
        res.wallet = res.wallet - this.total
        if (res.wallet < 0) {
          //error
          alert("No se ha podido realizar el pago debido a que no hay saldo suficiente");
        } else {
          this.shoppingCartService.updateUser(localStorage.getItem('email'), res.wallet).subscribe(
            res => {
              this.router.navigate(['/carrito/confirmacion']);
            },                
            err => console.log(err)
          );
        }
      },
      err => console.log(err)
    );
  }
}
