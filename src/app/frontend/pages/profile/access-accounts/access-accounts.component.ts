import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "@app/backend/services/shoppingCart.service";


@Component({
    selector: 'access-account',
    templateUrl: './access-accounts.component.html',
    styleUrls: ['./access-accounts.component.css']
  })

  export class AccessAccountsComponent implements OnInit {

    userEmail: any;
    constructor(private shoppingCartService: ShoppingCartService) { }
    
    ngOnInit(): void {
      this.userEmail = localStorage.getItem('email');
    }
  
  }