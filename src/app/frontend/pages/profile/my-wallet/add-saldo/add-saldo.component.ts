import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShoppingCartService } from "@app/backend/services/shoppingCart.service";

@Component({
  selector: 'add-saldo',
  templateUrl: './add-saldo.component.html',
  styleUrls: ['./add-saldo.component.css']
})

export class AddSaldoComponent implements OnInit{

  amount = 0;
  currentWallet;
  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }
  
  ngOnInit(): void {
    this.shoppingCartService.getUser(localStorage.getItem('email'))
    .subscribe(res => {this.currentWallet = res.wallet})
  }

  ingresarSaldo() {
    if(this.amount >= 0){ // Compruebo si el valor insertado no es menor que 0
      this.shoppingCartService.updateUser(localStorage.getItem('email'), this.amount + this.currentWallet)
      .subscribe(
        res => {
          this.router.navigate(['/profile/monedero']);
        },
        err => console.log(err)
      );
      return true;
    } else {
      alert("La cantidad introducida no puede ser menor a 0");
      this.router.navigate(['/profile/monedero']);
      return false;
    }
    
  }

}