import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "@app/backend/services/shoppingCart.service";

@Component({
  selector: 'my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.css']
})

export class MyAddressComponent implements OnInit {

  userName: any;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getUser(localStorage.getItem('email'))
    .subscribe(res => {
      this.userName = `${res.firstName} ${res.lastName1} ${res.lastName2}`; 
    }, err => console.log(err));
  }

}