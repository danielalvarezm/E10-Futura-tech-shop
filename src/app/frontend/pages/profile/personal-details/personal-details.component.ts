import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ShoppingCartService } from "@app/backend/services/shoppingCart.service";

@Component({
  selector: "personal-details",
  templateUrl: "./personal-details.component.html",
  styleUrls: ["./personal-details.component.css"],
})
export class PersonalDetailsComponent implements OnInit{
  accountForm: FormGroup;
  firstName: any;
  lastName1: any;
  lastName2: any;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartService.getUser(localStorage.getItem('email'))
    .subscribe(res => {
      this.firstName = res.firstName;
      this.lastName1 = res.lastName1;
      this.lastName2 = res.lastName2;
    })
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.accountForm.controls;
  }
}
