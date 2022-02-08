import { Component, OnInit } from '@angular/core';
import { User } from '@app/frontend/_models';
import { ShoppingCartService } from '@app/backend/services/shoppingCart.service';

@Component({
  selector: 'envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})

export class EnvioComponent implements OnInit{

  user = new User("", "", "", "", "", "", false, 0);

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.getUser(localStorage.getItem('email'))
    .subscribe(
      res => {
       this.user = res
      },
       err => {
        console.log(err);
       }
    )
  }
}
