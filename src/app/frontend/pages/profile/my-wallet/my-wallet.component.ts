import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "@app/backend/services/shoppingCart.service";

@Component({
    selector: 'my-wallet',
    templateUrl: './my-wallet.component.html',
    styleUrls: ['./my-wallet.component.css']
  })

  export class MyWalletComponent implements OnInit {
    
    saldoUsuario = 0;
    userName: any;

    constructor(private shoppingCartService: ShoppingCartService) {}
  

    ngOnInit(): void {
        this.shoppingCartService.getUser(localStorage.getItem('email'))
        .subscribe(res => {
          this.saldoUsuario = res.wallet;
          this.userName = res.firstName;
        })
    }
  }