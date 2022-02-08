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
    this.checkStock();
    this.shoppingCartService.getUser(localStorage.getItem('email')).subscribe(
      res => {
        res.wallet = res.wallet - this.total
        if (res.wallet < 0) {
          //error
          alert("No se ha podido realizar el pago debido a que no hay saldo suficiente");
        } else {
          let body = {"wallet": res.wallet, "products": this.products};
          this.shoppingCartService.doPurchase(localStorage.getItem('email'), body).subscribe(
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

  checkStock() {  
    let overStock = false;  
    let price = 0;

    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].product.stock < this.products[i].amount) {
        overStock = true;
        this.shoppingCartService.deleteProduct(this.products[i].id, localStorage.getItem("email")).subscribe();

      } else {
        price += this.products[i].product.price * this.products[i].amount;
      }
    }
    if (overStock) {
      localStorage.setItem('products', JSON.stringify(this.products));
      localStorage.setItem('price', String(price));
      window.alert("Algunos productos no se han podido añadir a la compra debido a que no tenían stock suficiente. Será redirigido al carrito.");
      this.router.navigate(['/carrito']);
    }
  }
}
