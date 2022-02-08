import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from '@app/backend/services/mobile.service';
import {ShoppingCartService} from '@app/backend/services/shoppingCart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  idProducts = []
  products = []

  total = 0

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getIdProducts(localStorage.getItem('email'))
    .subscribe(
      res => {
        this.idProducts = res;
        for (let i = 0; i < this.idProducts.length; i++) {
          this.shoppingCartService.getProduct(this.idProducts[i].id).subscribe(
            res => {
              this.products.push({"product": res, "amount": this.idProducts[i].amount});
              this.total += res.price * Number(this.idProducts[i].amount);
              if (i == this.idProducts.length - 1) {
                this.total = Math.trunc(this.total * 100) / 100;
                localStorage.setItem('price', String(this.total));
                localStorage.setItem('products', JSON.stringify(this.products));
              }
            },
            err => console.log(err)
          );
        }
      },
      err => console.log(err)
    );
  }
}

