import { Component, OnInit } from '@angular/core';
import { User } from '@app/frontend/_models';
import { ShoppingCartService } from '@app/backend/services/shoppingCart.service';

@Component({
  selector: 'datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})

export class DatosPersonalesComponent implements OnInit{  

  user = new User("", "", "", "", "", "", false, 0);

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getUser(localStorage.getItem('email'))
    .subscribe(
      res => {
       this.user = res
      }
    )
  }
}
